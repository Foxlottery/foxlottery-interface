import { ChainId, Erc20Currency } from '@foxlottery/core-sdk'

export const USDT = new Erc20Currency(
  ChainId.AVALANCHE_TESTNET,
  '0x2058ec2791dD28b6f67DB836ddf87534F4Bbdf22',
  18,
  'USD',
  'The Fuji stablecoin'
)
