import tw, { styled } from 'twin.macro'

export const StyledMainLayout = styled.main`
    ${tw`min-h-screen`}
    ${tw`transition-[all] duration-[300ms] delay-[150ms]`}

    background-color: ${({ theme }) => theme.colors.light};
`
