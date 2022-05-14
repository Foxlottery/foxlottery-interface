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
              <div>
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
                    <dt className="mt-2 text-sm font-medium leading-6 text-gray-500">{i18n._(t`Closing time`)}</dt>
                    <dd className="font-extrabold text-black text-1xl">
                      <Moment format="lll" unix>
                        {tokenTimedRandomSendContract.closeTimestamp}
                      </Moment>
                    </dd>
                  </div>
                </div>
                <div className="max-w-4xl mx-auto">
                  <dl className="rounded-lg sm:grid sm:grid-cols-3">
                    <div className="flex flex-col p-6 text-center sm:border-0">
                      <dt className="order-1 mt-2 text-sm font-medium leading-6 text-gray-500">
                        {i18n._(t`Participants Count`)}
                      </dt>
                      <dd className="order-2 text-xl font-extrabold text-black">
                        {tokenTimedRandomSendContract.participantCount}
                      </dd>
                    </div>
                    <div className="flex flex-col p-6 text-center">
                      <dt className="order-1 mt-2 text-sm font-medium leading-6 text-gray-500">
                        {i18n._(t`Total Supply`)}
                      </dt>
                      <dd className="order-2 text-xl font-extrabold text-black">
                        {tokenTimedRandomSendContract.totalSupply} {tokenTimedRandomSendContract.token.symbol}
                      </dd>
                    </div>
                    <div className="flex flex-col p-6 text-center">
                      <dt className="order-1 mt-2 text-sm font-medium leading-6 text-gray-500">
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
