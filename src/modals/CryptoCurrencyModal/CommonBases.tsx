import { Currency } from '@foxlottery/core-sdk'
import Button from 'app/components/Button'
import { CurrencyLogo } from 'app/components/CurrencyLogo'
import Typography from 'app/components/Typography'
import { COMMON_BASES } from 'app/config/routing'
import { currencyId } from 'app/functions'
import { useActiveWeb3React } from 'app/services/web3'
import { useCryptoCurrencyModalToggle } from 'app/state/application/hooks'
import { useSelectCryptoCurrency, useSelectedCryptoCurrency } from 'app/state/lottery/hooks'
import React, { FC } from 'react'

const CommonBases: FC = () => {
  const { chainId } = useActiveWeb3React()
  const selectedCurrency = useSelectedCryptoCurrency()
  const toggleCryptoCurrencyModal = useCryptoCurrencyModalToggle()
  const selectCryptoCurrency = useSelectCryptoCurrency()
  const onSelect = (currency: Currency) => {
    selectCryptoCurrency(currency)
    toggleCryptoCurrencyModal()
  }

  const bases = typeof chainId !== 'undefined' ? COMMON_BASES[chainId] ?? [] : []

  if (bases.length === 0) return <></>

  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-wrap gap-2">
        {bases.map((currency: Currency) => {
          const isSelected = selectedCurrency == currency
          return (
            <Button
              size="sm"
              variant="outlined"
              color="gray"
              type="button"
              onClick={() => !isSelected && onSelect(currency)}
              disabled={isSelected}
              key={currencyId(currency)}
              className="!border !px-2 flex gap-2"
            >
              <CurrencyLogo currency={currency} size={18} />
              <Typography variant="sm" className="font-semibold">
                {currency.symbol}
              </Typography>
            </Button>
          )
        })}
      </div>
    </div>
  )
}

export default CommonBases