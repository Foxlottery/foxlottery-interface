import { Currency } from '@foxlottery/core-sdk'
import { createSlice } from '@reduxjs/toolkit'

export interface LotteryState {
  cryptoCurrency?: Currency
  inputValue?: number
}

const initialState: LotteryState = {
  cryptoCurrency: undefined,
  inputValue: undefined,
}

const slice = createSlice({
  name: 'lottery',
  initialState,
  reducers: {
    updateCryptoCurrency(state, action) {
      state.cryptoCurrency = action.payload
    },
    changeInputValue(state, action) {
      state.inputValue = action.payload
    },
  },
})

export const { updateCryptoCurrency, changeInputValue } = slice.actions
export default slice.reducer
