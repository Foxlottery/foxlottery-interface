import { ChainId, Erc20Currency } from '@foxlottery/core-sdk'

export const USDC = new Erc20Currency(
  ChainId.AVALANCHE,
  '0xA7D7079b0FEaD91F3e65f86E8915Cb59c1a4C664',
  18,
  'USDC',
  'USD Coin'
)
export const DAI = new Erc20Currency(
  ChainId.AVALANCHE,
  '0xd586E7F844cEa2F87f50152665BCbc2C279D8d70',
  18,
  'DAI',
  'Dai Stablecoin'
)
export const USDT = new Erc20Currency(
  ChainId.AVALANCHE,
  '0xc7198437980c041c805A1EDcbA50c1Ce5db95118',
  18,
  'USDT',
  'Tether USD'
)
