import { Lottery } from '@foxlottery/core-sdk'

type LotteriesByAddress = {
  [address: string]: Lottery
}

export default LotteriesByAddress
