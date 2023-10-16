import { ChainId, WBNB, ERC20Token } from '@pancakeswap/sdk'

export const bscTokens = {
  usdt: new ERC20Token(ChainId.BSC, '0x55d398326f99059ff775485246999027b3197955', 18, 'USDT', 'Tether USD'),
  usdti: new ERC20Token(ChainId.BSC, '0x55d398326f99059ff775485246999027b3197955', 18, 'USDT', 'Tether USD'),
  ice: new ERC20Token(ChainId.BSC, '0x0eE4024E8d5ae9afFCe26f692028407dD2050B7D', 18, 'PATTIE', 'PattieSwap', 'https://icecreamswap.com'),
  wbnb: WBNB[ChainId.BSC],
  bnb: new ERC20Token(
    ChainId.BSC,
    '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    18,
    'BNB',
    'BNB',
    'https://www.binance.com/',
  ),
}
