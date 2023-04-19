import mongoose, { Model, Schema } from 'mongoose'

import { IProduct as Product } from '../src/interfaces'

export type IProduct = Product

const productSchema = new Schema(
    {
        slug: { type: String, require: true, unique: true },
        description: { type: String, require: true },
        images: [{ type: String, require: true }],
        inStock: { type: Number, require: true, default: 0 },
        price: { type: Number, require: true, default: 0 },
        title: { type: String, require: true },
        tags: [{ type: String, require: true }],
        gender: {
            type: String,
            enum: {
                values: ['men', 'women', 'kid', 'unisex'],
                message: '{VALUE} no es un genero permitido',
            },
            default: 'unisex',
        },
        sizes: [
            {
                type: String,
                enum: {
                    values: ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
                    message: '{VALUE} no es un tamaño permitido',
                },
                default: 'M',
            },
        ],
        type: {
            type: String,
            enum: {
                values: ['shirts', 'pants', 'hoodies', 'hats'],
                message: '{VALUE} no es un tipo permitido',
            },
            default: 'shirts',
        },
    },
    {
        timestamps: true,
    }
)

productSchema.index({ title: 'text', tags: 'text' })

const ProductModel: Model<IProduct> =
    mongoose.models.Product || mongoose.model('Product', productSchema)

export default ProductModel
