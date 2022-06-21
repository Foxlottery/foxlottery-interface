import { ChainId } from '@foxlottery/core-sdk'
import { TokenTimedRandomSendContract } from '@foxlottery/core-sdk'
import chainTokenTimedRandomSendContractList from 'app/config/tokenTimedRandomSendContracts/chainTokenTimedRandomSendContractList'

type TokenTimedRandomSendContracts = {
  readonly [chainId: number]: TokenTimedRandomSendContract[]
}

const tokenTimedRandomSendContracts: TokenTimedRandomSendContracts = {
  [ChainId.ETHEREUM]: chainTokenTimedRandomSendContractList[ChainId.ETHEREUM],
  [ChainId.BSC]: chainTokenTimedRandomSendContractList[ChainId.BSC],
  [ChainId.MATIC]: chainTokenTimedRandomSendContractList[ChainId.MATIC],
  [ChainId.AVALANCHE]: chainTokenTimedRandomSendContractList[ChainId.AVALANCHE],
  [ChainId.RINKEBY]: chainTokenTimedRandomSendContractList[ChainId.RINKEBY],
  [ChainId.MATIC_TESTNET]: chainTokenTimedRandomSendContractList[ChainId.MATIC_TESTNET],
  [ChainId.BSC_TESTNET]: chainTokenTimedRandomSendContractList[ChainId.BSC_TESTNET],
  [ChainId.AVALANCHE_TESTNET]: chainTokenTimedRandomSendContractList[ChainId.AVALANCHE_TESTNET],
}

export default tokenTimedRandomSendContracts
