import { t } from '@lingui/macro'
import { useLingui } from '@lingui/react'
import Button from 'app/components/Button'
import RankingList from 'app/components/RankingList'
import { useActiveWeb3React } from 'app/services/web3'
import { useWalletModalToggle } from 'app/state/application/hooks'
import type { NextPage } from 'next'
import { NextSeo } from 'next-seo'

const Ranking: NextPage = () => {
  const { i18n } = useLingui()
  const title = i18n._(t`Ranking`)
  const { account } = useActiveWeb3React()
  const toggleWalletModal = useWalletModalToggle()

  return (
    <>
      <NextSeo title={i18n._(t`${title} | Foxlottery`)} />
      <div className="w-full my-5">
        {account ? (
          <RankingList />
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

export default Ranking
