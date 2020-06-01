// Imports
import express from 'express'
import morgan from 'morgan'
import auth from './routes/auth'
import test from './routes/test'
import passport from 'passport'
import passportMiddleware from './middlewares/passport'

// Initializations
const app = express()

// Settings
app.set('port', process.env.PORT || 3000 )

// Middlewares
app.use(morgan('dev'))
app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(passport.initialize())
passport.use(passportMiddleware)

// Routes
app.get('/', (request, response) => {
    response.send(`The API is at http://localhost:${app.get('port')}`)
});

app.use(auth)
app.use(test)

// Export
export default app;