import { Erc20Currency, Lottery } from '@foxlottery/core-sdk'
import Typography from 'app/components/Typography'
import { classNames } from 'app/functions'
import React, { FC } from 'react'

interface TicketBuyDetailProps {
  className?: string
  erc20Currency: Erc20Currency
  lottery: Lottery
  count?: number
}

const TicketBuyDetail: FC<TicketBuyDetailProps> = ({ className, erc20Currency, lottery, count = 0 }) => {
  const price = 100 // TODO: lottery.price
  const purchasePrice = price * count

  return (
    <div className="flex flex-col gap-2 px-2 py-2 transition border bg-white shadow-inner border-dark-700 hover:border-dark-700 rounded-[14px]">
      <div className={classNames('flex w-full gap-1 cursor-pointer select-none', className)}>
        <Typography variant="xs" weight={700} className="flex gap-1 tracking-[0.06em">
          Ticket Price: {price} {erc20Currency.symbol}
          <br />
          Purchase Price: {purchasePrice} {erc20Currency.symbol}
        </Typography>
      </div>
    </div>
  )
}

export default TicketBuyDetail
