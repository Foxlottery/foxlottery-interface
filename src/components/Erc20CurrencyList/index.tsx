import { Erc20Currency } from '@foxlottery/core-sdk'
import CurrencyButton from 'app/components/Erc20CurrencyButton'
import chainErc20CurrencyList from 'app/config/chainErc20CurrencyList'
import { useActiveWeb3React } from 'app/services/web3'
import { useErc20CurrencyModalToggle } from 'app/state/application/hooks'
import { useSelectedErc20Currency, useSelectErc20Currency } from 'app/state/lottery/hooks'
import React, { FC } from 'react'

const Erc20CurrencyList: FC = () => {
  const { chainId } = useActiveWeb3React()
  const selectedCurrency = useSelectedErc20Currency()
  const toggleErc20CurrencyModal = useErc20CurrencyModalToggle()
  const selectErc20Currency = useSelectErc20Currency()
  const onSelect = (erc20Currency: Erc20Currency) => {
    selectErc20Currency(erc20Currency)
    toggleErc20CurrencyModal()
  }

  const erc20Currencies = typeof chainId !== 'undefined' ? chainErc20CurrencyList[chainId] ?? [] : []

  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-wrap gap-2">
        {erc20Currencies.map((erc20Currency: Erc20Currency, index: number) => {
          const isSelected = selectedCurrency == erc20Currency
          return (
            <CurrencyButton key={index} isSelected={isSelected} onSelect={onSelect} erc20Currency={erc20Currency} />
          )
        })}
      </div>
    </div>
  )
}

export default Erc20CurrencyList
