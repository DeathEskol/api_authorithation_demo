"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Imports
const express_1 = require("express");
const passport_1 = __importDefault(require("passport"));
// Initializations
const router = express_1.Router();
router.get('/test', passport_1.default.authenticate('jwt', { session: false }), (request, response) => {
    response.send('Test');
});
// Exports
exports.default = router;
