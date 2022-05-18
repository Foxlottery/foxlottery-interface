import { TokenTimedRandomSendContract } from '@foxlottery/core-sdk'

type LotteryRanking = {
  rank: number
  highestLotteryWinning: number
  lottery: TokenTimedRandomSendContract
}

export default LotteryRanking
