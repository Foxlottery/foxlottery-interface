import { Currency, Lottery } from '@foxlottery/core-sdk'
import { createSlice } from '@reduxjs/toolkit'

export interface LotteryState {
  cryptoCurrency?: Currency
  inputValue?: number
  lottery?: Lottery
}

const initialState: LotteryState = {
  cryptoCurrency: undefined,
  inputValue: undefined,
  lottery: undefined,
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
    changeLottery(state, action) {
      state.lottery = action.payload
    },
  },
})

export const { updateCryptoCurrency, changeInputValue, changeLottery } = slice.actions
export default slice.reducer
