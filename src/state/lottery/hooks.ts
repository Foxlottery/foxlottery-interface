import { Currency, TokenTimedRandomSendContract } from '@foxlottery/core-sdk'
import { useAppDispatch } from 'app/state/hooks'
import { useCurrentUserCurrentCurrencyBalance } from 'app/state/wallet/hooks'
import { useCallback } from 'react'
import { useSelector } from 'react-redux'
import { useWeb3React } from 'web3-react-core'

import { AppState } from '..'
import { changeInputValue, changeTokenTimedRandomSendContract, updateCryptoCurrency } from './reducer'

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
      dispatch(changeTokenTimedRandomSendContract(undefined))
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
  const cryptoCurrency = useSelectedCryptoCurrency()
  const inputValue = useInputValue()
  const currentCurrencyBalance = useCurrentUserCurrentCurrencyBalance()

  return (
    !!account &&
    !!chainId &&
    !!cryptoCurrency &&
    !!currentCurrencyBalance &&
    !!inputValue &&
    (currentCurrencyBalance?.toSignificant() as unknown as number) <= inputValue
  )
}

export function useTokenTimedRandomSendContract(): TokenTimedRandomSendContract | undefined {
  return useSelector((state: AppState) => state.lottery.tokenTimedRandomSendContract)
}

export function useChangeTokenTimedRandomSendContract(): (
  tokenTimedRandomSendContract?: TokenTimedRandomSendContract
) => void {
  const dispatch = useAppDispatch()

  return useCallback(
    (tokenTimedRandomSendContract?: TokenTimedRandomSendContract) => {
      dispatch(updateCryptoCurrency(tokenTimedRandomSendContract?.currency))
      dispatch(changeTokenTimedRandomSendContract(tokenTimedRandomSendContract))
    },
    [dispatch]
  )
}
