import { createSelectorCreator, defaultMemoize } from 'reselect'
import { equals } from 'ramda'

const createSelector = createSelectorCreator(defaultMemoize, equals)

export default createSelector
