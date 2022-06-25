import { Erc20Currency, Lottery } from '@foxlottery/core-sdk'
import { useAppDispatch } from 'app/state/hooks'
import { useCurrentUserCurrentCurrencyBalance } from 'app/state/wallet/hooks'
import { useCallback } from 'react'
import { useSelector } from 'react-redux'
import { useWeb3React } from 'web3-react-core'

import { AppState } from '..'
import { changeInputValue, changeLottery, updateErc20Currency } from './reducer'

export function useIsSelectedCryptoErc20Currency(erc20Currency: Erc20Currency): boolean {
  const selectedCryptoErc20Currency = useSelector((state: AppState) => state.lottery.erc20Currency)
  return selectedCryptoErc20Currency == erc20Currency
}

export function useSelectedErc20Currency(): Erc20Currency | undefined {
  return useSelector((state: AppState) => state.lottery.erc20Currency)
}

export function useSelectErc20Currency(): (erc20Currency: Erc20Currency) => void {
  const dispatch = useAppDispatch()
  return useCallback(
    (erc20Currency: Erc20Currency) => {
      dispatch(updateErc20Currency(erc20Currency))
      dispatch(changeLottery(undefined))
    },
    [dispatch]
  )
}

export function useChangeInputValue(): (inputValue: number) => void {
  const dispatch = useAppDispatch()
  return useCallback(
    (inputValue: number) => {
      dispatch(changeInputValue(inputValue))
    },
    [dispatch]
  )
}

export function useInputValue(): number | undefined {
  return useSelector((state: AppState) => state.lottery.inputValue)
}

export function useButtonDisabled(): boolean {
  const { account, chainId } = useWeb3React()
  const erc20Currency = useSelectedErc20Currency()
  const inputValue = useInputValue()
  const currentErc20CurrencyBalance = useCurrentUserCurrentCurrencyBalance()

  return (
    !!account &&
    !!chainId &&
    !!erc20Currency &&
    !!currentErc20CurrencyBalance &&
    !!inputValue &&
    (currentErc20CurrencyBalance?.toSignificant() as unknown as number) <= inputValue
  )
}

export function useLottery(): Lottery | undefined {
  return useSelector((state: AppState) => state.lottery.lottery)
}

export function useChangeLottery(): (lottery?: Lottery) => void {
  const dispatch = useAppDispatch()

  return useCallback(
    (lottery?: Lottery) => {
      dispatch(updateErc20Currency(lottery?.erc20Currency))
      dispatch(changeLottery(lottery))
    },
    [dispatch]
  )
}
