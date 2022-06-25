import { Currency, Erc20Currency } from '@foxlottery/core-sdk'
import { chainErc20CurrencyList } from 'app/config/chainErc20CurrencyList'
import { useActiveWeb3React } from 'app/services/web3'
import flatMap from 'lodash/flatMap'
import { useMemo } from 'react'

export function useAllCurrencyCombinations(
  currencyA?: Currency,
  currencyB?: Currency
): [Erc20Currency, Erc20Currency][] {
  const { chainId } = useActiveWeb3React()

  const [erc20CurrencyA, erc20CurrencyB] = chainId ? [currencyA?.wrapped, currencyB?.wrapped] : [undefined, undefined]

  const bases: Erc20Currency[] = useMemo(() => {
    if (!chainId) return []

    const common = chainErc20CurrencyList[chainId] ?? []

    return [...common]
  }, [chainId])

  const basePairs: [Erc20Currency, Erc20Currency][] = useMemo(
    () => flatMap(bases, (base): [Erc20Currency, Erc20Currency][] => bases.map((otherBase) => [base, otherBase])),
    [bases]
  )

  return useMemo(
    () =>
      erc20CurrencyA && erc20CurrencyB
        ? [
            // the direct pair
            [erc20CurrencyA, erc20CurrencyB],
            // erc20Currency A against all bases
            ...bases.map((base): [Erc20Currency, Erc20Currency] => [erc20CurrencyA, base]),
            // erc20Currency B against all bases
            ...bases.map((base): [Erc20Currency, Erc20Currency] => [erc20CurrencyB, base]),
            // each base against all bases
            ...basePairs,
          ]
            .filter((erc20Currencies): erc20Currencies is [Erc20Currency, Erc20Currency] =>
              Boolean(erc20Currencies[0] && erc20Currencies[1])
            )
            .filter(([t0, t1]) => t0.address !== t1.address)
        : [],
    [erc20CurrencyA, erc20CurrencyB, bases, basePairs]
  )
}
