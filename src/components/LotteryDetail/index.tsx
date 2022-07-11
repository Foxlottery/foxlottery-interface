import { Lottery } from '@foxlottery/core-sdk'
import { useLingui } from '@lingui/react'
import LotteryCard from 'app/components/LotteryCard'
import SendingRuleChart from 'app/components/SendingRuleChart'
import SendingRuleList from 'app/components/SendingRuleList'
import React from 'react'

interface Props {
  lottery: Lottery
}

const LotteryDetail = ({ lottery }: Props) => {
  const { i18n } = useLingui()
  return (
    <>
      <LotteryCard lottery={lottery} isDisplayLink={false} />
      <SendingRuleChart lottery={lottery} />
      <SendingRuleList lottery={lottery} />
    </>
  )
}

export default LotteryDetail
