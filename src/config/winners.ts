import { Lottery } from '@foxlottery/core-sdk'
import lotteryList from 'app/config/lotteryList'
import Winner from 'app/types/Winner'

const lottery: Lottery = lotteryList['0x6B175474E89094C44Da98b954EedeAC495271d0F'][0]

const winners: Winner[] = [
  {
    rank: 1,
    address: '0xBB2C2dEC31FbC339BA7a891AbF50a2fF29013880',
    amountTransferred: 90000000000,
    lottery: lottery,
  },
  {
    rank: 2,
    address: '0xE7d07Ef822b2606D78ac97A17df2F5D1B3E28d8c',
    amountTransferred: 80000000000,
    lottery: lottery,
  },
  {
    rank: 3,
    address: '0x1cB656467579bec0D56c08d830Dca580E70E1D86',
    amountTransferred: 50000000000,
    lottery: lottery,
  },
  {
    rank: 4,
    address: '0xBB2C2dEC31FbC339BA7a891AbF50a2fF29013880',
    amountTransferred: 40000000000,
    lottery: lottery,
  },
  {
    rank: 5,
    address: '0x1cB656467579bec0D56c08d830Dca580E70E1D86',
    amountTransferred: 30000000000,
    lottery: lottery,
  },
  {
    rank: 6,
    address: '0xBB2C2dEC31FbC339BA7a891AbF50a2fF29013880',
    amountTransferred: 20000000000,
    lottery: lottery,
  },
]

export default winners
