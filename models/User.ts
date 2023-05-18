import mongoose, { Model, Schema } from 'mongoose'

import { IUser } from '@/interfaces'

const userSchema = new Schema(
    {
        name: {
            type: String,
            require: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            require: true,
        },
        role: {
            type: String,
            enum: {
                values: ['admin', 'client'],
                message: '{VALUE} no es valido',
                default: 'client',
                required: true,
            },
        },
    },
    {
        timestamps: true,
    }
)

const User: Model<IUser> = mongoose.models.User || mongoose.model('User', userSchema)

export default User
