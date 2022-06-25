import { ChevronDownIcon } from '@heroicons/react/solid'
import { t } from '@lingui/macro'
import { useLingui } from '@lingui/react'
import Button from 'app/components/Button'
import Typography from 'app/components/Typography'
import { useLotteryModalToggle } from 'app/state/application/hooks'
import { useLottery } from 'app/state/lottery/hooks'
import React, { FC } from 'react'
import { useWeb3React } from 'web3-react-core'

const SelectLotteryButton: FC = () => {
  const { i18n } = useLingui()
  const { account } = useWeb3React()

  const lottery = useLottery()
  const lotteryModalToggle = useLotteryModalToggle()

  return lottery ? (
    <>
      <Button onClick={lotteryModalToggle} className="rounded-[14px] bg-white">
        <div className="flex items-center justify-center mx-auto">
          <div>
            <Typography className="text-gray-500" variant="sm">
              {lottery.symbol}{' '}
            </Typography>
          </div>
          <Typography className="px-2" variant="lg" weight={700}>
            {lottery.name}
          </Typography>
          <ChevronDownIcon width={18} />
        </div>
      </Button>
    </>
  ) : account ? (
    <Button onClick={lotteryModalToggle} className="rounded-[14px] bg-white">
      {i18n._(t`Select a Lottery`)}
      <ChevronDownIcon width={18} />
    </Button>
  ) : null
}

export default SelectLotteryButton
