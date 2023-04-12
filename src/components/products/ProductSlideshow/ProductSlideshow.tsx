import { FC, ReactElement } from 'react'

// styles
import { StyledImage, StyledImageBg, StyledProductSlideshow } from './productSlideshow-styles'
import 'react-slideshow-image/dist/styles.css'

export type ProductSlideshowProps = {
    images: string[]
}

const ProductSlideshow: FC<ProductSlideshowProps> = ({ images, ...props }): ReactElement => {
    return (
        <StyledProductSlideshow easing="ease" duration={4000} indicators {...props}>
            {images.map((image) => {
                const url = `/products/${image}`
                return (
                    <StyledImageBg key={image}>
                        <StyledImage urlImage={url} />
                    </StyledImageBg>
                )
            })}
        </StyledProductSlideshow>
    )
}

export default ProductSlideshow
