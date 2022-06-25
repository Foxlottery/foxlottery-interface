import { Lottery } from '@foxlottery/core-sdk'
import lotteryList from 'app/config/lotteryList'
import LotteryRanking from 'app/types/LotteryRanking'

const lottery: Lottery = lotteryList['0x6B175474E89094C44Da98b954EedeAC495271d0F'][0]

const lotteryRanking: LotteryRanking[] = [
  {
    rank: 1,
    highestLotteryWinning: 1000000000,
    lottery: lottery,
  },
  {
    rank: 2,
    highestLotteryWinning: 900000000,
    lottery: lottery,
  },
  {
    rank: 3,
    highestLotteryWinning: 800000000,
    lottery: lottery,
  },
  {
    rank: 4,
    highestLotteryWinning: 700000000,
    lottery: lottery,
  },
  {
    rank: 5,
    highestLotteryWinning: 600000000,
    lottery: lottery,
  },
  {
    rank: 6,
    highestLotteryWinning: 500000000,
    lottery: lottery,
  },
]

export default lotteryRanking
