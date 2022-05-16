import { t } from '@lingui/macro'
import { useLingui } from '@lingui/react'
import type { NextPage } from 'next'
import { NextSeo } from 'next-seo'

const Tickets: NextPage = () => {
  const { i18n } = useLingui()
  const title = i18n._(t`Tickets`)

  return (
    <>
      <NextSeo title={i18n._(t`${title} | Foxlottery`)} />
      <div className="mb-5">
        <h3 className="my-5 text-lg font-medium leading-6 text-gray-900">{title}</h3>
      </div>
    </>
  )
}

export default Tickets
