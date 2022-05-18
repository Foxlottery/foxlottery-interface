import { TokenTimedRandomSendContract } from '@foxlottery/core-sdk'
import tokenTimedRandomSendContractList from 'app/config/tokenTimedRandomSendContractList'
import Winner from 'app/types/Winner'

const tokenTimedRandomSendContract: TokenTimedRandomSendContract = tokenTimedRandomSendContractList[1][0]

const winners: Winner[] = [
  {
    rank: 1,
    address: '0xBB2C2dEC31FbC339BA7a891AbF50a2fF29013880',
    amountTransferred: 90000000000,
    lottery: tokenTimedRandomSendContract,
  },
  {
    rank: 2,
    address: '0xE7d07Ef822b2606D78ac97A17df2F5D1B3E28d8c',
    amountTransferred: 80000000000,
    lottery: tokenTimedRandomSendContract,
  },
  {
    rank: 3,
    address: '0x1cB656467579bec0D56c08d830Dca580E70E1D86',
    amountTransferred: 50000000000,
    lottery: tokenTimedRandomSendContract,
  },
  {
    rank: 4,
    address: '0xBB2C2dEC31FbC339BA7a891AbF50a2fF29013880',
    amountTransferred: 40000000000,
    lottery: tokenTimedRandomSendContract,
  },
  {
    rank: 5,
    address: '0x1cB656467579bec0D56c08d830Dca580E70E1D86',
    amountTransferred: 30000000000,
    lottery: tokenTimedRandomSendContract,
  },
  {
    rank: 6,
    address: '0xBB2C2dEC31FbC339BA7a891AbF50a2fF29013880',
    amountTransferred: 20000000000,
    lottery: tokenTimedRandomSendContract,
  },
]

export default winners
