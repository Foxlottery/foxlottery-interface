import { ChainId } from '@foxlottery/core-sdk'

type ChainLotteryAddreses = {
  readonly [chainId: number]: string[]
}

const chainLotteryAddreses: ChainLotteryAddreses = {
  [ChainId.ETHEREUM]: [],
  [ChainId.BSC]: [],
  [ChainId.MATIC]: [],
  [ChainId.AVALANCHE]: [],
  [ChainId.RINKEBY]: ['0x6B907dE4E30549566A6c55bBbAf6c4aA29bA379F'],
  [ChainId.MATIC_TESTNET]: [],
  [ChainId.BSC_TESTNET]: [],
  [ChainId.AVALANCHE_TESTNET]: [],
}

export default chainLotteryAddreses
