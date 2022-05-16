import { Currency } from '@foxlottery/core-sdk'

type ChainCurrencyList = {
  readonly [chainId: number]: Currency[]
}

export default ChainCurrencyList
