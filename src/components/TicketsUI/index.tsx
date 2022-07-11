import { t } from '@lingui/macro'
import { useLingui } from '@lingui/react'
import TicketUI from 'app/components/TicketUI'
import sampleTicket from 'app/config/tickets/sampleTicket'
import React, { FC } from 'react'

interface Props {}

const TicketsUI: FC<Props> = () => {
  const { i18n } = useLingui()
  return (
    <>
      <div className="mt-10">
        <h1 className="mr-0 font-semibold">{i18n._(t`Tickets`)}</h1>
        <div className="flex justify-center my-3 bg-white">
          <div className="space-y-16">
            <TicketUI ticket={sampleTicket} />
            <TicketUI ticket={sampleTicket} />
          </div>
        </div>
      </div>
    </>
  )
}

export default TicketsUI
