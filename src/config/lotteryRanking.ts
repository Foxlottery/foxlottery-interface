import { TokenTimedRandomSendContract } from '@foxlottery/core-sdk'
import tokenTimedRandomSendContractList from 'app/config/tokenTimedRandomSendContractList'
import LotteryRanking from 'app/types/LotteryRanking'

const tokenTimedRandomSendContract: TokenTimedRandomSendContract = tokenTimedRandomSendContractList[1][0]

const lotteryRanking: LotteryRanking[] = [
  {
    rank: 1,
    highestLotteryWinning: 1000000000,
    lottery: tokenTimedRandomSendContract,
  },
  {
    rank: 2,
    highestLotteryWinning: 900000000,
    lottery: tokenTimedRandomSendContract,
  },
  {
    rank: 3,
    highestLotteryWinning: 800000000,
    lottery: tokenTimedRandomSendContract,
  },
  {
    rank: 4,
    highestLotteryWinning: 700000000,
    lottery: tokenTimedRandomSendContract,
  },
  {
    rank: 5,
    highestLotteryWinning: 600000000,
    lottery: tokenTimedRandomSendContract,
  },
  {
    rank: 6,
    highestLotteryWinning: 500000000,
    lottery: tokenTimedRandomSendContract,
  },
]

export default lotteryRanking
