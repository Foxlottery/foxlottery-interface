import { Currency } from '@foxlottery/core-sdk'
import { createSlice } from '@reduxjs/toolkit'

export interface LotteryState {
  cryptoCurrency?: Currency
}

const initialState: LotteryState = {
  cryptoCurrency: undefined,
}

const slice = createSlice({
  name: 'lottery',
  initialState,
  reducers: {
    updateCryptoCurrency(state, action) {
      state.cryptoCurrency = action.payload
    },
  },
})

export const { updateCryptoCurrency } = slice.actions
export default slice.reducer
