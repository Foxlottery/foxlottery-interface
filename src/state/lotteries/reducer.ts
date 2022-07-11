import { createSlice } from '@reduxjs/toolkit'
import LotteriesByAddress from 'app/types/LotteriesByAddress'
import LotteryAddressesByErc20Addresses from 'app/types/LotteryAddressesByErc20Addresses'

export interface LotteryState {
  lotteries?: LotteriesByAddress
  lotteryAddressesByErc20Addresses?: LotteryAddressesByErc20Addresses
  isLoading: boolean
}

const initialState: LotteryState = {
  lotteries: undefined,
  lotteryAddressesByErc20Addresses: undefined,
  isLoading: false,
}

const slice = createSlice({
  name: 'lotteries',
  initialState,
  reducers: {
    updateLotteries(state, action) {
      state.lotteries = action.payload
    },
    updateLotteryAddressesByErc20Addresses(state, action) {
      state.lotteryAddressesByErc20Addresses = action.payload
    },
    updateIsLoading(state, action) {
      state.isLoading = action.payload
    },
  },
})

export const { updateLotteries, updateLotteryAddressesByErc20Addresses, updateIsLoading } = slice.actions
export default slice.reducer
