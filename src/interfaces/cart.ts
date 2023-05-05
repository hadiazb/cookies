import { ISize } from '.'

export interface ICartProduct {
    _id: string
    images: string
    price: number
    slug: string
    title: string
    gender: 'men' | 'women' | 'kid' | 'unisex'
    quantity: number
    size?: ISize
}
