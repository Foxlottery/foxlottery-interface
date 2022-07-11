import { useAppDispatch } from 'app/state/hooks'
import { useCallback } from 'react'
import { useSelector } from 'react-redux'

import { AppState } from '..'
import { updateIsLoading } from './reducer'

export function useLotteries() {
  return useSelector((state: AppState) => state.lotteries.lotteries)
}

export function useLotteryAddressesByErc20Addresses() {
  return useSelector((state: AppState) => state.lotteries.lotteryAddressesByErc20Addresses)
}

export function useIsLoading(): boolean {
  return useSelector((state: AppState) => state.lotteries.isLoading)
}

export function useSetIsLoading(): (isLoading: boolean) => void {
  const dispatch = useAppDispatch()
  return useCallback((isLoading: boolean) => dispatch(updateIsLoading(isLoading)), [dispatch])
}
