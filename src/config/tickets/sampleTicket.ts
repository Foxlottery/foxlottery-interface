import { Ticket, TokenTimedRandomSendContract } from '@foxlottery/core-sdk'
import tokenTimedRandomSendContractList from 'app/config/tokenTimedRandomSendContractList'

const tokenTimedRandomSendContract: TokenTimedRandomSendContract = tokenTimedRandomSendContractList[1][0]
const sampleTicket = new Ticket(tokenTimedRandomSendContract, true, 4642348998677632, 3333333)

export default sampleTicket
