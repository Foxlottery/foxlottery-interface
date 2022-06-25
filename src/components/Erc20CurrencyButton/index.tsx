import { Erc20Currency } from '@foxlottery/core-sdk'
import Button from 'app/components/Button'
import { Erc20CurrencyLogo } from 'app/components/Erc20CurrencyLogo'
import Typography from 'app/components/Typography'
import React, { FC } from 'react'

interface Props {
  isSelected: boolean
  onSelect: (erc20Currency: Erc20Currency) => void
  erc20Currency: Erc20Currency
}

const Erc20CurrencyButton: FC<Props> = ({ isSelected, onSelect, erc20Currency }) => {
  return (
    <Button
      size="sm"
      variant="outlined"
      color="gray"
      type="button"
      onClick={() => !isSelected && onSelect(erc20Currency)}
      disabled={isSelected}
      className="!border !px-2 flex gap-2"
    >
      <Erc20CurrencyLogo erc20Currency={erc20Currency} size={18} />
      <Typography variant="sm" className="font-semibold">
        {erc20Currency.symbol}
      </Typography>
    </Button>
  )
}

export default Erc20CurrencyButton
