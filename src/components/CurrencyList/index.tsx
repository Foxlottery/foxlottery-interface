import { Currency } from '@foxlottery/core-sdk'
import CurrencyButton from 'app/components/CurrencyButton'
import ChainCurrencyList from 'app/config/chainCurrencyList'
import { useActiveWeb3React } from 'app/services/web3'
import { useCryptoCurrencyModalToggle } from 'app/state/application/hooks'
import { useSelectCryptoCurrency, useSelectedCryptoCurrency } from 'app/state/lottery/hooks'
import React, { FC } from 'react'

const CurrencyList: FC = () => {
  const { chainId } = useActiveWeb3React()
  const selectedCurrency = useSelectedCryptoCurrency()
  const toggleCryptoCurrencyModal = useCryptoCurrencyModalToggle()
  const selectCryptoCurrency = useSelectCryptoCurrency()
  const onSelect = (currency: Currency) => {
    selectCryptoCurrency(currency)
    toggleCryptoCurrencyModal()
  }

  const tokens = typeof chainId !== 'undefined' ? ChainCurrencyList[chainId] ?? [] : []

  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-wrap gap-2">
        {tokens.map((token: Currency, index: number) => {
          const isSelected = selectedCurrency == token
          return <CurrencyButton key={index} isSelected={isSelected} onSelect={onSelect} currency={token} />
        })}
      </div>
    </div>
  )
}

export default CurrencyList
