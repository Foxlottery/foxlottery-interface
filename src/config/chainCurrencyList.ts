import { ChainId } from '@foxlottery/core-sdk'
import ChainCurrencyList from 'app/types/ChainCurrencyList'

import * as AVALANCHE from './tokens/avalanche'
import * as BSC from './tokens/bsc'
import * as BSC_TESTNET from './tokens/bscTest'
import * as ETHEREUM from './tokens/ethereum'
import * as FUJI from './tokens/fuji'
import * as MATIC from './tokens/matic'
import * as MUMBAI from './tokens/mumbai'
import * as RINKEBY from './tokens/rinkeby'

export const chainCurrencyList: ChainCurrencyList = {
  [ChainId.ETHEREUM]: [ETHEREUM.USDC, ETHEREUM.USDT, ETHEREUM.DAI],
  [ChainId.MATIC]: [MATIC.USDC, MATIC.USDT, MATIC.DAI],
  [ChainId.BSC]: [BSC.DAI, BSC.USDC, BSC.USDT, BSC.USD],
  [ChainId.AVALANCHE]: [AVALANCHE.DAI, AVALANCHE.USDC, AVALANCHE.USDT],
  [ChainId.RINKEBY]: [RINKEBY.DAI, RINKEBY.USDT, RINKEBY.USDC],
  [ChainId.MATIC_TESTNET]: [MUMBAI.DAI, MUMBAI.USDC],
  [ChainId.BSC_TESTNET]: [BSC_TESTNET.DAI, BSC_TESTNET.USD, BSC_TESTNET.USDT],
  [ChainId.AVALANCHE_TESTNET]: [FUJI.USDT],
}

export default chainCurrencyList
