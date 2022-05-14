import { TokenTimedRandomSendContract } from '@foxlottery/core-sdk'
import { USDT } from 'app/config/tokens/ethereum'

const today = new Date()
const tomorrow = new Date(today)
tomorrow.setDate(tomorrow.getDate() + 1)

export const weeklyTokenTimedRandomSendContract = new TokenTimedRandomSendContract(
  USDT,
  '0x1',
  'Weekly Lottery',
  'WL',
  86400 * 7,
  tomorrow.getTime() / 1000,
  1,
  165260,
  18 * 10 * 26,
  10 * 25
)

export const monthlyTokenTimedRandomSendContract = new TokenTimedRandomSendContract(
  USDT,
  '0x1',
  'Monthly Lottery',
  'ML',
  86400 * 7,
  tomorrow.getTime() / 1000,
  1,
  165260,
  18 * 10 * 26,
  10 * 25
)
