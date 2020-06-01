"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Imports
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const auth_1 = __importDefault(require("./routes/auth"));
const test_1 = __importDefault(require("./routes/test"));
const passport_1 = __importDefault(require("passport"));
const passport_2 = __importDefault(require("./middlewares/passport"));
// Initializations
const app = express_1.default();
// Settings
app.set('port', process.env.PORT || 3000);
// Middlewares
app.use(morgan_1.default('dev'));
app.use(express_1.default.urlencoded({ extended: false }));
app.use(express_1.default.json());
app.use(passport_1.default.initialize());
passport_1.default.use(passport_2.default);
// Routes
app.get('/', (request, response) => {
    response.send(`The API is at http://localhost:${app.get('port')}`);
});
app.use(auth_1.default);
app.use(test_1.default);
// Export
exports.default = app;
