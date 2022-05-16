import { ChevronDownIcon } from '@heroicons/react/solid'
import { t } from '@lingui/macro'
import { useLingui } from '@lingui/react'
import Button from 'app/components/Button'
import Typography from 'app/components/Typography'
import { useTokenTimedRandomSendContractModalToggle } from 'app/state/application/hooks'
import { useTokenTimedRandomSendContract } from 'app/state/lottery/hooks'
import React, { FC } from 'react'
import { useWeb3React } from 'web3-react-core'

const SelectTokenTimedRandomSendContractButton: FC = () => {
  const { i18n } = useLingui()
  const { account } = useWeb3React()

  const tokenTimedRandomSendContract = useTokenTimedRandomSendContract()
  const tokenTimedRandomSendContractModalToggle = useTokenTimedRandomSendContractModalToggle()

  return tokenTimedRandomSendContract ? (
    <>
      <Button onClick={tokenTimedRandomSendContractModalToggle} className="rounded-[14px] bg-white">
        <div className="flex items-center justify-center mx-auto">
          <div>
            <Typography className="text-gray-500" variant="sm">
              {tokenTimedRandomSendContract.symbol}{' '}
            </Typography>
          </div>
          <Typography className="px-2" variant="lg" weight={700}>
            {tokenTimedRandomSendContract.name}
          </Typography>
          <ChevronDownIcon width={18} />
        </div>
      </Button>
    </>
  ) : account ? (
    <Button onClick={tokenTimedRandomSendContractModalToggle} className="rounded-[14px] bg-white">
      {i18n._(t`Select a Lottery`)}
      <ChevronDownIcon width={18} />
    </Button>
  ) : null
}

export default SelectTokenTimedRandomSendContractButton
