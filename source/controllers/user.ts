// Imports
import { Request, Response } from 'express'
import User, { UserInterface } from '../models/user'
import jwt from 'jsonwebtoken'
import config from '../config/config'

// Functions
function generateToken(user: UserInterface) {
    return jwt.sign({ id: user.id, email: user.email }, config.jwtScret)
}

// Exports
export const singUp = async (request: Request, response: Response): Promise<Response> => {

    if (!request.body.email || !request.body.password) {
        return response.status(400).json({msg: 'Please, send your email and password.'})
    }

    if (await User.findOne({ email: request.body.email })) return response.status(400).json({ msg: 'This email is already in use.' })

    const user = new User(request.body)
    await user.save();

    return response.status(200).json(user)

}

export const singIn = async (request: Request, response: Response) => {
    if (!request.body.email || !request.body.password) return response.status(400).json({ msg: 'Please, send your email and password.' })
    const user = await User.findOne({ email: request.body.email })
    if (!user) return response.status(400).json({ msg: 'This email is not in use.' })
    if (await user.comparePassword(request.body.password)) return response.status(200).json({token: generateToken(user)})
    return response.status(400).json({ msg: 'This email or password are incorrect.' })
}