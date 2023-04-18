import mongoose, { Model, Schema } from 'mongoose'

import { IProduct as Product } from '../src/interfaces'

export type IProduct = Product

const productSchema = new Schema({
    slug: { type: String, require: true },
    description: { type: String, require: true },
    images: { type: [String], require: true },
    inStock: { type: Number, require: true },
    price: { type: Number, require: true },
    title: { type: String, require: true },
    tags: { type: [String], require: true },
    gender: {
        type: String,
        enum: {
            values: ['men', 'women', 'kid', 'unisex'],
            message: '{VALUE} no es un estado permitido',
        },
        default: 'unisex',
    },
    sizes: {
        type: [String],
        enum: {
            values: ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
            message: '{VALUE} no es un estado permitido',
        },
        default: 'M',
    },
    type: {
        type: String,
        enum: {
            values: ['shirts', 'pants', 'hoodies', 'hats'],
            message: '{VALUE} no es un estado permitido',
        },
        default: 'shirts',
    },
})

const ProductModel: Model<IProduct> =
    mongoose.models.Product || mongoose.model('Product', productSchema)

export default ProductModel
