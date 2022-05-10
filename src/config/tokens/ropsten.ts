import { ChainId, Token } from '@foxlottery/core-sdk'

export const DAI = new Token(ChainId.ROPSTEN, '0xaD6D458402F60fD3Bd25163575031ACDce07538D', 18, 'DAI', 'Dai Stablecoin')
export const WETH = new Token(
  ChainId.ROPSTEN,
  '0xc778417E063141139Fce010982780140Aa0cD5Ab',
  18,
  'WETH',
  'Wrapped Ether'
)
export const LINK = new Token(
  ChainId.ROPSTEN,
  '0x20fE562d797A42Dcb3399062AE9546cd06f63280',
  18,
  'LINK',
  'ChainLink Token'
)
export const UNI = new Token(ChainId.ROPSTEN, '0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984', 18, 'UNI', 'Uniswap')
