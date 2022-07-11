import { Lottery } from '@foxlottery/core-sdk'
import abbreviatedAddress from 'app/functions/abbreviatedAddress'
import React, { useEffect, useState } from 'react'
interface Props {
  lottery: Lottery
}

const SendingRuleList = ({ lottery }: Props) => {
  const [labels, setLabels] = useState<string[]>([])
  const [data, setData] = useState<string[]>([])

  useEffect(() => {
    let labels: string[] = []
    let data: string[] = []
    if (lottery.randomSendingRules) {
      lottery.randomSendingRules.map((rule, index: number) => {
        data.push(
          String((100 / rule.ratio) * rule.sendingCount) +
            '% (' +
            100 / rule.ratio +
            '% × ' +
            rule.sendingCount +
            ' addresses)'
        )
        labels.push(`Paize ${index + 1}`)
      })
    }

    if (lottery.definitelySendingRules) {
      lottery.definitelySendingRules.map((rule) => {
        data.push(String(100 / rule.ratio) + '%')
        labels.push(abbreviatedAddress(rule.address))
      })
    }

    if (lottery.sellerCommissionRatio) {
      data.push(String(100 / lottery.sellerCommissionRatio) + '%')
      labels.push('Seller Commition')
    }

    setLabels(labels)
    setData(data)
  }, [lottery.definitelySendingRules, lottery.randomSendingRules, lottery.sellerCommissionRatio])

  return (
    <>
      <div className="max-w-lg overflow-hidden bg-white shadow w-100 sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg font-medium leading-6 text-gray-900">Lottery Percentage Detail</h3>
        </div>
        <div className="px-4 py-5 border-t border-gray-200 sm:p-0">
          <dl className="sm:divide-y sm:divide-gray-200">
            {labels.map((label, index) => (
              <div key={index} className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">{label}</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{data[index]}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </>
  )
}

export default SendingRuleList
