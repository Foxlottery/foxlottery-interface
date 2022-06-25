import { ChainId, Erc20Currency } from '@foxlottery/core-sdk'

export const USDC = new Erc20Currency(
  ChainId.MATIC_TESTNET,
  '0xe6b8a5CF854791412c1f6EFC7CAf629f5Df1c747',
  18,
  'USDC',
  'USD Coin'
)
