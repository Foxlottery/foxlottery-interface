import { Lottery } from '@foxlottery/core-sdk'

type LotteryList = {
  [tokenAddress: string]: Lottery[]
}

export default LotteryList
