import { Lottery } from '@foxlottery/core-sdk'
import { useLingui } from '@lingui/react'
import React from 'react'

interface Props {
  lottery: Lottery
}

const LotteryHistory = ({ lottery }: Props) => {
  const { i18n } = useLingui()

  return <>test</>
}

export default LotteryHistory
