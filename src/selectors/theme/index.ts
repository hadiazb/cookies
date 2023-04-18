import createSelector from '../createSelector'
import type { RootState } from '../../store/store'

export const themeSelector = createSelector(
    (state: RootState) => state.theme,
    (theme) => theme
)
