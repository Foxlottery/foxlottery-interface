import { t } from '@lingui/macro'
import { useLingui } from '@lingui/react'
import HeadlessUiModal from 'app/components/Modal/HeadlessUIModal'
import CommonBases from 'app/modals/CryptoCurrencyModal/CommonBases'
import { useCryptoCurrencyModalToggle, useIsModalOpen } from 'app/state/application/hooks'
import { ApplicationModal } from 'app/state/application/reducer'
import React, { FC } from 'react'

const CryptoCurrencyModal: FC = () => {
  const { i18n } = useLingui()
  const isCryptoCurrencyModalOpen = useIsModalOpen(ApplicationModal.CRYPTO_CURRENCY)
  const toggleCryptoCurrencyModal = useCryptoCurrencyModalToggle()

  return (
    <HeadlessUiModal.Controlled isOpen={isCryptoCurrencyModalOpen} onDismiss={toggleCryptoCurrencyModal}>
      <div className="flex flex-col gap-4">
        <HeadlessUiModal.Header header={i18n._(t`Select a Token`)} onClose={toggleCryptoCurrencyModal} />
        <div className="grid grid-flow-row-dense grid-cols-1 gap-4 overflow-y-auto">
          <CommonBases />
        </div>
      </div>
    </HeadlessUiModal.Controlled>
  )
}

export default CryptoCurrencyModal
