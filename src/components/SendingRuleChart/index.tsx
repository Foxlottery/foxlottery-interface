import { Lottery } from '@foxlottery/core-sdk'
import { t } from '@lingui/macro'
import { useLingui } from '@lingui/react'
import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js'
import React, { useEffect, useState } from 'react'
import { Doughnut } from 'react-chartjs-2'

ChartJS.register(ArcElement, Tooltip, Legend)

const backgroundColor = ['#EC407A', '#26A69A', '#FFEE58', '#5C6BC0', '#FFA726', '#29B6F6', '#FFEE58', '#9CCC65']

const tooltip = {
  callbacks: {
    label: (item: any) => `${item.label} %`,
  },
}

interface Props {
  lottery: Lottery
}

const SendingRuleChart = ({ lottery }: Props) => {
  const { i18n } = useLingui()
  const [labels, setLabels] = useState<string[]>([])
  const [data, setData] = useState<number[]>([])

  useEffect(() => {
    let labels: string[] = []
    let data: number[] = []
    if (lottery.randomSendingRules) {
      lottery.randomSendingRules.map((rule, index: number) => {
        data.push((100 / rule.ratio) * rule.sendingCount)
        labels.push(`Paize ${index + 1}`)
      })
    }

    if (lottery.definitelySendingRules) {
      lottery.definitelySendingRules.map((rule) => {
        data.push(100 / rule.ratio)
        labels.push(rule.address)
      })
    }

    if (lottery.sellerCommissionRatio) {
      data.push(100 / lottery.sellerCommissionRatio)
      labels.push('Seller Commition')
    }

    setData(data)
    setLabels(labels)
  }, [lottery.definitelySendingRules, lottery.randomSendingRules, lottery.sellerCommissionRatio, setData])

  return (
    <div className="max-w-md mx-auto w-100">
      <h1 className="mr-0 font-semibold">{i18n._(t`Ratio`)}</h1>
      <div className="mx-auto">
        <Doughnut
          data={{
            labels,
            datasets: [
              {
                data,
                backgroundColor,
              },
            ],
          }}
        />
      </div>
    </div>
  )
}

export default SendingRuleChart
