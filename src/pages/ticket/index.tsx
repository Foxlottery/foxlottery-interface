import { t } from '@lingui/macro'
import { useLingui } from '@lingui/react'
import Button from 'app/components/Button'
import DescriptionList from 'app/components/DescriptionList'
import TicketUI from 'app/components/TicketUI'
import sampleTicket from 'app/config/tickets/sampleTicket'
import { useActiveWeb3React } from 'app/services/web3'
import { useWalletModalToggle } from 'app/state/application/hooks'
import DescripionList from 'app/types/DescripionList'
import moment from 'moment'
import type { NextPage } from 'next'
import { NextSeo } from 'next-seo'

const Ticket: NextPage = () => {
  const { i18n } = useLingui()
  const title = i18n._(t`Tickets`)
  const { account } = useActiveWeb3React()
  const toggleWalletModal = useWalletModalToggle()
  const descripionList: DescripionList = {
    title: i18n._(t`Ticket Information`),
    items: [
      { key: i18n._(t`Ticket address`), value: sampleTicket.address },
      { key: i18n._(t`Lottery`), value: sampleTicket.tokenTimedRandomSendContract.name },
      { key: i18n._(t`Winning percentage`), value: '0.001%' },
      { key: i18n._(t`Status`), value: i18n._(t`Active`) },
      {
        key: i18n._(t`Buy date`),
        value: moment(sampleTicket.buyDate).format('lll'),
      },
    ],
  }

  return (
    <>
      <NextSeo title={i18n._(t`${title} | Foxlottery`)} />
      {account ? (
        <div className="mt-5">
          <TicketUI ticket={sampleTicket} />
          <div className="w-screen max-w-screen-sm mx-10 my-5">
            <DescriptionList descripionList={descripionList} />
          </div>
        </div>
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

export default Ticket
