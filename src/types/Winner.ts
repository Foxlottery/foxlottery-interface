import { Lottery } from '@foxlottery/core-sdk'

type Winner = {
  rank: number
  address: string
  amountTransferred: number
  lottery: Lottery
}

export default Winner
