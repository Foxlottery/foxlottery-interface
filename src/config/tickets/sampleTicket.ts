import { Lottery, Ticket } from '@foxlottery/core-sdk'
import lotteryList from 'app/config/lotteryList'

const today = new Date()

const lottery: Lottery = lotteryList['0x82DCEC6aa3c8BFE2C96d40d8805EE0dA15708643'][0]
const sampleTicket = new Ticket('0x1', lottery, true, 4642348998677632, 3333333, today.getTime())

export default sampleTicket
