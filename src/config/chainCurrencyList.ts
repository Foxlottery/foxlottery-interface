import { ChainId, NATIVE } from '@foxlottery/core-sdk'
import { WRAPPED_NATIVE_ONLY } from 'app/config/routing'
import ChainCurrencyList from 'app/types/ChainCurrencyList'

import * as ARBITRUM from './tokens/arbitrum'
import * as AVALANCHE from './tokens/avalanche'
import * as BSC from './tokens/bsc'
import * as ETHEREUM from './tokens/ethereum'
import * as MATIC from './tokens/matic'
import * as ROPSTEN from './tokens/ropsten'

export const chainCurrencyList: ChainCurrencyList = {
  [ChainId.ETHEREUM]: [NATIVE[ChainId.ETHEREUM], ETHEREUM.WBTC, ETHEREUM.USDC, ETHEREUM.USDT, ETHEREUM.DAI],
  [ChainId.ROPSTEN]: [NATIVE[ChainId.ROPSTEN], ROPSTEN.DAI, ROPSTEN.LINK, ROPSTEN.UNI, ROPSTEN.WETH],
  [ChainId.MATIC]: [
    NATIVE[ChainId.MATIC],
    ...WRAPPED_NATIVE_ONLY[ChainId.MATIC],
    MATIC.WETH,
    MATIC.WBTC,
    MATIC.USDC,
    MATIC.USDT,
    MATIC.DAI,
  ],
  [ChainId.BSC]: [
    NATIVE[ChainId.BSC],
    ...WRAPPED_NATIVE_ONLY[ChainId.BSC],
    BSC.WETH,
    BSC.BTCB,
    BSC.DAI,
    BSC.USDC,
    BSC.USDT,
    BSC.USD,
  ],
  [ChainId.ARBITRUM]: [
    NATIVE[ChainId.ARBITRUM],
    ...WRAPPED_NATIVE_ONLY[ChainId.ARBITRUM],
    ARBITRUM.WBTC,
    ARBITRUM.USDC,
    ARBITRUM.USDT,
  ],
  [ChainId.AVALANCHE]: [
    NATIVE[ChainId.AVALANCHE],
    ...WRAPPED_NATIVE_ONLY[ChainId.AVALANCHE],
    AVALANCHE.WBTC,
    AVALANCHE.WETH,
    AVALANCHE.USDC,
    AVALANCHE.USDT,
    AVALANCHE.DAI,
  ],
}

export default chainCurrencyList
