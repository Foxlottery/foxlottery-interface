import TicketUI from 'app/components/TicketUI'
import sampleTicket from 'app/config/tickets/sampleTicket'
import React, { FC } from 'react'

interface Props {}

const TicketsUI: FC<Props> = () => {
  return (
    <>
      <div className="mt-10">
        <h1 className="mr-0 font-semibold">Undrawn Tickets</h1>
        <div className="flex justify-center my-3 bg-white">
          <div className="space-y-16">
            <TicketUI ticket={sampleTicket} />
            <TicketUI ticket={sampleTicket} />
          </div>
        </div>
      </div>
      <div className="mt-10">
        <h1 className="py-5 font-semibold">Tickets already drawn</h1>
        <div className="flex justify-center my-3bg-white opacity-60">
          <div className="space-y-16">
            <TicketUI ticket={sampleTicket} />
          </div>
        </div>
      </div>
    </>
  )
}

export default TicketsUI
