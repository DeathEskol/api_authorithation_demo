// Imports
import mongose, { ConnectionOptions } from 'mongoose'
import config from './config/config'
import Logit from 'alvarocabreradam-logit';
const log: Logit = new Logit('Mongo');
log.activate();
log.enableDate();

// Initialization
const dbOptions : ConnectionOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}

// Main
mongose.connect(config.db.uri, dbOptions)

const connection = mongose.connection;

connection.once('open', () => {
    log.success(`Connection stablished.`);
})

connection.on('error', (error) => {
    log.error(error);
    process.exit(0)
})