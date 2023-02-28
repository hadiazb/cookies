import { createGlobalStyle, DefaultTheme } from 'styled-components/macro'
import tw from 'twin.macro'

import resetStyles from './ResetStyles'
import { getMontserratFont, getHelveticaFont } from './webfonts'

// type definitions
export type GlobalStyleProps = {
    reset?: boolean
}

export type CustomStylesProps<T = DefaultTheme> = GlobalStyleProps & {
    theme: T
}

export const GlobalStyle = createGlobalStyle<CustomStylesProps>`
    * {
      ${tw`font-montserrat`}
    }

    /* load fonts */
    ${getMontserratFont()}
    ${getHelveticaFont()}

    ${(props) => (props.reset ? resetStyles() : '')}
`
