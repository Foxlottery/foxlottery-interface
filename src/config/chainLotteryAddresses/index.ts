import { ChainId } from '@foxlottery/core-sdk'

type ChainLotteryAddreses = {
  readonly [chainId: number]: string[]
}

const chainLotteryAddreses: ChainLotteryAddreses = {
  [ChainId.ETHEREUM]: [],
  [ChainId.BSC]: [],
  [ChainId.MATIC]: [],
  [ChainId.AVALANCHE]: [],
  [ChainId.RINKEBY]: ['0x09Eb78eB30ad9c45E1C797E13037Cf1A12EeB7dd'],
  [ChainId.MATIC_TESTNET]: ['0xF6c25fd839ec38506fA271263C502a72a2d7bBb4'],
  [ChainId.BSC_TESTNET]: ['0x36D5d3932498fFb7a1cfd00015488Bc4E45Cb9d0'],
  [ChainId.AVALANCHE_TESTNET]: ['0x36D5d3932498fFb7a1cfd00015488Bc4E45Cb9d0'],
}

export default chainLotteryAddreses
