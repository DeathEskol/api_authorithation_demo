// Imports
import app from './server'
import Logit from 'alvarocabreradam-logit';
import './database'

// Initializations
const log: Logit = new Logit('Main');
log.activate();
log.enableDate();

// Main
app.listen(app.get('port'));
log.warning(`Server start on port ${app.get('port')}.`);