import { ChainId } from '@foxlottery/core-sdk'

const Avalanche = '/images/networks/avalanche.jpg'
const Bsc = '/images/networks/bsc.jpg'
const Goerli = '/images/networks/goerli.jpg'
const Ethereum = '/images/networks/ethereum.jpg'
const Matic = '/images/networks/polygon.jpg'
const Polygon = '/images/networks/polygon.jpg'
const Rinkeby = '/images/networks/rinkeby.jpg'

export const NETWORK_ICON: Record<number, string> = {
  [ChainId.ETHEREUM]: Ethereum,
  [ChainId.RINKEBY]: Rinkeby,
  [ChainId.GÖRLI]: Goerli,
  [ChainId.BSC]: Bsc,
  [ChainId.BSC_TESTNET]: Bsc,
  [ChainId.MATIC]: Polygon,
  [ChainId.MATIC_TESTNET]: Matic,
  [ChainId.AVALANCHE]: Avalanche,
  [ChainId.AVALANCHE_TESTNET]: Avalanche,
}

export const NETWORK_LABEL: Record<number, string> = {
  [ChainId.ETHEREUM]: 'Ethereum',
  [ChainId.RINKEBY]: 'Rinkeby',
  [ChainId.GÖRLI]: 'Görli',
  [ChainId.MATIC]: 'Polygon',
  [ChainId.MATIC_TESTNET]: 'Mumbai',
  [ChainId.BSC]: 'BSC',
  [ChainId.BSC_TESTNET]: 'BSC Testnet',
  [ChainId.AVALANCHE]: 'Avalanche',
  [ChainId.AVALANCHE_TESTNET]: 'Avalanche Fuji',
}

export const supportedNetworkChainIds = [
  ChainId.ETHEREUM,
  ChainId.MATIC,
  ChainId.BSC,
  ChainId.AVALANCHE,
  ChainId.RINKEBY,
  ChainId.MATIC_TESTNET,
  ChainId.BSC_TESTNET,
  ChainId.AVALANCHE_TESTNET,
]

export const SUPPORTED_NETWORKS: Record<
  number,
  {
    chainId: string
    chainName: string
    nativeCurrency: {
      name: string
      symbol: string
      decimals: number
    }
  }
> = {
  [ChainId.ETHEREUM]: {
    chainId: '0x1',
    chainName: 'Ethereum',
    nativeCurrency: {
      name: 'Ethereum',
      symbol: 'ETH',
      decimals: 18,
    },
  },
  [ChainId.RINKEBY]: {
    chainId: '0x4',
    chainName: 'Rinkeby',
    nativeCurrency: {
      name: 'Ethereum',
      symbol: 'ETH',
      decimals: 18,
    },
  },
  [ChainId.BSC]: {
    chainId: '0x38',
    chainName: 'Binance Smart Chain',
    nativeCurrency: {
      name: 'Binance Coin',
      symbol: 'BNB',
      decimals: 18,
    },
  },
  [ChainId.BSC_TESTNET]: {
    chainId: '0x61',
    chainName: 'Binance Smart Chain Test',
    nativeCurrency: {
      name: 'Binance Coin',
      symbol: 'BNB',
      decimals: 18,
    },
  },
  [ChainId.MATIC]: {
    chainId: '0x89',
    chainName: 'Matic',
    nativeCurrency: {
      name: 'Matic',
      symbol: 'MATIC',
      decimals: 18,
    },
  },
  [ChainId.MATIC_TESTNET]: {
    chainId: '0x13881',
    chainName: 'Mumbai',
    nativeCurrency: {
      name: 'MATIC',
      symbol: 'MATIC',
      decimals: 18,
    },
  },
  [ChainId.AVALANCHE]: {
    chainId: '0xA86A',
    chainName: 'Avalanche Mainnet C-Chain',
    nativeCurrency: {
      name: 'Avalanche Token',
      symbol: 'AVAX',
      decimals: 18,
    },
  },
  [ChainId.AVALANCHE_TESTNET]: {
    chainId: '0xA869',
    chainName: 'Avalanche Fuji',
    nativeCurrency: {
      name: 'Avalanche Token',
      symbol: 'AVAX',
      decimals: 18,
    },
  },
}
