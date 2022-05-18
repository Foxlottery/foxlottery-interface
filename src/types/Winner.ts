import { TokenTimedRandomSendContract } from '@foxlottery/core-sdk'

type Winner = {
  rank: number
  address: string
  amountTransferred: number
  lottery: TokenTimedRandomSendContract
}

export default Winner
