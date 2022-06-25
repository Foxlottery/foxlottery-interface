import { Lottery } from '@foxlottery/core-sdk'

type LotteryList = {
  [currencyAddress: string]: Lottery[]
}

export default LotteryList
