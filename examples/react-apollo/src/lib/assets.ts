import { LENS_STATIC_ASSETS_URL } from '../constants'

export const getTokenImage = (symbol: string): string =>
  `${LENS_STATIC_ASSETS_URL}/tokens/${symbol?.toLowerCase()}.svg`
