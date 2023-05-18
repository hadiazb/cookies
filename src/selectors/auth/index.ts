import createSelector from '../createSelector'
import type { RootState } from '../../store/store'

export const authSelector = createSelector(
    (state: RootState) => state.auth,
    (auth) => auth
)
