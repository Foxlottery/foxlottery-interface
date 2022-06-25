import { TokenTimedRandomSendContract } from '@foxlottery/core-sdk'
import chainTokenList from 'app/config/chainTokenList'
import { supportedNetworkChainIds } from 'app/config/networks'

const today = new Date()
const tomorrow = new Date(today)
tomorrow.setDate(tomorrow.getDate() + 1)

type ChainTokenTimedRandomSendContractList = {
  [chainId: number]: TokenTimedRandomSendContract[]
}

const chainTokenTimedRandomSendContractList: ChainTokenTimedRandomSendContractList = {}

supportedNetworkChainIds.map((chainId) => {
  chainTokenTimedRandomSendContractList[chainId] = []
  chainTokenList[chainId].map((currency) => {
    const weeklyTokenTimedRandomSendContract = new TokenTimedRandomSendContract(
      currency,
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

    const monthlyTokenTimedRandomSendContract = new TokenTimedRandomSendContract(
      currency,
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

    chainTokenTimedRandomSendContractList[chainId].push(weeklyTokenTimedRandomSendContract)
    chainTokenTimedRandomSendContractList[chainId].push(monthlyTokenTimedRandomSendContract)
  })
})

export default chainTokenTimedRandomSendContractList
