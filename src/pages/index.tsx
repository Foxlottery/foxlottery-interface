import { useLingui } from '@lingui/react'
import Lottery from 'app/components/Lottery'
import { Feature } from 'app/enums'
import NetworkGuard from 'app/guards/Network'

const Home = () => {
  const { i18n } = useLingui()
  return (
    <>
      <div className="h-96">
        <Lottery />
      </div>
    </>
  )
}

Home.Guard = NetworkGuard(Feature.LOTTERY)

export default Home
