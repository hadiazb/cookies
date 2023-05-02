import { ReactElement } from 'react'
import { GetStaticPaths, GetStaticProps, InferGetServerSidePropsType } from 'next'

// components
import { MainLayout, MainStateLayout, ViewLayout } from '@/components'

// views
import { ProductView } from '@/views'

// interfaces
import { IProduct } from '@/interfaces'

// database
import { dbProducts } from 'database'

export type ProductPageProps = InferGetServerSidePropsType<typeof getStaticProps>

const ProductPage = (props: ProductPageProps): ReactElement => {
    return <ProductView product={props.product} />
}

export default ProductPage

const getLayout = (page: ReactElement<ProductPageProps>): ReactElement => (
    <MainStateLayout>
        <MainLayout
            title={page.props.product?.title ?? ''}
            description={page.props.product?.description ?? ''}
        >
            <ViewLayout>{page}</ViewLayout>
        </MainLayout>
    </MainStateLayout>
)

ProductPage.getLayout = getLayout

export const getStaticPaths: GetStaticPaths = async () => {
    const slugs = await dbProducts.getAllProductSlug()

    return {
        paths: slugs.map(({ slug }) => ({
            params: {
                slug,
            },
        })),
        fallback: 'blocking',
    }
}

export const getStaticProps: GetStaticProps<{ product: IProduct | null }> = async (ctx) => {
    const { params } = ctx
    const { slug } = params as { slug: string }

    const product = await dbProducts.getProductBySlug(slug)

    if (!product) {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            },
        }
    }

    return {
        props: {
            product,
        },
        revalidate: 86400,
    }
}
