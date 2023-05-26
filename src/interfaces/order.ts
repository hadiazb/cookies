import { ISize, IUser } from './'

export interface IOrder {
    _id?: string
    user?: IUser | string
    orderItems: IOrderItem[]
    shippingAddress: ShippingAddress
    paymentResult?: string
    numberOfItems: number
    subTotal: number
    tax: number
    total: number
    isPaid: boolean
    paidAt?: string
    transactionId?: string
}

export interface IOrderItem {
    _id: string
    images: string
    price: number
    slug: string
    title: string
    gender: 'men' | 'women' | 'kid' | 'unisex'
    quantity: number
    size?: ISize
}

export interface ShippingAddress {
    firstName: string
    lastName: string
    address: string
    address2?: string
    zip: string
    city: string
    country: string
    phone: string
}
