import { ChainId, TokenTimedRandomSendContract } from '@foxlottery/core-sdk'
import commonContracts from 'app/config/tokenTimedRandomSendContracts/commonContracts'

type TokenTimedRandomSendContracts = {
  readonly [chainId: number]: TokenTimedRandomSendContract[]
}

const tokenTimedRandomSendContracts: TokenTimedRandomSendContracts = {
  [ChainId.ETHEREUM]: commonContracts,
  [ChainId.ROPSTEN]: commonContracts,
  [ChainId.BSC]: commonContracts,
  [ChainId.RINKEBY]: commonContracts,
  [ChainId.MATIC]: commonContracts,
  [ChainId.MATIC_TESTNET]: commonContracts,
  [ChainId.BSC_TESTNET]: commonContracts,
}

export default tokenTimedRandomSendContracts
