import tw, { styled } from 'twin.macro'

export const StyledNavbar = styled.section`
    ${tw`px-1 mx-2 max-w-6xl w-full`}
    ${tw`sm:px-2 sm:mx-auto`}
    ${tw`sm:px-3`}
    ${tw`md:px-5`}


    & .MuiToolbar-root {
        ${tw`px-0`}
    }

    & .navbar-link {
        ${tw`mr-5 [text-decoration: none]`}
    }
`
