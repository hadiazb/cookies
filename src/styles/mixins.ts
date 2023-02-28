import tw, { css } from 'twin.macro'

export const StyledShadowMixed = css`
    ${({ theme }) => theme.colors.light && tw`shadow-[0px 3px 6px #00000029]`}
`

export const StyledShadowInputMixed = css`
    ${({ theme }) => theme.colors.light && tw`shadow-[0px 1px 3px #00000029]`}
`

export const StyledTransitionMixed = css`
    ${tw`transition-[all] duration-[300ms] delay-[150ms]`}
`

export interface StyledTopPaddingMixedProps {
    pt?: string
}

export const StyledTopPaddingMixed = css<StyledTopPaddingMixedProps>`
    padding-top: ${({ pt }) => (pt ? pt : '100px')};
`
