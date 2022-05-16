import { Currency } from '@foxlottery/core-sdk'

type ChainTokenList = {
  readonly [chainId: number]: Currency[]
}

export default ChainTokenList
