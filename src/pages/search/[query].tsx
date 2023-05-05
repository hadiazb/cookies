import { ReactElement } from 'react'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'

import { MainLayout, MainStateLayout, ViewLayout } from '@/components'
import { SearchView } from '@/views'

// models
import { IProduct } from 'models'

// database
import { dbProducts } from 'database'

export type SearchPageProps = InferGetServerSidePropsType<typeof getServerSideProps>

const SearchPage = ({ products, query, fountProducts }: SearchPageProps): ReactElement => {
    return (
        <SearchView
            title={`Resultados de: ${query}`}
            subtitle={`${query}`}
            products={products}
            fountProducts={fountProducts}
        />
    )
}

export default SearchPage

const getLayout = (page: ReactElement): ReactElement => (
    <MainStateLayout>
        <MainLayout
            title={`Resultados de: ${page.props.query}`}
            description={`Buscando: ${page.props.query}`}
        >
            <ViewLayout>{page}</ViewLayout>
        </MainLayout>
    </MainStateLayout>
)

SearchPage.getLayout = getLayout

export const getServerSideProps: GetServerSideProps<{
    products: IProduct[]
    query: string
    fountProducts: boolean
}> = async (ctx) => {
    const { params } = ctx
    const { query = '' } = params as { query: string }

    if (query.length === 0) {
        return {
            redirect: {
                destination: '/',
                permanent: true,
            },
        }
    }

    try {
        let products = await dbProducts.searchProducts(query)
        const fountProducts = products.length > 0

        if (fountProducts) {
            return {
                props: {
                    products,
                    query,
                    fountProducts,
                },
            }
        }

        products = await dbProducts.getAllProducts()

        return {
            props: {
                products,
                query,
                fountProducts,
            },
        }
    } catch (error) {
        return {
            props: {
                products: [],
                query,
                fountProducts: false,
            },
        }
    }
}
