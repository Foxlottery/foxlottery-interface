import { ChevronDownIcon } from '@heroicons/react/solid'
import { t } from '@lingui/macro'
import { useLingui } from '@lingui/react'
import Button from 'app/components/Button'
import NumericalInput from 'app/components/Input/Numeric'
import CryptoCurrencyModal from 'app/modals/CryptoCurrencyModal'
import { useCryptoCurrencyModalToggle } from 'app/state/application/hooks'
import React, { FC, useState } from 'react'

const Lottery: FC = () => {
  const onChange = (e: any) => setValue(e)
  const inputDisabled = false
  const [value, setValue] = useState(0)
  const { i18n } = useLingui()
  const toggleCryptoCurrencyModal = useCryptoCurrencyModalToggle()

  return (
    <>
      <CryptoCurrencyModal />
      <div className="flex flex-col gap-3 p-2 md:p-4 pt-4 rounded-[24px] bg-dark-800 shadow-md shadow-dark-1000">
        <NumericalInput
          disabled={inputDisabled}
          value={value || ''}
          onUserInput={onChange}
          placeholder="0.00"
          className="leading-[36px] focus:placeholder:text-low-emphesis flex-grow w-full text-left bg-transparent text-inherit disabled:cursor-not-allowed"
          autoFocus
        />
        <div>{i18n._(t`Depsit`)}: </div>

        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center">
            <Button
              onClick={toggleCryptoCurrencyModal}
              color="blue"
              variant="filled"
              size="sm"
              className="!rounded-full !px-2 !py-0 !h-[32px] !pl-3"
            >
              {i18n._(t`Select a Token`)}
              <ChevronDownIcon width={18} />
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Lottery
