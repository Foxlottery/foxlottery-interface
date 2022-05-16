import { NATIVE } from '@foxlottery/core-sdk'
import { t } from '@lingui/macro'
import { useLingui } from '@lingui/react'
import { useActiveWeb3React } from 'app/services/web3'
import { useNativeCurrencyBalances } from 'app/state/wallet/hooks'

import Dots from '../Dots'
import Typography from '../Typography'

const CurrentCryptoCurrencyBalance = () => {
  const { account, chainId } = useActiveWeb3React()
  const { i18n } = useLingui()
  const userEthBalance = useNativeCurrencyBalances(account ? [account] : [])?.[account ?? '']

  return (
    <>
      {account && chainId && (
        <Typography weight={700} variant="sm" className="px-2 font-semibold">
          {userEthBalance ? (
            `${userEthBalance?.toSignificant(4)} ${NATIVE[chainId].symbol}`
          ) : (
            <Dots>{i18n._(t`FETCHING`)}</Dots>
          )}
        </Typography>
      )}
    </>
  )
}

export default CurrentCryptoCurrencyBalance
