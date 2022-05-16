import { JSBI, Percent } from '@foxlottery/core-sdk'

export const NetworkContextName = 'NETWORK'

export const IS_IN_IFRAME = typeof window !== 'undefined' && window.parent !== window

// 30 minutes, denominated in seconds
export const DEFAULT_DEADLINE_FROM_NOW = 60 * 30

export const DEFAULT_TXN_DISMISS_MS = 25000

export const BETTER_TRADE_LESS_HOPS_THRESHOLD = new Percent(JSBI.BigInt(50), JSBI.BigInt(10000))

export const ZERO_PERCENT = new Percent('0')

export const ONE_HUNDRED_PERCENT = new Percent('1')
