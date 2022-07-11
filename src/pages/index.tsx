import SearchLotteries from 'app/components/SearchLotteries'
import { Feature } from 'app/enums'
import NetworkGuard from 'app/guards/Network'
import Erc20CurrencyModal from 'app/modals/Erc20CurrencyModal'

const Home = () => {
  return (
    <>
      <Erc20CurrencyModal />
      <div className="w-full h-full">
        <SearchLotteries />
      </div>
    </>
  )
}

Home.Guard = NetworkGuard(Feature.LOTTERY)

export default Home
