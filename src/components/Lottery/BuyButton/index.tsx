import { t } from '@lingui/macro'
import { useLingui } from '@lingui/react'
import Button from 'app/components/Button'
import { useWalletModalToggle } from 'app/state/application/hooks'
import { useButtonDisabled, useInputValue } from 'app/state/lottery/hooks'
import { useLottery } from 'app/state/lottery/hooks'
import { useCurrentUserCurrentCurrencyBalance } from 'app/state/wallet/hooks'
import React, { FC } from 'react'
import { useWeb3React } from 'web3-react-core'

const LotteryButton: FC = () => {
  const { account } = useWeb3React()
  const { i18n } = useLingui()
  const toggleWalletModal = useWalletModalToggle()
  const buttonDisabled = useButtonDisabled()
  const inputValue = useInputValue()
  const currentCurrencyBalance = useCurrentUserCurrentCurrencyBalance()
  const lottery = useLottery()

  const buyTicket = async () => {
    if (inputValue && lottery?.contract && lottery.erc20Currency.contract) {
      await lottery.erc20Currency.contract.approve(lottery.address, String(inputValue * lottery.ticketPrice))
      await lottery.contract.buyTicket(inputValue, '0xBB2C2dEC31FbC339BA7a891AbF50a2fF29013880')
    }
  }

  return (
    <>
      {account ? (
        <Button
          disabled={buttonDisabled}
          onClick={buyTicket}
          className="rounded-[14px]"
          color="gradientGreen"
          variant="filled"
        >
          {inputValue && (currentCurrencyBalance?.toSignificant() as unknown as number) <= inputValue
            ? i18n._(t`Balance is not enough`)
            : i18n._(t`Buy a ticket`)}
          {}
        </Button>
      ) : (
        <Button onClick={toggleWalletModal} className="rounded-[14px]" color="gradientGreen" variant="filled">
          {i18n._(t`Connect to a wallet`)}
        </Button>
      )}
    </>
  )
}

export default LotteryButton
