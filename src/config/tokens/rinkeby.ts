import { ChainId, Token } from '@foxlottery/core-sdk'

export const DAI = new Token(ChainId.RINKEBY, '0x95b58a6Bff3D14B7DB2f5cb5F0Ad413DC2940658', 18, 'DAI', 'Dai Stablecoin')
// usdt
export const USDT = new Token(ChainId.RINKEBY, '0x3B00Ef435fA4FcFF5C209a37d1f3dcff37c705aD', 18, 'USDT', 'Tether USD')
// usdc
export const USDC = new Token(ChainId.RINKEBY, '0xeb8f08a975Ab53E34D8a0330E0D34de942C95926', 18, 'USDC', 'USD Coin')
