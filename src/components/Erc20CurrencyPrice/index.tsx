import { Erc20Currency } from '@foxlottery/core-sdk'
import Typography from 'app/components/Typography'
import { classNames } from 'app/functions'
import { useFormattedUSDCPrice } from 'app/hooks/useUSDCPrice'
import React, { FC } from 'react'

interface Erc20CurrencyPriceProps {
  className?: string
  erc20Currency: Erc20Currency
}

const Erc20CurrencyPrice: FC<Erc20CurrencyPriceProps> = ({ className, erc20Currency }) => {
  const usdcPrice = useFormattedUSDCPrice(erc20Currency)
  if (!usdcPrice) {
    return <></>
  }

  return (
    <div className="flex flex-col gap-2 px-2 py-2 transition border bg-white shadow-inner border-dark-700 hover:border-dark-700 rounded-[14px]">
      <div className={classNames('flex w-full gap-1 cursor-pointer select-none', className)}>
        <Typography variant="xs" weight={700} className="flex gap-1 tracking-[0.06em">
          {usdcPrice}
        </Typography>
      </div>
    </div>
  )
}

export default Erc20CurrencyPrice
