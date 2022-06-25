import { ChainId } from '@foxlottery/core-sdk'
import { Feature } from 'app/enums'

type FeatureMap = { readonly [chainId in ChainId]?: Feature[] }

const features: FeatureMap = {
  [ChainId.ETHEREUM]: [Feature.LOTTERY],
  [ChainId.RINKEBY]: [Feature.LOTTERY],
  [ChainId.GÖRLI]: [Feature.LOTTERY],
  [ChainId.BSC]: [Feature.LOTTERY],
  [ChainId.BSC_TESTNET]: [Feature.LOTTERY],
  [ChainId.MATIC]: [Feature.LOTTERY],
  [ChainId.MATIC_TESTNET]: [Feature.LOTTERY],
  [ChainId.AVALANCHE]: [Feature.LOTTERY],
  [ChainId.AVALANCHE_TESTNET]: [Feature.LOTTERY],
}

export default features
