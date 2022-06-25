import { Ticket } from '@foxlottery/core-sdk'
import { Erc20CurrencyLogo } from 'app/components/Erc20CurrencyLogo'
import Typography from 'app/components/Typography'
import Link from 'next/link'
import React, { FC } from 'react'
import Moment from 'react-moment'
interface Props {
  ticket: Ticket
}

const TicketUI: FC<Props> = ({ ticket }) => {
  const lottery = ticket.lottery
  const erc20Currency = lottery.erc20Currency
  return (
    <Link href={`/ticket?address=${ticket.address}`} passHref>
      <div className="relative max-w-screen-sm m-auto text-white transition-transform transform bg-red-100 shadow-2xl cursor-pointer h-52 w-80 sm:w-96 rounded-xl hover:scale-105">
        {/* { ticket background color} */}
        <div className="relative object-cover w-full h-full rounded-xl bg-gradient-to-r from-green-700 to-green-500"></div>

        {/* { ticket body content} */}
        <div className="absolute right-5 top-5">
          <div className="flex items-center gap-2 px-3 py-1 text-black bg-white rounded-full shadow-md cursor-pointer w-fit">
            <Erc20CurrencyLogo erc20Currency={erc20Currency} className="!rounded-full overflow-hidden" size={20} />
            {erc20Currency?.symbol && (
              <Typography variant="sm" className="!text-base" weight={700}>
                {erc20Currency.symbol}
              </Typography>
            )}
          </div>
        </div>

        {/* { ticket body content} */}
        <div className="absolute w-full px-5 top-5">
          <div className="flex gap-2">
            <p className="text-sm text-gray-50">{lottery.symbol}</p>
            <h3 className="font-semibold">{lottery.name}</h3>
          </div>
          <div className="pt-3 text-sm">
            <p className="font-light text-gray-50">Tickets Number</p>
            <p className="font-medium">{ticket.numbers}</p>
          </div>
          <div className="pt-1 text-sm">
            <p className="font-light text-gray-50">Token Amount</p>
            <p className="font-medium">
              {ticket.tokenAmount}
              {erc20Currency.symbol}
            </p>
          </div>
          <div className="pt-1 text-sm">
            <p className="font-light text-gray-50">Close at</p>
            <p className="font-medium">
              <Moment format="lll" unix>
                {lottery.closeTimestamp}
              </Moment>
            </p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default TicketUI
