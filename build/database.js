"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Imports
const mongoose_1 = __importDefault(require("mongoose"));
const config_1 = __importDefault(require("./config/config"));
const alvarocabreradam_logit_1 = __importDefault(require("alvarocabreradam-logit"));
const log = new alvarocabreradam_logit_1.default('Mongo');
log.activate();
log.enableDate();
// Initialization
const dbOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
};
// Main
mongoose_1.default.connect(config_1.default.db.uri, dbOptions);
const connection = mongoose_1.default.connection;
connection.once('open', () => {
    log.success(`Connection stablished.`);
});
connection.on('error', (error) => {
    log.error(error);
    process.exit(0);
});
