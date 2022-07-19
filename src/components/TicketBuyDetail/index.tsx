import { Erc20Currency, Lottery } from '@foxlottery/core-sdk'
import { t } from '@lingui/macro'
import { useLingui } from '@lingui/react'
import Erc20CurrencyBalance from 'app/components/Erc20CurrencyBalance'
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
  const { i18n } = useLingui()

  return (
    <div className="flex flex-col gap-2 px-2 py-2 transition border bg-white shadow-inner border-dark-700 hover:border-dark-700 rounded-[14px]">
      <div className={classNames('flex w-full gap-1 cursor-pointer select-none', className)}>
        <Typography variant="xs" weight={700} className="gap-1">
          <div>{erc20Currency && <Erc20CurrencyBalance erc20Currency={erc20Currency} />}</div>
          <div>
            {i18n._(t`Ticket Price`)}: {price} {erc20Currency.symbol}
          </div>
          <div>
            {i18n._(t`Purchase Price`)}: {purchasePrice} {erc20Currency.symbol}
          </div>
        </Typography>
      </div>
    </div>
  )
}

export default TicketBuyDetail
