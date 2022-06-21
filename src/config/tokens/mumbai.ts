import { ChainId, Token } from '@foxlottery/core-sdk'

export const DAI = new Token(
  ChainId.MATIC_TESTNET,
  '0x5A01Ea01Ba9A8DC2B066714A65E61a78838B1b9e',
  18,
  'DAI',
  'Dai Stablecoin'
)
export const USDC = new Token(
  ChainId.MATIC_TESTNET,
  '0xe6b8a5CF854791412c1f6EFC7CAf629f5Df1c747',
  18,
  'USDC',
  'USD Coin'
)
