// Imports
import { model, Schema, Document } from 'mongoose'
import bcrypt from 'bcrypt'

// Initializations
const userSchema = new Schema({
    email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    }
},{ collection : 'MyNewName'})
//How to force name collection
//https://mongoosejs.com/docs/guide.html#collection

// Methods
userSchema.pre<UserInterface>('save', async function (next) {
    if (!this.isModified('password')) return next()
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(this.password, salt)
    this.password = hash
    next()
})

userSchema.methods.comparePassword = async function (password: string): Promise<boolean> {
    return await bcrypt.compare(password, this.password);
}

// Exports
export default model<UserInterface>('User', userSchema)
export interface UserInterface extends Document {
    email: string,
    password: string,
    comparePassword: (password: string) => Promise<boolean>
}
