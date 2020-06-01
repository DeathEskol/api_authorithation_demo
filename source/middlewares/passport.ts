// Imports
import { Strategy, ExtractJwt, StrategyOptions } from 'passport-jwt'
import config from '../config/config'
import User from '../models/user'
import Logit from 'alvarocabreradam-logit';

// Initializations
const log: Logit = new Logit('Mongo');
log.activate();
log.enableDate();

const options : StrategyOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: config.jwtScret
}

export default new Strategy(options, async (payload, done) => {
    try {
        const user = await User.findById(payload.id)
        if (user) return done (null, user)
        return done(null, false)
    } catch (error) {
        log.error(error);
    }
})