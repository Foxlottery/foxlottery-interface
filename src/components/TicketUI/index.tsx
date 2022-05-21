import { Ticket } from '@foxlottery/core-sdk'
import { CurrencyLogo } from 'app/components/CurrencyLogo'
import Typography from 'app/components/Typography'
import Link from 'next/link'
import React, { FC } from 'react'
import Moment from 'react-moment'
interface Props {
  ticket: Ticket
}

const TicketUI: FC<Props> = ({ ticket }) => {
  const tokenTimedRandomSendContract = ticket.tokenTimedRandomSendContract
  const currency = tokenTimedRandomSendContract.currency
  return (
    <Link href={`/ticket?address=${ticket.address}`} passHref>
      <div className="relative max-w-screen-sm m-auto text-white transition-transform transform bg-red-100 shadow-2xl cursor-pointer h-52 w-80 sm:w-96 rounded-xl hover:scale-105">
        {/* { ticket background color} */}
        <div className="relative object-cover w-full h-full rounded-xl bg-gradient-to-r from-green-700 to-green-500"></div>

        {/* { ticket body content} */}
        <div className="absolute right-5 top-5">
          <div className="flex items-center gap-2 px-3 py-1 text-black bg-white rounded-full shadow-md cursor-pointer w-fit">
            <CurrencyLogo currency={currency} className="!rounded-full overflow-hidden" size={20} />
            {currency?.symbol && (
              <Typography variant="sm" className="!text-base" weight={700}>
                {currency.symbol}
              </Typography>
            )}
          </div>
        </div>

        {/* { ticket body content} */}
        <div className="absolute w-full px-5 top-5">
          <div className="flex gap-2">
            <p className="text-sm text-gray-50">{tokenTimedRandomSendContract.symbol}</p>
            <h3 className="font-semibold">{tokenTimedRandomSendContract.name}</h3>
          </div>
          <div className="pt-3 text-sm">
            <p className="font-light text-gray-50">Tickets Number</p>
            <p className="font-medium">{ticket.numbers}</p>
          </div>
          <div className="pt-1 text-sm">
            <p className="font-light text-gray-50">Token Amount</p>
            <p className="font-medium">
              {ticket.tokenAmount}
              {currency.symbol}
            </p>
          </div>
          <div className="pt-1 text-sm">
            <p className="font-light text-gray-50">Close at</p>
            <p className="font-medium">
              <Moment format="lll" unix>
                {tokenTimedRandomSendContract.closeTimestamp}
              </Moment>
            </p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default TicketUI
