import { Lottery } from '@foxlottery/core-sdk'
import { t } from '@lingui/macro'
import { useLingui } from '@lingui/react'
import LotteryCard from 'app/components/LotteryCard'
import SendingRuleChart from 'app/components/SendingRuleChart'
import SendingRuleList from 'app/components/SendingRuleList'
import BuyTicketModal from 'app/modals/BuyTicketModal'
import { useBuyTicketModalToggle } from 'app/state/application/hooks'
import React from 'react'

import Button from '../Button'

interface Props {
  lottery: Lottery
}

const LotteryDetail = ({ lottery }: Props) => {
  const { i18n } = useLingui()
  const toggleBuyTicketModal = useBuyTicketModalToggle()

  return (
    <>
      <BuyTicketModal />
      <Button onClick={toggleBuyTicketModal} className="rounded-[14px]" color="gradientGreen" variant="filled">
        {i18n._(t`Buy Ticket`)}
      </Button>
      <LotteryCard lottery={lottery} />
      <SendingRuleChart lottery={lottery} />
      <SendingRuleList lottery={lottery} />
    </>
  )
}

export default LotteryDetail
