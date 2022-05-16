import { combineReducers } from '@reduxjs/toolkit'
import multicall from 'app/lib/state/multicall'

import application from './application/reducer'
import logs from './logs/slice'
import lottery from './lottery/reducer'

const reducer = combineReducers({
  application,
  logs,
  lottery,
  multicall: multicall.reducer,
})

export default reducer
