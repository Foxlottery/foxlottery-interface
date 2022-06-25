import { Erc20Currency } from '@foxlottery/core-sdk'
import React, { FC } from 'react'

import Typography from '../Typography'
import Erc20CurrencyLogo, { Erc20CurrencyLogoProps } from './Erc20CurrencyLogo'

interface Erc20CurrencyLogosProps extends Omit<Erc20CurrencyLogoProps, 'erc20Currency' | 'size'> {
  erc20Currencies: Erc20Currency[]
  dense?: boolean
  maxLogos?: number
  size?: number
}

const Erc20CurrencyLogoArray: FC<Erc20CurrencyLogosProps> = ({
  erc20Currencies,
  dense = false,
  maxLogos = 3,
  size = 24,
  ...rest
}) => {
  const logos =
    erc20Currencies.length <= maxLogos
      ? erc20Currencies
      : erc20Currencies.slice(0, Math.max(0, Math.min(erc20Currencies.length, maxLogos) - 1))
  const remnant = erc20Currencies.length - logos.length

  return (
    <div className="flex">
      {logos.map((erc20Currency, index) => {
        return (
          <div
            className="overflow-hidden rounded-full"
            key={index}
            style={{
              marginLeft: maxLogos > 1 ? (index === 0 ? '' : dense ? -Math.floor(size / 2 - 4) : -6) : 0,
              filter: 'drop-shadow(0px 3px 6px rgba(15, 15, 15, 0.25))',
            }}
          >
            <Erc20CurrencyLogo erc20Currency={erc20Currency} size={size} {...rest} />
          </div>
        )
      }, [])}
      {remnant > 0 && (
        <div
          className="rounded-full overflow-hidden flex items-center justify-center z-[1]"
          style={{
            marginLeft: maxLogos > 1 ? (dense ? -Math.floor(size / 2 + 2) : -6) : 0,
            width: size,
            height: size,
            background: 'radial-gradient(50% 50% at 50% 50%, #FFFFFF 0%, #DBDBDB 100%)',
            filter: 'drop-shadow(0px 3px 6px rgba(15, 15, 15, 0.25))',
          }}
        >
          <Typography weight={700} className="text-low-emphesis" variant="sm">
            +{erc20Currencies.length - maxLogos + 1}
          </Typography>
        </div>
      )}
    </div>
  )
}

export default Erc20CurrencyLogoArray
