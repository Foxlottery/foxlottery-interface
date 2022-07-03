import { Contract } from '@ethersproject/contracts'
import { DefinitelySendingRule, Erc20Currency, Lottery, RandomSendingRule } from '@foxlottery/core-sdk'

async function getLotteryFromContract(lotteryContract: Contract, erc20Contract: Contract, chainId: number) {
  const erc20Currency = new Erc20Currency(
    chainId,
    erc20Contract.address,
    await erc20Contract.decimals(),
    await erc20Contract.symbol(),
    await erc20Contract.name()
  )
  erc20Currency.contract = erc20Contract

  const definitelySendingRules: DefinitelySendingRule[] = []

  let lotteryIndex = await lotteryContract.index()
  const participantCount = await lotteryContract.participantCount(lotteryIndex.toNumber())
  const cycle = await lotteryContract.cycle()
  const closeTimestamp = await lotteryContract.closeTimestamp()
  let totalSupply = await lotteryContract.totalSupply()
  const ticketPrice = await lotteryContract.ticketPrice()
  const sellerCommissionRatio = await lotteryContract.sellerCommissionRatio()
  const lastDefinitelySendingRuleId = await lotteryContract.lastDefinitelySendingRuleId()
  const lastRandomSendingRuleId = await lotteryContract.lastRandomSendingRuleId()
  lotteryIndex = lotteryIndex.toNumber()
  totalSupply = Number(totalSupply.toString())

  for (
    let definitelySendingRuleId = 1;
    definitelySendingRuleId <= lastDefinitelySendingRuleId.toNumber();
    definitelySendingRuleId++
  ) {
    const definitelySendingRuleAddress = await lotteryContract.definitelySendingRuleAddress(definitelySendingRuleId)
    const definitelySendingRuleRatio = await lotteryContract.definitelySendingRuleRatio(definitelySendingRuleId)
    definitelySendingRules.push({
      address: definitelySendingRuleAddress,
      ratio: definitelySendingRuleRatio.toNumber(),
    })
  }

  const randomSendingRules: RandomSendingRule[] = []

  for (let randomSendingRuleId = 1; randomSendingRuleId <= lastRandomSendingRuleId.toNumber(); randomSendingRuleId++) {
    const randomSendingRuleRatio = await lotteryContract.randomSendingRuleRatio(randomSendingRuleId)
    const randomSendingRuleSendingCount = await lotteryContract.randomSendingRuleSendingCount(randomSendingRuleId)

    randomSendingRules.push({
      sendingCount: randomSendingRuleSendingCount.toNumber(),
      ratio: randomSendingRuleRatio.toNumber(),
    })
  }

  const firstPrizeCount = definitelySendingRules.length > 0 ? totalSupply / definitelySendingRules[0].ratio : 0

  const lottery = new Lottery(
    erc20Currency,
    lotteryContract.address,
    await lotteryContract.name(),
    await lotteryContract.symbol(),
    cycle.toNumber(),
    closeTimestamp.toNumber(),
    lotteryIndex,
    await lotteryContract.isOnlyOwner(),
    participantCount.toNumber(),
    totalSupply,
    firstPrizeCount,
    Number(ticketPrice.toString()),
    definitelySendingRules,
    randomSendingRules,
    sellerCommissionRatio
  )
  lottery.contract = lotteryContract
  return lottery
}

export default getLotteryFromContract
