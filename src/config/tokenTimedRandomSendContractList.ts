import { NativeCurrency, TokenTimedRandomSendContract } from '@foxlottery/core-sdk'
import ChainCurrencyList from 'app/config/chainCurrencyList'
import { supportedNetworkChainIds } from 'app/config/networks'
import TokenTimedRandomSendContractList from 'app/types/TokenTimedRandomSendContractList'

const today = new Date()
const tomorrow = new Date(today)
tomorrow.setDate(tomorrow.getDate() + 1)

const tokenTimedRandomSendContractList: TokenTimedRandomSendContractList = {}

supportedNetworkChainIds.map((chainId) => {
  ChainCurrencyList[chainId].map((token) => {
    const weeklyTokenTimedRandomSendContract = new TokenTimedRandomSendContract(
      token,
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
      token,
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

    tokenTimedRandomSendContractList[token instanceof NativeCurrency ? chainId : token.address] = [
      weeklyTokenTimedRandomSendContract,
      monthlyTokenTimedRandomSendContract,
    ]
  })
})

export default tokenTimedRandomSendContractList
