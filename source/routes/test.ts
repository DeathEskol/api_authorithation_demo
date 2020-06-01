// Imports
import { Router } from 'express'
import passport from 'passport'

// Initializations
const router = Router()

router.get('/test', passport.authenticate('jwt', { session: false }), (request, response) => {
    response.send('Test');
})

// Exports
export default router