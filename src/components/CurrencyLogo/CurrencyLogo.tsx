import { ChainId, Currency } from '@foxlottery/core-sdk'
import useHttpLocations from 'app/hooks/useHttpLocations'
import { WrappedTokenInfo } from 'app/state/lists/wrappedTokenInfo'
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

export const getCurrencyLogoUrl = (currency: Currency): string | undefined => {
  if (currency.chainId in BLOCKCHAIN) {
    // @ts-ignore TYPE NEEDS FIXING
    return `/images/blockchains/${BLOCKCHAIN[currency.chainId]}/assets/${currency.wrapped.address}/logo.png`
  }
}

const AvalancheLogo = '/images/token/avax.jpg'
const BinanceCoinLogo = '/images/token/bnb.jpg'
const EthereumLogo = '/images/token/eth.jpg'
const MaticLogo = '/images/token/polygon.jpg'

const LOGO: Record<ChainId, string> = {
  [ChainId.ETHEREUM]: EthereumLogo,
  [ChainId.RINKEBY]: EthereumLogo,
  [ChainId.GÖRLI]: EthereumLogo,
  [ChainId.MATIC]: MaticLogo,
  [ChainId.MATIC_TESTNET]: MaticLogo,
  [ChainId.BSC]: BinanceCoinLogo,
  [ChainId.BSC_TESTNET]: BinanceCoinLogo,
  [ChainId.AVALANCHE]: AvalancheLogo,
  [ChainId.AVALANCHE_TESTNET]: AvalancheLogo,
}

export interface CurrencyLogoProps {
  currency?: Currency
  size?: string | number
  style?: React.CSSProperties
  className?: string
}

const CurrencyLogo: FunctionComponent<CurrencyLogoProps> = ({ currency, size = '24px', className, style }) => {
  const uriLocations = useHttpLocations(
    currency instanceof WrappedTokenInfo ? currency.logoURI || currency.tokenInfo.logoURI : undefined
  )
  const srcs: string[] = useMemo(() => {
    if (currency?.isNative) {
      // @ts-ignore TYPE NEEDS FIXING
      return [LOGO[currency.chainId], UNKNOWN_ICON]
    }

    if (currency?.isToken) {
      const url = getCurrencyLogoUrl(currency)
      const defaultUrls: string[] = []
      if (url) {
        defaultUrls.push(url)
      }

      if (currency instanceof WrappedTokenInfo) {
        return [...uriLocations, ...defaultUrls, UNKNOWN_ICON]
      }
      return defaultUrls
    }

    return [UNKNOWN_ICON]
  }, [currency, uriLocations])

  return <Logo srcs={srcs} width={size} height={size} alt={currency?.symbol} className={className} style={style} />
}

export default CurrencyLogo
