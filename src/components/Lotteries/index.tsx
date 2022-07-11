import { Erc20Currency, Lottery } from '@foxlottery/core-sdk'
import LotteryCard from 'app/components/LotteryCard'
import chainLotteryAddresses from 'app/config/chainLotteryAddresses'
import { useActiveWeb3React } from 'app/services/web3'
import { useIsLoading, useLotteries, useLotteryAddressesByErc20Addresses } from 'app/state/lotteries/hooks'
import { useChangeLottery } from 'app/state/lottery/hooks'
import { useRouter } from 'next/router'
import React, { FC } from 'react'

interface Props {
  erc20Currency?: Erc20Currency
}

const Lotteries: FC<Props> = ({ erc20Currency }) => {
  const router = useRouter()
  const { chainId } = useActiveWeb3React()
  const lotteries = useLotteries()
  const isLoading = useIsLoading()
  const lotteryAddressesByErc20Addresses = useLotteryAddressesByErc20Addresses()
  const changeLottery = useChangeLottery()

  const handleClick = (e: any, href: string, lottery: Lottery) => {
    e.preventDefault()
    changeLottery(lottery)
    router.push(href)
  }

  if (isLoading) {
    return <>loading</>
  }

  return (
    <>
      {chainId && erc20Currency && lotteryAddressesByErc20Addresses && lotteries ? (
        <>
          {lotteryAddressesByErc20Addresses[erc20Currency.address]?.map((address: string, key: number) => {
            const lottery = lotteries[address]
            if (lottery) {
              return (
                <a
                  className={'cursor-pointer'}
                  key={key}
                  onClick={(e) =>
                    handleClick(e, `/lottery?chainId=${chainId}&lotteryAddress=${lottery.address}`, lottery)
                  }
                >
                  <LotteryCard lottery={lottery} />
                </a>
              )
            }
          })}
        </>
      ) : chainId ? (
        <>
          {lotteries &&
            chainLotteryAddresses[chainId].map((address: string, key: number) => {
              const lottery = lotteries[address]
              if (lottery) {
                return (
                  <a
                    className={'cursor-pointer'}
                    key={key}
                    onClick={(e) =>
                      handleClick(e, `/lottery?chainId=${chainId}&lotteryAddress=${lottery.address}`, lottery)
                    }
                  >
                    <LotteryCard lottery={lottery} />
                  </a>
                )
              }
            })}
        </>
      ) : null}
    </>
  )
}

export default Lotteries
