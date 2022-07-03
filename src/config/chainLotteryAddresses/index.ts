import { ChainId } from '@foxlottery/core-sdk'

type ChainLotteryAddreses = {
  readonly [chainId: number]: string[]
}

const chainLotteryAddreses: ChainLotteryAddreses = {
  [ChainId.ETHEREUM]: [],
  [ChainId.BSC]: [],
  [ChainId.MATIC]: [],
  [ChainId.AVALANCHE]: [],
  [ChainId.RINKEBY]: ['0xc10571b01d0bEe50CEf2571cdADface1Bc0F6d90'],
  [ChainId.MATIC_TESTNET]: [],
  [ChainId.BSC_TESTNET]: [],
  [ChainId.AVALANCHE_TESTNET]: [],
}

export default chainLotteryAddreses
