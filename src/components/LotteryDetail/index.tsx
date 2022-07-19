import { Lottery } from '@foxlottery/core-sdk'
import { t } from '@lingui/macro'
import { useLingui } from '@lingui/react'
import BetweenTime from 'app/components/BetweenTime'
import LotteryCard from 'app/components/LotteryCard'
import SendingRuleChart from 'app/components/SendingRuleChart'
import SendingRuleList from 'app/components/SendingRuleList'
import BuyTicketModal from 'app/modals/BuyTicketModal'
import { useBuyTicketModalToggle } from 'app/state/application/hooks'
import moment from 'moment'
import React from 'react'

import Button from '../Button'

interface Props {
  lottery: Lottery
}

const LotteryDetail = ({ lottery }: Props) => {
  const { i18n } = useLingui()
  const toggleBuyTicketModal = useBuyTicketModalToggle()
  const today = moment(new Date().getTime())
  const closeTimestampDate = moment(lottery.closeTimestamp * 1000)

  return (
    <>
      <BuyTicketModal />
      <Button onClick={toggleBuyTicketModal} className="rounded-[14px] mx-auto" color="gradientGreen" variant="filled">
        {i18n._(t`Buy Ticket`)}
      </Button>
      <div className="my-6 text-2xl font-semibold text-center">
        {i18n._(t`Get your tickets now!`)}
        <br />
        <BetweenTime to={closeTimestampDate} from={today} />
        {` `}
        {i18n._(t`until the draw`)}
      </div>
      <LotteryCard lottery={lottery} />
      <SendingRuleChart lottery={lottery} />
      <SendingRuleList lottery={lottery} />
    </>
  )
}

export default LotteryDetail
