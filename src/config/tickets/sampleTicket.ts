import { Lottery, Ticket } from '@foxlottery/core-sdk'
import lotteryList from 'app/config/lotteryList'

const today = new Date()

const lottery: Lottery = lotteryList['0x6B175474E89094C44Da98b954EedeAC495271d0F'][0]
const sampleTicket = new Ticket('0x1', lottery, true, 4642348998677632, 3333333, today.getTime())

export default sampleTicket
