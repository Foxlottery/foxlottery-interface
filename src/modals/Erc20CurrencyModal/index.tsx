import { t } from '@lingui/macro'
import { useLingui } from '@lingui/react'
import Erc20CurrencyList from 'app/components/Erc20CurrencyList'
import HeadlessUiModal from 'app/components/Modal/HeadlessUIModal'
import { useErc20CurrencyModalToggle, useIsModalOpen } from 'app/state/application/hooks'
import { ApplicationModal } from 'app/state/application/reducer'
import React, { FC } from 'react'

const Erc20CurrencyModal: FC = () => {
  const { i18n } = useLingui()
  const isErc20CurrencyModalOpen = useIsModalOpen(ApplicationModal.ERC20_CURRENCY)
  const toggleErc20CurrencyModal = useErc20CurrencyModalToggle()

  return (
    <HeadlessUiModal.Controlled isOpen={isErc20CurrencyModalOpen} onDismiss={toggleErc20CurrencyModal}>
      <div className="flex flex-col gap-4">
        <HeadlessUiModal.Header header={i18n._(t`Select a Crypto Currency`)} onClose={toggleErc20CurrencyModal} />
        <div className="grid grid-flow-row-dense grid-cols-1 gap-4 overflow-y-auto">
          <Erc20CurrencyList />
        </div>
      </div>
    </HeadlessUiModal.Controlled>
  )
}

export default Erc20CurrencyModal
