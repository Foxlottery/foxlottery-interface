import { ChainId, Erc20Currency } from '@foxlottery/core-sdk'
import React, { FunctionComponent, useMemo } from 'react'

import Logo, { UNKNOWN_ICON } from '../Logo'

const BLOCKCHAIN = {
  [ChainId.ETHEREUM]: 'ethereum',
  [ChainId.BSC]: 'binance',
  [ChainId.AVALANCHE_TESTNET]: 'fuji',
  [ChainId.MATIC]: 'matic',
  [ChainId.AVALANCHE]: 'avalanche',
  [ChainId.RINKEBY]: 'rinkeby',
  [ChainId.MATIC_TESTNET]: 'mumbai',
  [ChainId.BSC_TESTNET]: 'bscTest',
}

export const getErc20CurrencyLogoUrl = (erc20Currency: Erc20Currency): string | undefined => {
  if (erc20Currency.chainId in BLOCKCHAIN) {
    // @ts-ignore TYPE NEEDS FIXING
    return `/images/blockchains/${BLOCKCHAIN[erc20Currency.chainId]}/assets/${erc20Currency.address}/logo.png`
  }
}

export interface Erc20CurrencyLogoProps {
  erc20Currency: Erc20Currency
  size?: string | number
  style?: React.CSSProperties
  className?: string
}

const Erc20CurrencyLogo: FunctionComponent<Erc20CurrencyLogoProps> = ({
  erc20Currency,
  size = '24px',
  className,
  style,
}) => {
  const srcs: string[] = useMemo(() => {
    const url = getErc20CurrencyLogoUrl(erc20Currency)
    const defaultUrls: string[] = []
    if (url) {
      defaultUrls.push(url)
    } else {
      defaultUrls.push(UNKNOWN_ICON)
    }
    return defaultUrls
  }, [erc20Currency])

  return <Logo srcs={srcs} width={size} height={size} alt={erc20Currency?.symbol} className={className} style={style} />
}

export default Erc20CurrencyLogo
