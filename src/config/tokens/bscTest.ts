import { ChainId, Erc20Currency } from '@foxlottery/core-sdk'

export const BUSD = new Erc20Currency(
  ChainId.BSC_TESTNET,
  '0x8244cce484929215f20750ce85977ebaa018cc4a',
  18,
  'BUSD',
  'Binance USD'
)
