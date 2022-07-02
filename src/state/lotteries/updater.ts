import { Contract } from '@ethersproject/contracts'
import { DefinitelySendingRule, Erc20Currency, Lottery, RandomSendingRule } from '@foxlottery/core-sdk'
import chainLotteryAddresses from 'app/config/chainLotteryAddresses'
import { getErc20Contract, getLotteryContract } from 'app/functions/contract'
import getLibrary from 'app/functions/getLibrary'
import { useActiveWeb3React } from 'app/services/web3'
import LotteriesByAddress from 'app/types/LotteriesByAddress'
import LotteryAddressesByErc20Addresses from 'app/types/LotteryAddressesByErc20Addresses'
import { useEffect } from 'react'

import { useAppDispatch } from '../hooks'
import { updateLotteries, updateLotteryAddressesByErc20Addresses } from './reducer'

export default function Updater(): null {
  const { chainId } = useActiveWeb3React()
  const dispatch = useAppDispatch()
  const library = getLibrary(window.ethereum)

  // get lottery contract from blockchain network
  useEffect(() => {
    const exec = async () => {
      if (!chainId) {
        return
      }
      let lotteryAddresses: string[] = []
      if (chainId) {
        lotteryAddresses = chainLotteryAddresses[chainId]
      }
      let lotteries: LotteriesByAddress = {}
      let lotteryAddressesByErc20Addresses: LotteryAddressesByErc20Addresses = {}

      await Promise.all(
        lotteryAddresses.map(async (lotteryAddress: string) => {
          let lotteryContract: Contract = await getLotteryContract(lotteryAddress, library)
          let erc20Contract: Contract = await getErc20Contract(await lotteryContract.erc20(), library)
          const erc20Currency = new Erc20Currency(
            chainId, // TODO: current chain id
            erc20Contract.address,
            await erc20Contract.decimals(),
            await erc20Contract.symbol(),
            await erc20Contract.name()
          )

          const definitelySendingRules: DefinitelySendingRule[] = []

          let lotteryIndex = await lotteryContract.index()
          const participantCount = await lotteryContract.participantCount(lotteryIndex.toNumber())
          const cycle = await lotteryContract.cycle()
          const closeTimestamp = await lotteryContract.closeTimestamp()
          const totalSupply = await lotteryContract.totalSupply()
          const ticketPrice = await lotteryContract.ticketPrice()
          const sellerCommissionRatio = await lotteryContract.sellerCommissionRatio()
          const lastDefinitelySendingRuleId = await lotteryContract.lastDefinitelySendingRuleId()
          const lastRandomSendingRuleId = await lotteryContract.lastRandomSendingRuleId()
          lotteryIndex = lotteryIndex.toNumber()

          for (
            let definitelySendingRuleId = 1;
            definitelySendingRuleId <= lastDefinitelySendingRuleId.toNumber();
            definitelySendingRuleId++
          ) {
            const definitelySendingRuleAddress = await lotteryContract.definitelySendingRuleAddress(
              definitelySendingRuleId
            )
            // const definitelySendingRuleRatio = await lotteryContract.definitelySendingRuleRatio(definitelySendingRuleId)
            const definitelySendingRuleRatio = 100 // TODO:
            definitelySendingRules.push({
              address: definitelySendingRuleAddress,
              ratio: definitelySendingRuleRatio,
            })
          }

          const randomSendingRules: RandomSendingRule[] = []

          for (
            let randomSendingRuleId = 1;
            randomSendingRuleId <= lastRandomSendingRuleId.toNumber();
            randomSendingRuleId++
          ) {
            const randomSendingRuleRatio = await lotteryContract.randomSendingRuleRatio(randomSendingRuleId)
            const randomSendingRuleSendingCount = await lotteryContract.randomSendingRuleSendingCount(
              randomSendingRuleId
            )

            randomSendingRules.push({
              sendingCount: randomSendingRuleSendingCount.toNumber(),
              ratio: randomSendingRuleRatio.toNumber(),
            })
          }

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
            totalSupply.toNumber(),
            1, // firstPrizeCount
            Number(ticketPrice.toString()),
            definitelySendingRules,
            randomSendingRules,
            sellerCommissionRatio
          )
          //lotteryContract.ticketPrice()
          if (!lotteryAddressesByErc20Addresses[erc20Contract.address]) {
            lotteryAddressesByErc20Addresses[erc20Contract.address] = []
          }
          lotteryAddressesByErc20Addresses[erc20Contract.address].push(lotteryAddress)
          lotteries[lotteryAddress] = lottery
        })
      )

      dispatch(updateLotteryAddressesByErc20Addresses(lotteryAddressesByErc20Addresses))
      dispatch(updateLotteries(lotteries))
    }
    exec()
  }, [dispatch, chainId, library])

  return null
}
