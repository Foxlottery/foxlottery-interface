import { t } from '@lingui/macro'
import { useLingui } from '@lingui/react'
import Button from 'app/components/Button'
import LotteryDetail from 'app/components/LotteryDetail'
import { getErc20Contract, getLotteryContract } from 'app/functions/contract'
import getLotteryFromContract from 'app/functions/getLotteryFromContract'
import { useActiveWeb3React } from 'app/services/web3'
import { useWalletModalToggle } from 'app/state/application/hooks'
import { useChangeLottery, useLottery } from 'app/state/lottery/hooks'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { NextSeo } from 'next-seo'
import { useEffect } from 'react'

const Lottery: NextPage = () => {
  const { i18n } = useLingui()
  const title = i18n._(t`Lottery`)
  const { account, library, chainId } = useActiveWeb3React()
  const toggleWalletModal = useWalletModalToggle()
  const changeLottery = useChangeLottery()
  const lottery = useLottery()
  const router = useRouter()
  const { lotteryAddress } = router.query

  useEffect(() => {
    const exec = async () => {
      if (lotteryAddress && typeof lotteryAddress === 'string' && library && account && chainId) {
        const lotteryContract = await getLotteryContract(lotteryAddress, library, account)
        const erc20Contract = await getErc20Contract(await lotteryContract.erc20(), library, account)
        const lottery = await getLotteryFromContract(lotteryContract, erc20Contract, chainId)
        changeLottery(lottery)
        console.log(lottery)
      }
    }
    exec()
  }, [account, chainId, changeLottery, library, lotteryAddress])

  return (
    <>
      <NextSeo title={i18n._(t`${title} | Foxlottery`)} />
      <div className="my-5">
        {account ? (
          <>
            {lottery ? (
              <>
                <LotteryDetail lottery={lottery} />
              </>
            ) : (
              <>loading</>
            )}
          </>
        ) : (
          <div className="items-center justify-center my-10">
            <Button onClick={toggleWalletModal} className="rounded-[14px]" color="gradientGreen" variant="filled">
              {i18n._(t`Connect to a wallet`)}
            </Button>
          </div>
        )}
      </div>
    </>
  )
}

export default Lottery
