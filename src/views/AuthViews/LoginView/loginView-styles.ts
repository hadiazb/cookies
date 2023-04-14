import tw, { styled } from 'twin.macro'
import Link from 'next/link'

export const StyledLoginView = styled.section`
    ${tw`h-[80vh] flex justify-center items-center p-1 md:p-3 lg:p-5`}
`

export const StyledLoginLink = styled(Link)`
    ${tw`text-primary`}
`
