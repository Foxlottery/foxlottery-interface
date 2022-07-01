import { useSelector } from 'react-redux'

import { AppState } from '..'

export function useLotteries() {
  return useSelector((state: AppState) => state.lotteries.lotteries)
}

export function useLotteryAddressesByErc20Addresses() {
  return useSelector((state: AppState) => state.lotteries.lotteryAddressesByErc20Addresses)
}
