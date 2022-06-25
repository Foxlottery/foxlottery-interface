import { ChainId, Erc20Currency } from '@foxlottery/core-sdk'

export const DAI = new Erc20Currency(
  ChainId.BSC_TESTNET,
  '0xec5dcb5dbf4b114c9d0f65bccab49ec54f6a0867',
  18,
  'DAI',
  'Dai Stablecoin'
)
export const USD = new Erc20Currency(
  ChainId.BSC_TESTNET,
  '0x8244cce484929215f20750ce85977ebaa018cc4a',
  18,
  'BUSD',
  'Binance USD'
)
export const USDT = new Erc20Currency(
  ChainId.BSC_TESTNET,
  '0x337610d27c682e347c9cd60bd4b3b107c9d34ddd',
  18,
  'USDT',
  'Tether USD'
)
