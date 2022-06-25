import { Interface } from '@ethersproject/abi'
import { Currency, CurrencyAmount, Erc20Currency, JSBI, NATIVE } from '@foxlottery/core-sdk'
import ERC20_ABI from 'app/constants/abis/erc20.json'
import { isAddress } from 'app/functions/validate'
import { useInterfaceMulticall } from 'app/hooks/useContract'
import { useMultipleContractSingleData, useSingleContractMultipleData } from 'app/lib/hooks/multicall'
import { useActiveWeb3React } from 'app/services/web3'
import { useSelectedErc20Currency } from 'app/state/lottery/hooks'
import { useMemo } from 'react'

/**
 * Returns a map of the given addresses to their eventually consistent ETH balances.
 */
export function useNativeCurrencyBalances(uncheckedAddresses?: (string | undefined)[]): {
  [address: string]: CurrencyAmount<Currency> | undefined
} {
  const { chainId } = useActiveWeb3React()
  const multicallContract = useInterfaceMulticall()

  const validAddressInputs: [string][] = useMemo(
    () =>
      uncheckedAddresses
        ? uncheckedAddresses
            .map(isAddress)
            .filter((a): a is string => a !== false)
            .sort()
            .map((addr) => [addr])
        : [],
    [uncheckedAddresses]
  )

  const results = useSingleContractMultipleData(multicallContract, 'getEthBalance', validAddressInputs)

  return useMemo(
    () =>
      validAddressInputs.reduce<{ [address: string]: CurrencyAmount<Currency> }>((memo, [address], i) => {
        const value = results?.[i]?.result?.[0]
        if (value && chainId)
          memo[address] = CurrencyAmount.fromRawAmount(NATIVE[chainId], JSBI.BigInt(value.toString()))
        return memo
      }, {}),
    [validAddressInputs, chainId, results]
  )
}

const ERC20Interface = new Interface(ERC20_ABI)
const currencyBalancesGasRequirement = { gasRequired: 125_000 }

/**
 * Returns a map of token addresses to their eventually consistent token balances for a single account.
 */
export function useErc20CurrencyBalancesWithLoadingIndicator(
  address?: string,
  erc20Currencies?: (Erc20Currency | undefined)[]
): [{ [currencyAddress: string]: CurrencyAmount<Erc20Currency> | undefined }, boolean] {
  const validatedErc20Currencies: Erc20Currency[] = useMemo(
    () => erc20Currencies?.filter((t?: Erc20Currency): t is Erc20Currency => isAddress(t?.address) !== false) ?? [],
    [erc20Currencies]
  )
  const validatedErc20CurrencyAddresses = useMemo(
    () => validatedErc20Currencies.map((vt) => vt.address),
    [validatedErc20Currencies]
  )

  const balances = useMultipleContractSingleData(
    validatedErc20CurrencyAddresses,
    ERC20Interface,
    'balanceOf',
    useMemo(() => [address], [address]),
    currencyBalancesGasRequirement
  )

  const anyLoading: boolean = useMemo(() => balances.some((callState) => callState.loading), [balances])

  return useMemo(
    () => [
      address && validatedErc20Currencies.length > 0
        ? validatedErc20Currencies.reduce<{ [currencyAddress: string]: CurrencyAmount<Erc20Currency> | undefined }>(
            (memo, erc20Currency, i) => {
              const value = balances?.[i]?.result?.[0]
              const amount = value ? JSBI.BigInt(value.toString()) : undefined
              if (amount) {
                memo[erc20Currency.address] = CurrencyAmount.fromRawAmount(erc20Currency, amount)
              }
              return memo
            },
            {}
          )
        : {},
      anyLoading,
    ],
    [address, validatedErc20Currencies, anyLoading, balances]
  )
}

export function useErc20CurrencyBalances(
  address?: string,
  erc20Currencies?: (Erc20Currency | undefined)[]
): { [currencyAddress: string]: CurrencyAmount<Erc20Currency> | undefined } {
  return useErc20CurrencyBalancesWithLoadingIndicator(address, erc20Currencies)[0]
}

// get the balance for a single token/account combo
export function useErc20CurrencyBalance(
  account?: string,
  erc20Currency?: Erc20Currency
): CurrencyAmount<Erc20Currency> | undefined {
  const erc20CurrencyBalances = useErc20CurrencyBalances(
    account,
    useMemo(() => [erc20Currency], [erc20Currency])
  )
  if (!erc20Currency) return undefined
  return erc20CurrencyBalances[erc20Currency.address]
}

export function useCurrencyBalances(
  account?: string,
  currencies?: (Currency | undefined)[]
): (CurrencyAmount<Currency> | undefined)[] {
  const erc20Currencies = useMemo(
    () => currencies?.filter((currency): currency is Erc20Currency => currency?.isErc20 ?? false) ?? [],
    [currencies]
  )

  const erc20CurrencyBalances = useErc20CurrencyBalances(account, erc20Currencies)
  const containsETH: boolean = useMemo(() => currencies?.some((currency) => currency?.isNative) ?? false, [currencies])
  const ethBalance = useNativeCurrencyBalances(useMemo(() => (containsETH ? [account] : []), [containsETH, account]))

  return useMemo(
    () =>
      currencies?.map((currency) => {
        if (!account || !currency) return undefined
        if (currency.isErc20) return erc20CurrencyBalances[currency.address]
        if (currency.isNative) return ethBalance[account]
        return undefined
      }) ?? [],
    [account, currencies, ethBalance, erc20CurrencyBalances]
  )
}

export default function useCurrencyBalance(
  account?: string,
  currency?: Currency
): CurrencyAmount<Currency> | undefined {
  return useCurrencyBalances(
    account,
    useMemo(() => [currency], [currency])
  )[0]
}

export function useCurrentUserCurrencyBalance(currency?: Currency): CurrencyAmount<Currency> | undefined {
  const { account } = useActiveWeb3React()
  return useCurrencyBalance(account ? account : undefined, currency)
}

export function useCurrentUserCurrentCurrencyBalance(): CurrencyAmount<Currency> | undefined {
  const currency = useSelectedErc20Currency()
  return useCurrentUserCurrencyBalance(currency)
}
