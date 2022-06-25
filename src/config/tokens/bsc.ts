import { ChainId, Erc20Currency } from '@foxlottery/core-sdk'

export const DAI = new Erc20Currency(
  ChainId.BSC,
  '0x1AF3F329e8BE154074D8769D1FFa4eE058B1DBc3',
  18,
  'DAI',
  'Dai Stablecoin'
)
export const USD = new Erc20Currency(
  ChainId.BSC,
  '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
  18,
  'BUSD',
  'Binance USD'
)
export const USDC = new Erc20Currency(ChainId.BSC, '0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d', 18, 'USDC', 'USD Coin')
export const USDT = new Erc20Currency(
  ChainId.BSC,
  '0x55d398326f99059fF775485246999027B3197955',
  18,
  'USDT',
  'Tether USD'
)
