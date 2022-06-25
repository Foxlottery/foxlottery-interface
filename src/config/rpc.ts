import { ChainId } from '@foxlottery/core-sdk'

const RPC = {
  [ChainId.ETHEREUM]: 'https://mainnet.infura.io/v3/9132a69c7c20454381e274ce4533f73d',
  [ChainId.RINKEBY]: 'https://rinkeby.infura.io/v3/9132a69c7c20454381e274ce4533f73d',
  [ChainId.GÖRLI]: 'https://eth-goerli.alchemyapi.io/v2/Dkk5d02QjttYEoGmhZnJG37rKt8Yl3Im',
  [ChainId.MATIC]: 'https://polygon-rpc.com/',
  [ChainId.MATIC_TESTNET]: 'https://rpc-mumbai.matic.today',
  [ChainId.BSC]: 'https://bsc-dataseed.binance.org/',
  [ChainId.BSC_TESTNET]: 'https://data-seed-prebsc-2-s3.binance.org:8545',
  [ChainId.AVALANCHE]: 'https://api.avax.network/ext/bc/C/rpc',
  [ChainId.AVALANCHE_TESTNET]: 'https://api.avax-test.network/ext/bc/C/rpc',
}

export default RPC
