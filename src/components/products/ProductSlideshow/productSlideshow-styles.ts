import tw, { styled } from 'twin.macro'
import { Slide } from 'react-slideshow-image'

export const StyledProductSlideshow = styled(Slide)`
    ${tw``}
`

export const StyledImageBg = styled.div`
    ${tw`flex justify-center [background-size: contain] [background-position: center] h-[45vh]`}
    ${tw`sm:h-[60vh]`}
    ${tw`lg:h-[70vh]`}
`

export interface ImagesPros {
    urlImage: string
}

export const StyledImage = styled.div<ImagesPros>`
    ${tw`w-full [background-size: cover] `}

    background-image: url(${(props) => props.urlImage});
`
