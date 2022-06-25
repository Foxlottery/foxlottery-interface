import { ChainId } from '@foxlottery/core-sdk'
import { Lottery } from '@foxlottery/core-sdk'
import chainLotteryList from 'app/config/lotteries/chainLotteryList'

type Lotteries = {
  readonly [chainId: number]: Lottery[]
}

const lotteries: Lotteries = {
  [ChainId.ETHEREUM]: chainLotteryList[ChainId.ETHEREUM],
  [ChainId.BSC]: chainLotteryList[ChainId.BSC],
  [ChainId.MATIC]: chainLotteryList[ChainId.MATIC],
  [ChainId.AVALANCHE]: chainLotteryList[ChainId.AVALANCHE],
  [ChainId.RINKEBY]: chainLotteryList[ChainId.RINKEBY],
  [ChainId.MATIC_TESTNET]: chainLotteryList[ChainId.MATIC_TESTNET],
  [ChainId.BSC_TESTNET]: chainLotteryList[ChainId.BSC_TESTNET],
  [ChainId.AVALANCHE_TESTNET]: chainLotteryList[ChainId.AVALANCHE_TESTNET],
}

export default lotteries
