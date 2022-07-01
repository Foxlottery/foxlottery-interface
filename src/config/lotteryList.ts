import { Lottery } from '@foxlottery/core-sdk'
import chainErc20CurrencyList from 'app/config/chainErc20CurrencyList'
import { supportedNetworkChainIds } from 'app/config/networks'
import LotteryList from 'app/types/LotteriesByAddress'

const today = new Date()
const tomorrow = new Date(today)
tomorrow.setDate(tomorrow.getDate() + 1)

const lotteryList: LotteryList = {}

supportedNetworkChainIds.map((chainId) => {
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

    lotteryList[erc20Currency.address] = [weeklyLottery, monthlyLottery]
  })
})

export default lotteryList
