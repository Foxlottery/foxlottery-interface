import { t } from '@lingui/macro'
import { useLingui } from '@lingui/react'
import BuyButton from 'app/components/BuyButton'
import Erc20CurrencyBalance from 'app/components/Erc20CurrencyBalance'
import Erc20CurrencyPrice from 'app/components/Erc20CurrencyPrice'
import NumericalInput from 'app/components/Input/Numeric'
import HeadlessUiModal from 'app/components/Modal/HeadlessUIModal'
import TicketBuyDetail from 'app/components/TicketBuyDetail'
import { useIsModalOpen, useToggleModal } from 'app/state/application/hooks'
import { ApplicationModal } from 'app/state/application/reducer'
import { useChangeInputValue, useInputValue, useSelectedErc20Currency } from 'app/state/lottery/hooks'
import { useLottery } from 'app/state/lottery/hooks'
import React, { FC } from 'react'

const BuyTicketModal: FC = () => {
  const { i18n } = useLingui()
  const isModalOpen = useIsModalOpen(ApplicationModal.BUY_TICKET)
  const toggleModal = useToggleModal(ApplicationModal.BUY_TICKET)
  const erc20Currency = useSelectedErc20Currency()
  const inputValue = useInputValue()
  const changeInputValue = useChangeInputValue()
  const lottery = useLottery()

  return (
    <HeadlessUiModal.Controlled isOpen={isModalOpen} onDismiss={toggleModal} maxWidth="3xl">
      <div className="flex flex-col gap-4">
        <HeadlessUiModal.Header header={i18n._(t`Buy Tickets`)} onClose={toggleModal} />
        <div className="grid grid-flow-row-dense grid-cols-1 gap-2 overflow-y-auto md:grid-cols-2">
          <div className="flex justify-center">
            <div className="flex my-10 flex-col w-full max-w-sm mx-5 gap-3 p-2 md:p-4 pt-4 rounded-[24px] bg-gray-100 shadow-md shadow-dark-1000">
              <div className="border-gray-200 hover:border-gray-300 rounded-[14px] border bg-dark-900 p-3 flex flex-col gap-4 bg-gray-50">
                <div className="flex gap-1 justify-between items-baseline px-1.5">
                  <div className="text-2xl leading-7 tracking-[-0.01em] font-bold relative flex items-baseline flex-grow gap-3 overflow-hidden">
                    <NumericalInput
                      value={inputValue || ''}
                      onUserInput={changeInputValue}
                      placeholder="0"
                      className="leading-[36px] focus:placeholder:text-low-emphesis flex-grow w-full text-left bg-transparent text-inherit disabled:cursor-not-allowed"
                      autoFocus
                      isOnlyInteger={true}
                    />
                  </div>
                  <div className="text-sm font-semibold text-gray-600 cursor-pointer select-none whitespace-nowrap">
                    <Erc20CurrencyBalance />
                  </div>
                </div>
              </div>
              {erc20Currency && <Erc20CurrencyPrice erc20Currency={erc20Currency} />}
              {lottery && erc20Currency && (
                <TicketBuyDetail erc20Currency={erc20Currency} lottery={lottery} count={inputValue} />
              )}
              <BuyButton />
            </div>
          </div>
        </div>
      </div>
    </HeadlessUiModal.Controlled>
  )
}

export default BuyTicketModal
