import tw, { styled } from 'twin.macro'
import Link from 'next/link'

export const StyledRegisterView = styled.section`
    ${tw`h-[80vh] flex justify-center items-center p-1 md:p-3 lg:p-5`}
`

export const StyledLoginRegister = styled(Link)`
    ${tw`text-primary`}
`
