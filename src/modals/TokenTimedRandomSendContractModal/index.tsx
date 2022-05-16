import { TokenTimedRandomSendContract } from '@foxlottery/core-sdk'
import { t } from '@lingui/macro'
import { useLingui } from '@lingui/react'
import HeadlessUiModal from 'app/components/Modal/HeadlessUIModal'
import TokenTimedRandomSendContractCard from 'app/components/TokenTimedRandomSendContractCard'
import tokenTimedRandomSendContractList from 'app/config/tokenTimedRandomSendContractList'
import tokenTimedRandomSendContracts from 'app/config/tokenTimedRandomSendContracts'
import { useActiveWeb3React } from 'app/services/web3'
import { useIsModalOpen, useToggleModal } from 'app/state/application/hooks'
import { ApplicationModal } from 'app/state/application/reducer'
import { useChangeTokenTimedRandomSendContract } from 'app/state/lottery/hooks'
import { useSelectedCryptoCurrency } from 'app/state/lottery/hooks'
import React, { FC } from 'react'

const TokenTimedRandomSendContractModal: FC = () => {
  const { i18n } = useLingui()
  const { chainId } = useActiveWeb3React()
  const isModalOpen = useIsModalOpen(ApplicationModal.TOKEN_TIMED_RANDOM_SEND_CONTRACT)
  const toggleModal = useToggleModal(ApplicationModal.TOKEN_TIMED_RANDOM_SEND_CONTRACT)
  const changeTokenTimedRandomSendContract = useChangeTokenTimedRandomSendContract()
  const onClick = (tokenTimedRandomSendContract: TokenTimedRandomSendContract) => {
    toggleModal()
    changeTokenTimedRandomSendContract(tokenTimedRandomSendContract)
  }
  const currency = useSelectedCryptoCurrency()

  return (
    <HeadlessUiModal.Controlled isOpen={isModalOpen} onDismiss={toggleModal} maxWidth="3xl">
      <div className="flex flex-col gap-4">
        <HeadlessUiModal.Header header={i18n._(t`Select a Lottery`)} onClose={toggleModal} />
        <div className="grid grid-flow-row-dense grid-cols-1 gap-2 overflow-y-auto md:grid-cols-2">
          {chainId && currency && currency.isToken ? (
            <>
              {tokenTimedRandomSendContractList[currency.address].map(
                (tokenTimedRandomSendContract: TokenTimedRandomSendContract, key: number) => {
                  return (
                    <button key={key} onClick={() => onClick(tokenTimedRandomSendContract)}>
                      <TokenTimedRandomSendContractCard tokenTimedRandomSendContract={tokenTimedRandomSendContract} />
                    </button>
                  )
                }
              )}
            </>
          ) : chainId ? (
            <>
              {tokenTimedRandomSendContracts[chainId].map(
                (tokenTimedRandomSendContract: TokenTimedRandomSendContract, key: number) => {
                  return (
                    <button key={key} onClick={() => onClick(tokenTimedRandomSendContract)}>
                      <TokenTimedRandomSendContractCard tokenTimedRandomSendContract={tokenTimedRandomSendContract} />
                    </button>
                  )
                }
              )}
            </>
          ) : null}
        </div>
      </div>
    </HeadlessUiModal.Controlled>
  )
}

export default TokenTimedRandomSendContractModal
