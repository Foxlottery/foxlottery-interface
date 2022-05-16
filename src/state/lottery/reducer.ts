import { Currency, TokenTimedRandomSendContract } from '@foxlottery/core-sdk'
import { createSlice } from '@reduxjs/toolkit'

export interface LotteryState {
  cryptoCurrency?: Currency
  inputValue?: number
  tokenTimedRandomSendContract?: TokenTimedRandomSendContract
}

const initialState: LotteryState = {
  cryptoCurrency: undefined,
  inputValue: undefined,
  tokenTimedRandomSendContract: undefined,
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
    changeTokenTimedRandomSendContract(state, action) {
      state.tokenTimedRandomSendContract = action.payload
    },
  },
})

export const { updateCryptoCurrency, changeInputValue, changeTokenTimedRandomSendContract } = slice.actions
export default slice.reducer
