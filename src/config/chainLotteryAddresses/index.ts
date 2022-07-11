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
  [ChainId.MATIC_TESTNET]: ['0x733aFB6f5e8E121f0fE448c219b71735FE38fA7b'],
  [ChainId.BSC_TESTNET]: [],
  [ChainId.AVALANCHE_TESTNET]: [],
}

export default chainLotteryAddreses
