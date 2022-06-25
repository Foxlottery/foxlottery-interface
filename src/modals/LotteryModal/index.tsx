import { Lottery } from '@foxlottery/core-sdk'
import { t } from '@lingui/macro'
import { useLingui } from '@lingui/react'
import LotteryCard from 'app/components/LotteryCard'
import HeadlessUiModal from 'app/components/Modal/HeadlessUIModal'
import lotteries from 'app/config/lotteries'
import lotteryList from 'app/config/lotteryList'
import { useActiveWeb3React } from 'app/services/web3'
import { useIsModalOpen, useToggleModal } from 'app/state/application/hooks'
import { ApplicationModal } from 'app/state/application/reducer'
import { useChangeLottery } from 'app/state/lottery/hooks'
import { useSelectedErc20Currency } from 'app/state/lottery/hooks'
import React, { FC } from 'react'

const LotteryModal: FC = () => {
  const { i18n } = useLingui()
  const { chainId } = useActiveWeb3React()
  const isModalOpen = useIsModalOpen(ApplicationModal.LOTTERY)
  const toggleModal = useToggleModal(ApplicationModal.LOTTERY)
  const changeLottery = useChangeLottery()
  const onClick = (lottery: Lottery) => {
    toggleModal()
    changeLottery(lottery)
  }
  const erc20Currency = useSelectedErc20Currency()

  return (
    <HeadlessUiModal.Controlled isOpen={isModalOpen} onDismiss={toggleModal} maxWidth="3xl">
      <div className="flex flex-col gap-4">
        <HeadlessUiModal.Header header={i18n._(t`Select a Lottery`)} onClose={toggleModal} />
        <div className="grid grid-flow-row-dense grid-cols-1 gap-2 overflow-y-auto md:grid-cols-2">
          {chainId && erc20Currency ? (
            <>
              {lotteryList[erc20Currency.address].map((lottery: Lottery, key: number) => {
                return (
                  <button key={key} onClick={() => onClick(lottery)}>
                    <LotteryCard lottery={lottery} />
                  </button>
                )
              })}
            </>
          ) : chainId ? (
            <>
              {lotteries[chainId] &&
                lotteries[chainId].map((lottery: Lottery, key: number) => {
                  return (
                    <button key={key} onClick={() => onClick(lottery)}>
                      <LotteryCard lottery={lottery} />
                    </button>
                  )
                })}
            </>
          ) : null}
        </div>
      </div>
    </HeadlessUiModal.Controlled>
  )
}

export default LotteryModal
