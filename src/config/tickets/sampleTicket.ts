import { Ticket } from '@foxlottery/core-sdk'
import lottery from 'app/config/sampleLottery'

const today = new Date()

const sampleTicket = new Ticket('0x1', lottery, true, 4642348998677632, 3333333, today.getTime())

export default sampleTicket
