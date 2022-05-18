import { solid } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { t } from '@lingui/macro'
import { useLingui } from '@lingui/react'
import rankingLotteries from 'app/config/lotteryRanking'
import winners from 'app/config/winners'
import Moment from 'react-moment'

export default function RankingList() {
  const { i18n } = useLingui()

  return (
    <div className="grid w-full grid-cols-1 gap-10">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="relative sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h1 className="text-xl font-semibold text-gray-900">🏆 {i18n._(t`Winners`)}</h1>
            <p className="mt-2 text-sm text-gray-700"></p>
          </div>
        </div>
        <div className="flex flex-col mt-8">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full px-6 py-2 align-middle md:px-0 lg:px-8">
              <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                      >
                        {i18n._(t`Rank`)}
                      </th>
                      <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        {i18n._(t`Amount transferred`)}
                      </th>
                      <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        {i18n._(t`Wallet Address`)}
                      </th>

                      <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        {i18n._(t`Lottery`)}
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {winners.map((winner, index) => (
                      <tr key={index}>
                        <td className="py-4 pl-4 pr-3 text-sm font-medium text-gray-900 whitespace-nowrap sm:pl-6">
                          {winner.rank}
                        </td>
                        <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
                          {winner.amountTransferred} {winner.lottery.symbol}
                        </td>
                        <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">{winner.address}</td>
                        <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
                          <a href="#" className="text-indigo-600 hover:text-indigo-900">
                            {winner.lottery.name}
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="mx-auto mt-4">
            <button
              type="button"
              className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-green-600 border border-transparent rounded-md shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 sm:w-auto"
            >
              {i18n._(t`Show more`)}
            </button>
          </div>
        </div>
      </div>

      <div className="px-4 sm:px-6 lg:px-8">
        <div className="relative sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h1 className="text-xl font-semibold text-gray-900">
              <FontAwesomeIcon icon={solid('money-bill-trend-up')} />
              {` `}
              {i18n._(t`Lottery`)}
            </h1>
            <p className="mt-2 text-sm text-gray-700"></p>
          </div>
        </div>
        <div className="flex flex-col mt-8">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full px-6 py-2 align-middle md:px-0 lg:px-8">
              <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                      >
                        {i18n._(t`Rank`)}
                      </th>
                      <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        {i18n._(t`Highest Lottery Winning`)}
                      </th>
                      <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        {i18n._(t`Participants Count`)}
                      </th>
                      <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        {i18n._(t`Closing time`)}
                      </th>
                      <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        {i18n._(t`Lottery`)}
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {rankingLotteries.map((rankingLottery, index) => (
                      <tr key={index}>
                        <td className="py-4 pl-4 pr-3 text-sm font-medium text-gray-900 whitespace-nowrap sm:pl-6">
                          {rankingLottery.rank}
                        </td>
                        <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
                          {rankingLottery.highestLotteryWinning} {rankingLottery.lottery.symbol}
                        </td>
                        <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
                          {rankingLottery.lottery.participantCount}
                        </td>
                        <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
                          <Moment format="lll" unix>
                            {rankingLottery.lottery.closeTimestamp}
                          </Moment>
                        </td>
                        <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
                          <a href="#" className="text-indigo-600 hover:text-indigo-900">
                            {rankingLottery.lottery.name}
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="mx-auto mt-4">
            <button
              type="button"
              className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-green-600 border border-transparent rounded-md shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 sm:w-auto"
            >
              {i18n._(t`Show more`)}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
