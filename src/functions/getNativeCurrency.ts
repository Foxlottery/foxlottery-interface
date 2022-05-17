import { Currency, NATIVE } from '@foxlottery/core-sdk'

export default function getNativeCurrency(chainId: number): Currency {
  return NATIVE[chainId]
}
