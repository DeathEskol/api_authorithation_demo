// Imports
import { Router } from 'express'
import { singUp, singIn } from '../controllers/user'

// Initializations
const router = Router()

// Routes
router.post('/singup', singUp)
router.post('/singin', singIn)

// Exports
export default router