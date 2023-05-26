import { ICartProduct } from '@/interfaces'

export const productsLength = (products: ICartProduct[]): number =>
    products.reduce((p, acc) => p + acc.quantity, 0)

export const applyInterestRate = (products: ICartProduct[], interestRate: number): number =>
    (totalPrice(products) * interestRate) / 100

export const totalPrice = (products: ICartProduct[]): number =>
    products.reduce((acc, current) => acc + current.quantity * current.price, 0)
