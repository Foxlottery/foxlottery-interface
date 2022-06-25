import { Lottery } from '@foxlottery/core-sdk'
import chainErc20CurrencyList from 'app/config/chainErc20CurrencyList'
import { supportedNetworkChainIds } from 'app/config/networks'

const today = new Date()
const tomorrow = new Date(today)
tomorrow.setDate(tomorrow.getDate() + 1)

type ChainLotteryList = {
  [chainId: number]: Lottery[]
}

const chainLotteryList: ChainLotteryList = {}

supportedNetworkChainIds.map((chainId) => {
  chainLotteryList[chainId] = []
  chainErc20CurrencyList[chainId].map((erc20Currency) => {
    const weeklyLottery = new Lottery(
      erc20Currency,
      '0x1',
      'Weekly Lottery',
      'WL',
      86400 * 7,
      tomorrow.getTime() / 1000,
      1,
      165260,
      18 * 10 * 26,
      10 * 25
    )

    const monthlyLottery = new Lottery(
      erc20Currency,
      '0x1',
      'Monthly Lottery',
      'ML',
      86400 * 7,
      tomorrow.getTime() / 1000,
      1,
      165260,
      18 * 10 * 26,
      10 * 25
    )

    chainLotteryList[chainId].push(weeklyLottery)
    chainLotteryList[chainId].push(monthlyLottery)
  })
})

export default chainLotteryList
