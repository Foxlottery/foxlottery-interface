import { ChainId } from '@foxlottery/core-sdk'
import { TokenTimedRandomSendContract } from '@foxlottery/core-sdk'
import chainTokenTimedRandomSendContractList from 'app/config/tokenTimedRandomSendContracts/chainTokenTimedRandomSendContractList'

type TokenTimedRandomSendContracts = {
  readonly [chainId: number]: TokenTimedRandomSendContract[]
}

const tokenTimedRandomSendContracts: TokenTimedRandomSendContracts = {
  [ChainId.ETHEREUM]: chainTokenTimedRandomSendContractList[ChainId.ETHEREUM],
  [ChainId.ROPSTEN]: chainTokenTimedRandomSendContractList[ChainId.ROPSTEN],
  [ChainId.BSC]: chainTokenTimedRandomSendContractList[ChainId.BSC],
  [ChainId.MATIC]: chainTokenTimedRandomSendContractList[ChainId.MATIC],
  [ChainId.ARBITRUM]: chainTokenTimedRandomSendContractList[ChainId.ARBITRUM],
  [ChainId.AVALANCHE]: chainTokenTimedRandomSendContractList[ChainId.AVALANCHE],
}

export default tokenTimedRandomSendContracts
