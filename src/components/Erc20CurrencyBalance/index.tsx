import { t } from '@lingui/macro'
import { useLingui } from '@lingui/react'
import { useActiveWeb3React } from 'app/services/web3'
import { useSelectedErc20Currency } from 'app/state/lottery/hooks'
import { useErc20CurrencyBalance } from 'app/state/wallet/hooks'

import Dots from '../Dots'

const Erc20CurrencyBalance = () => {
  const { account, chainId } = useActiveWeb3React()
  const { i18n } = useLingui()
  const erc20Currency = useSelectedErc20Currency()
  const balance = useErc20CurrencyBalance(account ? account : undefined, erc20Currency)

  return (
    <>
      {account && chainId && erc20Currency && (
        <div>
          {i18n._(t`Balance`)}:{` `}
          {balance ? `${balance?.toSignificant(4)} ${erc20Currency?.symbol}` : <Dots>{i18n._(t`FETCHING`)}</Dots>}
        </div>
      )}
    </>
  )
}

export default Erc20CurrencyBalance
