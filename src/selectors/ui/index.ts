import createSelector from '../createSelector'
import type { RootState } from '../../store/store'

export const uiSelector = createSelector(
    (state: RootState) => state.ui,
    (ui) => ui
)
