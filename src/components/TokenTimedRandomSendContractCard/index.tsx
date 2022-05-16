import { TokenTimedRandomSendContract } from '@foxlottery/core-sdk'
import { t } from '@lingui/macro'
import { useLingui } from '@lingui/react'
import { CurrencyLogo } from 'app/components/CurrencyLogo'
import Typography from 'app/components/Typography'
import React from 'react'
import Moment from 'react-moment'

interface Props {
  tokenTimedRandomSendContract: TokenTimedRandomSendContract
}
const TokenTimedRandomSendContractCard = ({ tokenTimedRandomSendContract }: Props) => {
  const { i18n } = useLingui()
  return (
    <>
      <div className="p-1 pb-3 bg-white">
        <div className="border border-gray-300 rounded-lg shadow-lg">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-between gap-2 p-3">
              <div className="mx-auto">
                <div className="flex items-center">
                  <CurrencyLogo
                    currency={tokenTimedRandomSendContract.token}
                    className="!rounded-full overflow-hidden"
                    size={20}
                  />
                  {tokenTimedRandomSendContract.token.symbol && (
                    <Typography variant="sm" className="!text-base ml-1" weight={700}>
                      {tokenTimedRandomSendContract.token.symbol}
                    </Typography>
                  )}
                </div>
                <div className="flex items-center justify-center pt-3 mx-auto">
                  <div className="pr-3">
                    <Typography className="text-gray-500" variant="sm">
                      {tokenTimedRandomSendContract.symbol}{' '}
                    </Typography>
                  </div>
                  <Typography variant="h2" weight={700}>
                    {tokenTimedRandomSendContract.name}
                  </Typography>
                </div>
                <div>
                  <div className="flex flex-col p-6 text-center sm:border-0">
                    <dt className="flex mx-auto mt-2 text-sm font-medium leading-6 text-gray-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 pr-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      {i18n._(t`Closing time`)}
                    </dt>
                    <dd className="font-extrabold text-black text-1xl">
                      <Moment format="lll" unix>
                        {tokenTimedRandomSendContract.closeTimestamp}
                      </Moment>
                    </dd>
                  </div>
                </div>
                <div className="max-w-4xl mx-auto">
                  <dl className="rounded-lg sm:grid sm:grid-cols-3">
                    <div className="flex flex-col p-6 text-center md:p-2">
                      <dt className="order-1 mt-2 text-sm font-medium leading-6 text-gray-500">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-6 h-6 mx-auto"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                          />
                        </svg>
                        {i18n._(t`Participants Count`)}
                      </dt>
                      <dd className="order-2 text-xl font-extrabold text-black">
                        {tokenTimedRandomSendContract.participantCount}
                      </dd>
                    </div>
                    <div className="flex flex-col p-6 text-center md:p-2">
                      <dt className="order-1 mt-2 text-sm font-medium leading-6 text-gray-500">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-6 h-6 mx-auto"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        {i18n._(t`Total Supply`)}
                      </dt>
                      <dd className="order-2 text-xl font-extrabold text-black">
                        {tokenTimedRandomSendContract.totalSupply} {tokenTimedRandomSendContract.token.symbol}
                      </dd>
                    </div>
                    <div className="flex flex-col p-6 text-center md:p-2">
                      <dt className="order-1 mt-2 text-sm font-medium leading-6 text-gray-500">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-6 h-6 mx-auto"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        {i18n._(t`First Prize Amount`)}
                      </dt>
                      <dd className="order-2 text-xl font-extrabold text-black">
                        {tokenTimedRandomSendContract.firstPrizeCount} {tokenTimedRandomSendContract.token.symbol}
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TokenTimedRandomSendContractCard
