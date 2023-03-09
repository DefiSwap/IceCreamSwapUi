import {ChainId, ERC20Token, WETH9} from '@pancakeswap/sdk'

export const coreTokens = {
  wcore: WETH9[ChainId.CORE],
  score: new ERC20Token(ChainId.CORE, '0xA20b3B97df3a02f9185175760300a06B4e0A2C05', 18, 'SCORE', 'StakedCore', 'https://icecreamswap.com'),
  ice: new ERC20Token(ChainId.CORE, '0xc0E49f8C615d3d4c245970F6Dc528E4A47d69a44', 18, 'ICE', 'IceCream', 'https://icecreamswap.com'),
  usdt: new ERC20Token(ChainId.CORE, '0x81bCEa03678D1CEF4830942227720D542Aa15817', 18, 'USDT', 'Tether USD'),
  usdc: new ERC20Token(ChainId.CORE, '0xD2683b22287E63D22928CBe4514003a92507f474', 18, 'USDC', 'USD Coin'),
  eth: new ERC20Token(ChainId.CORE, '0xeF6b7BC74C9354BCf2e3F2A068e4b0B5CDf08F29', 18, 'ETH', 'Ether'),
  bnb: new ERC20Token(ChainId.CORE, '0x12AA82525DEfF84777fa78578A68ceB854A85f43', 18, 'BNB', 'BNB'),
  huc: new ERC20Token(ChainId.CORE, '0x5EE2c2aE144218b52CF756c0907bA384C7E35fba', 18, 'HUC', 'Hobo Universe'),
  aicore: new ERC20Token(ChainId.CORE, '0x7621c97683A3b0499EC156bD257E44175e793bb1', 9, 'AICore', 'AI CORE TOKEN'),
  bcore: new ERC20Token(ChainId.CORE, '0xBFa14641bf0fE84dE3fcf3Bf227900af445f09C3', 18, 'Bcore', 'Big Core'),
  kishu: new ERC20Token(ChainId.CORE, '0xb2172C92e22F09Bc7d15C4B1790c7704f8429d14', 18, 'CKISHU', 'Core Kishu'),
  gte: new ERC20Token(ChainId.CORE, '0xdA7dAA9a07ef5070dB671307fEa819c75d2D6cE3', 18, 'GTE', 'Goatge'),
  word: new ERC20Token(ChainId.CORE, '0xAA7912C028E058e4bD90Bcbb9fB41C27DbcC3245', 6, 'WORD', 'StarlyBooks'),
  cshib: new ERC20Token(ChainId.CORE, '0x751669F3dCE1ED1c449dE44889365E40F13ce57f', 9, 'CoreShib', 'CoreShib'),
  ctomb: new ERC20Token(ChainId.CORE, '0xC830a752eef79F2D66a36645A70fB0bA176b4Cea', 18, 'CTOMB', 'CoreTomb'),
  cshare: new ERC20Token(ChainId.CORE, '0x6501cCA79ca8D6F68784f2345c9a379951e30A05', 18, 'CSHARE', 'CoreShare'),
  lung: new ERC20Token(ChainId.CORE, '0xE8b0dF74192CCA9C4de66F23653476f6e6CD1d98', 18, 'LUNG', 'LunaGens'),
  hobo: new ERC20Token(ChainId.CORE, '0x25100C0083e8E53b1cb264E978522bd477011A0d', 18, 'HOBO', 'Hobo Universe'),
  coreshiba: new ERC20Token(ChainId.CORE, '0x84F0FDAA0a34B5F4a1144372072a706A4A8121A4', 18, 'SHIBA', 'ShibaCore'),
  usdtrain: new ERC20Token(ChainId.CORE, '0xFB59984Fd355C60064fcb191C0Ed817F1365eec0', 18, 'USDTRAIN', 'USDT Rain'),
}