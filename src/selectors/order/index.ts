import createSelector from '../createSelector'
import type { RootState } from '../../store/store'

export const orderSelector = createSelector(
    (state: RootState) => state.order,
    (order) => order
)
