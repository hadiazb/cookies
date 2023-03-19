import { ReactElement } from 'react'
import { AutocompleteProps as AutocompletePropsMUI } from '@mui/material'

// styles
import { StyledAutocomplete } from './autocomplete-styles'

export type AutocompleteProps<
    T,
    Multiple extends boolean | undefined,
    DisableClearable extends boolean | undefined,
    FreeSolo extends boolean | undefined
> = AutocompletePropsMUI<T, Multiple, DisableClearable, FreeSolo>

const Autocomplete = <
    T,
    Multiple extends boolean | undefined,
    DisableClearable extends boolean | undefined,
    FreeSolo extends boolean | undefined
>({
    ...rest
}: AutocompleteProps<T, Multiple, DisableClearable, FreeSolo>): ReactElement => {
    return <StyledAutocomplete {...rest} />
}

export default Autocomplete
