import { Currency } from '@foxlottery/core-sdk'
import Typography from 'app/components/Typography'
import { classNames } from 'app/functions'
import useUSDCPrice from 'app/hooks/useUSDCPrice'
import React, { FC } from 'react'

interface TokenPriceProps {
  outputCurrency?: Currency
  className?: string
}

const TokenPrice: FC<TokenPriceProps> = ({ outputCurrency, className }) => {
  const outputPrice = useUSDCPrice(outputCurrency)
  let formattedPrice

  try {
    formattedPrice = outputPrice?.toSignificant(4)
  } catch (error) {
    formattedPrice = '0'
  }

  const label = outputCurrency?.symbol

  if (formattedPrice) {
    return (
      <div className="flex flex-col gap-2 px-2 py-2 transition border bg-white shadow-inner border-dark-700 hover:border-dark-700 rounded-[14px]">
        <div className={classNames('flex w-full gap-1 cursor-pointer select-none', className)}>
          <Typography variant="xs" weight={700} className="flex gap-1 tracking-[0.06em">
            $1 <span className="text-primary">=</span> {formattedPrice} {label}
          </Typography>
        </div>
      </div>
    )
  } else {
    return null
  }
}

export default TokenPrice
