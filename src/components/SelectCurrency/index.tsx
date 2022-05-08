import { ChevronDownIcon } from '@heroicons/react/solid'
import { t } from '@lingui/macro'
import { useLingui } from '@lingui/react'
import Button from 'app/components/Button'
import { CurrencyLogo } from 'app/components/CurrencyLogo'
import Typography from 'app/components/Typography'
import { useCryptoCurrencyModalToggle } from 'app/state/application/hooks'
import { useSelectedCryptoCurrency } from 'app/state/lottery/hooks'
import React, { FC } from 'react'

const SelectCurrency: FC = () => {
  const { i18n } = useLingui()

  const currency = useSelectedCryptoCurrency()
  const toggleCryptoCurrencyModal = useCryptoCurrencyModalToggle()
  return (
    <>
      {currency ? (
        <div className="flex items-center">
          <div
            onClick={toggleCryptoCurrencyModal}
            className="flex items-center gap-2 px-2 py-1 bg-gray-200 rounded-full shadow-md cursor-pointer text-high-emphesis"
          >
            <CurrencyLogo currency={currency} className="!rounded-full overflow-hidden" size={20} />
            {currency?.symbol && (
              <Typography variant="sm" className="!text-base" weight={700}>
                {currency.symbol}
              </Typography>
            )}
            <ChevronDownIcon width={18} />
          </div>
        </div>
      ) : (
        <div className="flex items-center">
          <Button
            onClick={toggleCryptoCurrencyModal}
            color="blue"
            variant="filled"
            size="sm"
            className="!rounded-full !px-2 !py-0 !h-[32px] !pl-3 shadow-md bg-gray-200 hover:bg-gray-300 duration-100"
          >
            {i18n._(t`Select a Crypto Currency`)}
            <ChevronDownIcon width={18} />
          </Button>
        </div>
      )}
    </>
  )
}

export default SelectCurrency
