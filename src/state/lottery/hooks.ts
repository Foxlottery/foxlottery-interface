import { Currency } from '@foxlottery/core-sdk'
import { useAppDispatch } from 'app/state/hooks'
import { useCallback } from 'react'
import { useSelector } from 'react-redux'

import { AppState } from '..'
import { updateCryptoCurrency } from './reducer'

export function useIsSelectedCryptoCurrency(cryptoCurrency: Currency): boolean {
  const selectedCryptoCurrency = useSelector((state: AppState) => state.lottery.cryptoCurrency)
  return selectedCryptoCurrency == cryptoCurrency
}

export function useSelectedCryptoCurrency(): Currency | undefined {
  return useSelector((state: AppState) => state.lottery.cryptoCurrency)
}

export function useSelectCryptoCurrency(): (cryptoCurrency: Currency) => void {
  const dispatch = useAppDispatch()
  return useCallback(
    (cryptoCurrency: Currency) => {
      dispatch(updateCryptoCurrency(cryptoCurrency))
    },
    [dispatch]
  )
}
