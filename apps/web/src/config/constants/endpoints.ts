import { ChainId } from '@pancakeswap/sdk'

export const INFO_CLIENT_BITGERT = 'https://the-graph.icecreamswap.com/subgraphs/name/icecreamswap/exchange-v2-bitgert'
export const BLOCKS_CLIENT_BITGERT = 'https://the-graph.icecreamswap.com/subgraphs/name/icecreamswap/blocks-bitgert'

export const INFO_CLIENT_XDC = 'https://the-graph.icecreamswap.com/subgraphs/name/icecreamswap/exchange-v2-xdc'
export const BLOCKS_CLIENT_XDC = 'https://the-graph.icecreamswap.com/subgraphs/name/icecreamswap/blocks-xdc'

export const INFO_CLIENT_CORE = 'https://thegraph.com/hosted-service/subgraph/lyu-jinhang/pattieswap'
export const BLOCKS_CLIENT_CORE = 'https://the-graph.icecreamswap.com/subgraphs/name/icecreamswap/blocks-core'



export const STABLESWAP_SUBGRAPH_CLIENT = 'https://api.thegraph.com/subgraphs/name/pancakeswap/exchange-stableswap'
export const GRAPH_HEALTH = 'https://the-graph-status.icecreamswap.com/graphql'

export const FARM_API = 'https://farms.pancake-swap.workers.dev'

export const BIT_QUERY = 'https://graphql.bitquery.io'

export const ACCESS_RISK_API = 'https://red.alert.pancakeswap.com/red-api'

export const CELER_API = 'https://api.celerscan.com/scan'

export const INFO_CLIENT_WITH_CHAIN = {
  [ChainId.BITGERT]: INFO_CLIENT_BITGERT,
  [ChainId.XDC]: INFO_CLIENT_XDC,
  [ChainId.CORE]: INFO_CLIENT_CORE,
}

export const BLOCKS_CLIENT_WITH_CHAIN: Partial<Record<ChainId, string>> = {
  [ChainId.BITGERT]: BLOCKS_CLIENT_BITGERT,
  [ChainId.XDC]: BLOCKS_CLIENT_XDC,
  [ChainId.CORE]: BLOCKS_CLIENT_CORE,
}
