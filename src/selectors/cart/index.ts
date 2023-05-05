import createSelector from '../createSelector'
import type { RootState } from '../../store/store'

export const productsSelector = createSelector(
    (state: RootState) => state.cart,
    (cart) => cart
)
