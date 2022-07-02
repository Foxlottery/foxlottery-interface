import { DefinitelySendingRule, Lottery, RandomSendingRule } from '@foxlottery/core-sdk'

import * as ETHEREUM from './tokens/ethereum'

const today = new Date()
const tomorrow = new Date(today)
tomorrow.setDate(tomorrow.getDate() + 1)

const definitelySendingRules: DefinitelySendingRule[] = [
  {
    address: '',
    ratio: 1,
  },
]
const randomSendingRules: RandomSendingRule[] = [
  {
    sendingCount: 1,
    ratio: 1,
  },
]

const sampleLottery = new Lottery(
  ETHEREUM.USDC,
  '0x1',
  'Sample Lottery',
  'SL',
  86400 * 7,
  tomorrow.getTime() / 1000,
  1,
  false,
  165260,
  18 * 10 * 26,
  10 * 25,
  100,
  definitelySendingRules,
  randomSendingRules,
  100
)

export default sampleLottery
