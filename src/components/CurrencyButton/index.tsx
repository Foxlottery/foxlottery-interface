import { Currency } from '@foxlottery/core-sdk'
import Button from 'app/components/Button'
import { CurrencyLogo } from 'app/components/CurrencyLogo'
import Typography from 'app/components/Typography'
import React, { FC } from 'react'

interface Props {
  isSelected: boolean
  onSelect: (currency: Currency) => void
  currency: Currency
}
const CurrencyButton: FC<Props> = ({ isSelected, onSelect, currency }) => {
  return (
    <Button
      size="sm"
      variant="outlined"
      color="gray"
      type="button"
      onClick={() => !isSelected && onSelect(currency)}
      disabled={isSelected}
      className="!border !px-2 flex gap-2"
    >
      <CurrencyLogo currency={currency} size={18} />
      <Typography variant="sm" className="font-semibold">
        {currency.symbol}
      </Typography>
    </Button>
  )
}

export default CurrencyButton
