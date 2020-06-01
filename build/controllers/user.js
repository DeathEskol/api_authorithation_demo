"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = __importDefault(require("../models/user"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = __importDefault(require("../config/config"));
// Functions
function generateToken(user) {
    return jsonwebtoken_1.default.sign({ id: user.id, email: user.email }, config_1.default.jwtScret);
}
// Exports
exports.singUp = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    if (!request.body.email || !request.body.password) {
        return response.status(400).json({ msg: 'Please, send your email and password.' });
    }
    if (yield user_1.default.findOne({ email: request.body.email }))
        return response.status(400).json({ msg: 'This email is already in use.' });
    const user = new user_1.default(request.body);
    yield user.save();
    return response.status(200).json(user);
});
exports.singIn = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    if (!request.body.email || !request.body.password)
        return response.status(400).json({ msg: 'Please, send your email and password.' });
    const user = yield user_1.default.findOne({ email: request.body.email });
    if (!user)
        return response.status(400).json({ msg: 'This email is not in use.' });
    if (yield user.comparePassword(request.body.password))
        return response.status(200).json({ token: generateToken(user) });
    return response.status(400).json({ msg: 'This email or password are incorrect.' });
});
