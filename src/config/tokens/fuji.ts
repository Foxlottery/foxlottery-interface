import { ChainId, Erc20Currency } from '@foxlottery/core-sdk'

export const USDT = new Erc20Currency(
  ChainId.AVALANCHE_TESTNET,
  '0x82DCEC6aa3c8BFE2C96d40d8805EE0dA15708643',
  18,
  'USDT',
  'Tether USD'
)
