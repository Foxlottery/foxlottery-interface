import { TokenTimedRandomSendContract } from '@foxlottery/core-sdk'
import { supportedNetworkChainIds } from 'app/config/networks'
import { COMMON_BASES } from 'app/config/routing'
import TokenTimedRandomSendContractList from 'app/types/TokenTimedRandomSendContractList'

const today = new Date()
const tomorrow = new Date(today)
tomorrow.setDate(tomorrow.getDate() + 1)

const tokenTimedRandomSendContractList: TokenTimedRandomSendContractList = {}

supportedNetworkChainIds.map((chainId) => {
  COMMON_BASES[chainId].map((token) => {
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

    tokenTimedRandomSendContractList[token.address] = [
      weeklyTokenTimedRandomSendContract,
      monthlyTokenTimedRandomSendContract,
    ]
  })
})

export default tokenTimedRandomSendContractList
