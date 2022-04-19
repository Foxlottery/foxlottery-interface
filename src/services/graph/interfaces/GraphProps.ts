import { ChainId } from '@foxlottery/core-sdk'
import { SWRConfiguration } from 'swr'

export interface GraphProps {
  chainId?: ChainId
  variables?: { [key: string]: any }
  shouldFetch?: boolean
  swrConfig?: SWRConfiguration
}
