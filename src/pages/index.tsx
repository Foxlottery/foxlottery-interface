import Lottery from 'app/components/Lottery'
import { Feature } from 'app/enums'
import NetworkGuard from 'app/guards/Network'

const Home = () => {
  return (
    <>
      <div className="w-full h-full">
        <Lottery />
      </div>
    </>
  )
}

Home.Guard = NetworkGuard(Feature.LOTTERY)

export default Home
