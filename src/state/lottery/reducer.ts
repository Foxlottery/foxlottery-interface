import { Erc20Currency, Lottery } from '@foxlottery/core-sdk'
import { createSlice } from '@reduxjs/toolkit'

export interface LotteryState {
  erc20Currency?: Erc20Currency
  inputValue?: number
  lottery?: Lottery
}

const initialState: LotteryState = {
  erc20Currency: undefined,
  inputValue: undefined,
  lottery: undefined,
}

const slice = createSlice({
  name: 'lottery',
  initialState,
  reducers: {
    updateErc20Currency(state, action) {
      state.erc20Currency = action.payload
    },
    changeInputValue(state, action) {
      state.inputValue = action.payload
    },
    changeLottery(state, action) {
      state.lottery = action.payload
    },
  },
})

export const { updateErc20Currency, changeInputValue, changeLottery } = slice.actions
export default slice.reducer
