"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Imports
const server_1 = __importDefault(require("./server"));
const alvarocabreradam_logit_1 = __importDefault(require("alvarocabreradam-logit"));
require("./database");
// Initializations
const log = new alvarocabreradam_logit_1.default('Main');
log.activate();
log.enableDate();
// Main
server_1.default.listen(server_1.default.get('port'));
log.warning(`Server start on port ${server_1.default.get('port')}.`);
