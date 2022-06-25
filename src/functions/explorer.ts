import { ChainId } from '@foxlottery/core-sdk'

const explorers = {
  etherscan: (link: string, data: string, type: 'transaction' | 'token' | 'address' | 'block') => {
    switch (type) {
      case 'transaction':
        return `${link}/tx/${data}`
      default:
        return `${link}/${type}/${data}`
    }
  },

  blockscout: (link: string, data: string, type: 'transaction' | 'token' | 'address' | 'block') => {
    switch (type) {
      case 'transaction':
        return `${link}/tx/${data}`
      case 'token':
        return `${link}/tokens/${data}`
      default:
        return `${link}/${type}/${data}`
    }
  },

  harmony: (link: string, data: string, type: 'transaction' | 'token' | 'address' | 'block') => {
    switch (type) {
      case 'transaction':
        return `${link}/tx/${data}`
      case 'token':
        return `${link}/address/${data}`
      default:
        return `${link}/${type}/${data}`
    }
  },

  okex: (link: string, data: string, type: 'transaction' | 'token' | 'address' | 'block') => {
    switch (type) {
      case 'transaction':
        return `${link}/tx/${data}`
      case 'token':
        return `${link}/tokenAddr/${data}`
      default:
        return `${link}/${type}/${data}`
    }
  },
  moonriver: (link: string, data: string, type: 'transaction' | 'token' | 'address' | 'block') => {
    switch (type) {
      case 'transaction':
        return `${link}/tx/${data}`
      case 'token':
        return `${link}/tokens/${data}`
      default:
        return `${link}/${type}/${data}`
    }
  },
  fuse: (link: string, data: string, type: 'transaction' | 'token' | 'address' | 'block') => {
    switch (type) {
      case 'transaction':
        return `${link}/tx/${data}`
      case 'token':
        return `${link}/tokens/${data}`
      default:
        return `${link}/${type}/${data}`
    }
  },
  telos: (link: string, data: string, type: 'transaction' | 'token' | 'address' | 'block') => {
    switch (type) {
      case 'transaction':
        return `${link}/transaction/${data}`
      case 'token':
        return `${link}/address/${data}`
      case 'address':
        return `${link}/address/${data}`
      default:
        return `${link}/${type}/${data}`
    }
  },
  moonbeam: (link: string, data: string, type: 'transaction' | 'token' | 'address' | 'block') => {
    switch (type) {
      case 'transaction':
        return `${link}/tx/${data}`
      case 'token':
        return `${link}/tokens/${data}`
      default:
        return `${link}/${type}/${data}`
    }
  },
}
interface ChainObject {
  [chainId: number]: {
    link: string
    builder: (chainName: string, data: string, type: 'transaction' | 'token' | 'address' | 'block') => string
  }
}

const chains: ChainObject = {
  [ChainId.ETHEREUM]: {
    link: 'https://etherscan.io',
    builder: explorers.etherscan,
  },
  [ChainId.RINKEBY]: {
    link: 'https://rinkeby.etherscan.io',
    builder: explorers.etherscan,
  },
  [ChainId.GÖRLI]: {
    link: 'https://goerli.etherscan.io',
    builder: explorers.etherscan,
  },
  [ChainId.MATIC]: {
    link: 'https://polygonscan.com',
    builder: explorers.etherscan,
  },
  [ChainId.MATIC_TESTNET]: {
    link: 'https://mumbai.polygonscan.com',
    builder: explorers.etherscan,
  },
  [ChainId.BSC]: {
    link: 'https://bscscan.com',
    builder: explorers.etherscan,
  },
  [ChainId.BSC_TESTNET]: {
    link: 'https://testnet.bscscan.com',
    builder: explorers.etherscan,
  },
  [ChainId.AVALANCHE]: {
    link: 'https://cchain.explorer.avax.network',
    builder: explorers.blockscout,
  },
  [ChainId.AVALANCHE_TESTNET]: {
    link: 'https://cchain.explorer.avax-test.network',
    builder: explorers.etherscan,
  },
}

export function getExplorerLink(
  chainId: ChainId | undefined,
  data: string,
  type: 'transaction' | 'token' | 'address' | 'block'
): string {
  if (!chainId) return ''

  const chain = chains[chainId]
  return chain.builder(chain.link, data, type)
}
