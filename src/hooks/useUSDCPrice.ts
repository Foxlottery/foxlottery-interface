import { ChainId, Currency, CurrencyAmount, Erc20Currency, Price, USD } from '@foxlottery/core-sdk'
import { useMemo } from 'react'

import { useActiveWeb3React } from '../services/web3'

// StableCoin amounts used when calculating spot price for a given currency.
// The amount is large enough to filter low liquidity pairs.
export const STABLECOIN_AMOUNT_OUT: { [chainId: number]: CurrencyAmount<Erc20Currency> } = {
  [ChainId.ETHEREUM]: CurrencyAmount.fromRawAmount(USD[ChainId.ETHEREUM], 100_000e6),
  [ChainId.MATIC]: CurrencyAmount.fromRawAmount(USD[ChainId.MATIC], 100_000e6),
  [ChainId.BSC]: CurrencyAmount.fromRawAmount(USD[ChainId.BSC], 100_000e18),
  [ChainId.AVALANCHE]: CurrencyAmount.fromRawAmount(USD[ChainId.AVALANCHE], 100_000e6),
  [ChainId.RINKEBY]: CurrencyAmount.fromRawAmount(USD[ChainId.RINKEBY], 100_000e18),
  [ChainId.GÖRLI]: CurrencyAmount.fromRawAmount(USD[ChainId.GÖRLI], 100_000e18),
  [ChainId.MATIC_TESTNET]: CurrencyAmount.fromRawAmount(USD[ChainId.MATIC_TESTNET], 100_000e18),
  [ChainId.BSC_TESTNET]: CurrencyAmount.fromRawAmount(USD[ChainId.BSC_TESTNET], 100_000e18),
  [ChainId.AVALANCHE_TESTNET]: CurrencyAmount.fromRawAmount(USD[ChainId.AVALANCHE_TESTNET], 100_000e18),
}

/**
 * Returns the price in USDC of the input currency
 * @param currency currency to compute the USDC price of
 */
export default function useUSDCPrice(currency?: Currency): Price<Currency, Erc20Currency> | undefined {
  const { chainId } = useActiveWeb3React()

  const amountOut = chainId ? STABLECOIN_AMOUNT_OUT[chainId] : undefined
  const stablecoin = amountOut?.currency

  return useMemo(() => {
    if (!currency || !stablecoin) {
      return undefined
    }

    // handle usdc
    if (currency?.wrapped.equals(stablecoin)) {
      return new Price(stablecoin, stablecoin, '1', '1')
    }

    // const prices = calcErc20Prices(allowedPools, stablecoin)
    // return prices[(currency as Erc20).address]

    return undefined
  }, [currency, stablecoin])
}

export function useUSDCValue(currencyAmount: CurrencyAmount<Currency> | undefined | null) {
  // Bandaid solution for now, might become permanent
  const price = useUSDCPrice(currencyAmount?.currency)

  return useMemo(() => {
    if (!price || !currencyAmount) return null
    try {
      return price.quote(currencyAmount)
    } catch (error) {
      return null
    }
  }, [currencyAmount, price])
}

export function useUSDCPriceWithLoadingIndicator(currency?: Currency) {
  const price = useUSDCPrice(currency)
  return useMemo(() => {
    if (!price || !currency) return { price: undefined, loading: false }
    try {
      return { price, loading: false }
    } catch (error) {
      return { price: undefined, loading: false }
    }
  }, [currency, price])
}

export function useUSDCValueWithLoadingIndicator(currencyAmount: CurrencyAmount<Currency> | undefined) {
  const price = useUSDCPrice(currencyAmount?.currency)
  return useMemo(() => {
    if (!price || !currencyAmount) return { value: undefined, loading: false }
    try {
      return { value: price.quote(currencyAmount), loading: false }
    } catch (error) {
      return { value: undefined, loading: false }
    }
  }, [currencyAmount, price])
}
