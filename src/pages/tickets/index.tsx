import { t } from '@lingui/macro'
import { useLingui } from '@lingui/react'
import Button from 'app/components/Button'
import TicketsUI from 'app/components/TicketsUI'
import { useActiveWeb3React } from 'app/services/web3'
import { useWalletModalToggle } from 'app/state/application/hooks'
import type { NextPage } from 'next'
import { NextSeo } from 'next-seo'

const Tickets: NextPage = () => {
  const { i18n } = useLingui()
  const title = i18n._(t`Tickets`)
  const { account } = useActiveWeb3React()
  const toggleWalletModal = useWalletModalToggle()

  return (
    <>
      <NextSeo title={i18n._(t`${title} | Foxlottery`)} />
      {account ? (
        <TicketsUI />
      ) : (
        <div className="items-center justify-center my-16">
          <Button onClick={toggleWalletModal} className="rounded-[14px]" color="gradientGreen" variant="filled">
            {i18n._(t`Connect to a wallet`)}
          </Button>
        </div>
      )}
    </>
  )
}

export default Tickets
