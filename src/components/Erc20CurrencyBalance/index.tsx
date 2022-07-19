import { Erc20Currency } from '@foxlottery/core-sdk'
import { t } from '@lingui/macro'
import { useLingui } from '@lingui/react'
import { useActiveWeb3React } from 'app/services/web3'
import { useErc20CurrencyBalance } from 'app/state/wallet/hooks'
import React, { FC } from 'react'

import Dots from '../Dots'

interface Props {
  erc20Currency: Erc20Currency
}

const Erc20CurrencyBalance: FC<Props> = ({ erc20Currency }) => {
  const { account, chainId } = useActiveWeb3React()
  const { i18n } = useLingui()
  const balance = useErc20CurrencyBalance(account ? account : undefined, erc20Currency)

  return (
    <>
      {account && chainId && erc20Currency && (
        <>
          {i18n._(t`Balance`)}:{` `}
          {balance ? `${balance?.toSignificant(4)} ${erc20Currency?.symbol}` : <Dots>{i18n._(t`FETCHING`)}</Dots>}
        </>
      )}
    </>
  )
}

export default Erc20CurrencyBalance
