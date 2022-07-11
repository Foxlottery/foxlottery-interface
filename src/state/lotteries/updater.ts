import { Contract } from '@ethersproject/contracts'
import chainLotteryAddresses from 'app/config/chainLotteryAddresses'
import { getErc20Contract, getLotteryContract } from 'app/functions/contract'
import getLibrary from 'app/functions/getLibrary'
import getLotteryFromContract from 'app/functions/getLotteryFromContract'
import { useActiveWeb3React } from 'app/services/web3'
import LotteriesByAddress from 'app/types/LotteriesByAddress'
import LotteryAddressesByErc20Addresses from 'app/types/LotteryAddressesByErc20Addresses'
import { useEffect } from 'react'

import { useAppDispatch } from '../hooks'
import { useSetIsLoading } from './hooks'
import { updateLotteries, updateLotteryAddressesByErc20Addresses } from './reducer'

export default function Updater(): null {
  const { chainId, account } = useActiveWeb3React()
  const dispatch = useAppDispatch()
  const library = getLibrary(window.ethereum)
  const setIsLoading = useSetIsLoading()

  // get lottery contract from blockchain network
  useEffect(() => {
    const exec = async () => {
      if (!chainId || !account) {
        return
      }
      setIsLoading(true)
      let lotteryAddresses: string[] = []
      if (chainId) {
        lotteryAddresses = chainLotteryAddresses[chainId]
      }
      let lotteries: LotteriesByAddress = {}
      let lotteryAddressesByErc20Addresses: LotteryAddressesByErc20Addresses = {}

      await Promise.all(
        lotteryAddresses.map(async (lotteryAddress: string) => {
          let lotteryContract: Contract = await getLotteryContract(lotteryAddress, library, account)
          let erc20Contract: Contract = await getErc20Contract(await lotteryContract.erc20(), library, account)
          const lottery = await getLotteryFromContract(lotteryContract, erc20Contract, chainId)

          if (!lotteryAddressesByErc20Addresses[erc20Contract.address]) {
            lotteryAddressesByErc20Addresses[erc20Contract.address] = []
          }
          lotteryAddressesByErc20Addresses[erc20Contract.address].push(lotteryAddress)
          lotteries[lotteryAddress] = lottery
        })
      )

      dispatch(updateLotteryAddressesByErc20Addresses(lotteryAddressesByErc20Addresses))
      dispatch(updateLotteries(lotteries))
      setIsLoading(false)
    }
    exec()
  }, [dispatch, chainId, library, account, setIsLoading])

  return null
}
