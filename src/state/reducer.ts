import { combineReducers } from '@reduxjs/toolkit'
import multicall from 'app/lib/state/multicall'

import application from './application/reducer'
import logs from './logs/slice'
import lotteries from './lotteries/reducer'
import lottery from './lottery/reducer'

const reducer = combineReducers({
  application,
  logs,
  lottery,
  lotteries,
  multicall: multicall.reducer,
})

export default reducer
