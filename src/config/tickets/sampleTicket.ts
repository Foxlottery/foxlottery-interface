import { Ticket, TokenTimedRandomSendContract } from '@foxlottery/core-sdk'
import tokenTimedRandomSendContractList from 'app/config/tokenTimedRandomSendContractList'

const today = new Date()

const tokenTimedRandomSendContract: TokenTimedRandomSendContract = tokenTimedRandomSendContractList[1][0]
const sampleTicket = new Ticket('0x1', tokenTimedRandomSendContract, true, 4642348998677632, 3333333, today.getTime())

export default sampleTicket
