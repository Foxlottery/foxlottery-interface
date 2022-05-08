import { t } from '@lingui/macro'
import { useLingui } from '@lingui/react'
import Button from 'app/components/Button'
import CryptoCurrencyAmount from 'app/components/CryptoCurrencyAmount'
import NumericalInput from 'app/components/Input/Numeric'
import SelectCurrency from 'app/components/SelectCurrency'
import TokenPrice from 'app/components/TokenPrice'
import CryptoCurrencyModal from 'app/modals/CryptoCurrencyModal'
import { useWalletModalToggle } from 'app/state/application/hooks'
import { useSelectedCryptoCurrency } from 'app/state/lottery/hooks'
import React, { FC, useState } from 'react'
import { useWeb3React } from 'web3-react-core'

const Lottery: FC = () => {
  const onChange = (e: any) => setValue(e)
  const inputDisabled = false
  const [value, setValue] = useState(0)
  const { i18n } = useLingui()
  const currency = useSelectedCryptoCurrency()
  const { account } = useWeb3React()
  const toggleWalletModal = useWalletModalToggle()

  return (
    <>
      <CryptoCurrencyModal />
      <div className="flex justify-center">
        <div className="flex mt-10 flex-col w-full max-w-sm mx-5 gap-3 p-2 md:p-4 pt-4 rounded-[24px] bg-gray-100 shadow-md shadow-dark-1000">
          <div className="border-gray-200 hover:border-gray-300 rounded-[14px] border bg-dark-900 p-3 flex flex-col gap-4 bg-gray-50">
            <div className="flex items-center justify-between gap-2">
              <SelectCurrency />
            </div>
            <div className="flex gap-1 justify-between items-baseline px-1.5">
              <div className="text-2xl leading-7 tracking-[-0.01em] font-bold relative flex items-baseline flex-grow gap-3 overflow-hidden">
                <NumericalInput
                  disabled={inputDisabled}
                  value={value || ''}
                  onUserInput={onChange}
                  placeholder="0.00"
                  className="leading-[36px] focus:placeholder:text-low-emphesis flex-grow w-full text-left bg-transparent text-inherit disabled:cursor-not-allowed"
                  autoFocus
                />
              </div>
              <div className="text-sm font-semibold text-gray-600 cursor-pointer select-none whitespace-nowrap">
                <CryptoCurrencyAmount />
              </div>
            </div>
          </div>

          {currency && <TokenPrice outputCurrency={currency} />}

          {account ? (
            <Button className="rounded-[14px]" color="gradientGreen" variant="filled">
              {i18n._(t`Buy a ticket`)}
            </Button>
          ) : (
            <Button onClick={toggleWalletModal} className="rounded-[14px]" color="gradientGreen" variant="filled">
              {i18n._(t`Connect to a wallet`)}
            </Button>
          )}
        </div>
      </div>
    </>
  )
}

export default Lottery
