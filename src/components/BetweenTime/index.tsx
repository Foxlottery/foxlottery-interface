import { t } from '@lingui/macro'
import { useLingui } from '@lingui/react'
import { Moment } from 'moment'
import { FC } from 'react'

interface Props {
  from: Moment
  to: Moment
}

const BetweenTime: FC<Props> = ({ from, to }) => {
  const { i18n } = useLingui()
  const days = to.diff(from, 'days')
  const hours = to.diff(from, 'hours') % 24
  const minits = to.diff(from, 'minutes') % 60

  return (
    <>
      {days}
      {` `}
      {i18n._(t`Days`)}
      {` `}
      {hours}
      {` `}
      {i18n._(t`Hours`)}
      {` `}
      {minits}
      {` `}
      {i18n._(t`Minutes`)}
    </>
  )
}

export default BetweenTime
