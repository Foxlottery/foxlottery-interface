import Lotteries from 'app/components/Lotteries'
import SelectErc20Currency from 'app/components/SelectErc20Currency'
import { useSelectedErc20Currency } from 'app/state/lottery/hooks'
import React, { FC } from 'react'

const SearchLotteries: FC = () => {
  const erc20Currency = useSelectedErc20Currency()

  return (
    <>
      <SelectErc20Currency />
      <Lotteries erc20Currency={erc20Currency} />
    </>
  )
}

export default SearchLotteries
