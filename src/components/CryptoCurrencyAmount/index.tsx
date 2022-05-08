import { t } from '@lingui/macro'
import { useLingui } from '@lingui/react'
import { useActiveWeb3React } from 'app/services/web3'
import { useSelectedCryptoCurrency } from 'app/state/lottery/hooks'
import { useCurrencyBalance } from 'app/state/wallet/hooks'

import Dots from '../Dots'

const CryptoCurrencyAmount = () => {
  const { account, chainId } = useActiveWeb3React()
  const { i18n } = useLingui()
  const currency = useSelectedCryptoCurrency()
  const balance = useCurrencyBalance(account ? account : undefined, currency)

  return (
    <>
      {account && chainId && currency && (
        <div>
          {i18n._(t`Balance`)}:{` `}
          {balance ? `${balance?.toSignificant(4)} ${currency?.symbol}` : <Dots>{i18n._(t`FETCHING`)}</Dots>}
        </div>
      )}
    </>
  )
}

export default CryptoCurrencyAmount
