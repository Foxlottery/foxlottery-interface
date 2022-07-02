import { Lottery } from '@foxlottery/core-sdk'

import * as ETHEREUM from './tokens/ethereum'

const today = new Date()
const tomorrow = new Date(today)
tomorrow.setDate(tomorrow.getDate() + 1)

const sampleLottery = new Lottery(
  ETHEREUM.USDC,
  '0x1',
  'Sample Lottery',
  'SL',
  86400 * 7,
  tomorrow.getTime() / 1000,
  1,
  165260,
  18 * 10 * 26,
  10 * 25
)

export default sampleLottery
