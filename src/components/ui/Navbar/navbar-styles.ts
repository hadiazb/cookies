import tw, { styled } from 'twin.macro'

export const StyledNavbar = styled.section`
    ${tw`px-1 mx-auto max-w-6xl w-[calc(100% - 0.5rem)]`}
    ${tw`sm:px-2 sm:w-[calc(100% - 1rem)]`}
    ${tw`md:px-5 md:w-[calc(100% - 2.5rem)]`}

    & .MuiToolbar-root {
        ${tw`px-0`}
    }

    & .navbar-link {
        ${tw`mr-5 [text-decoration: none]`}
    }

    & .link {
        ${tw`[text-decoration: none]`}
    }
`
