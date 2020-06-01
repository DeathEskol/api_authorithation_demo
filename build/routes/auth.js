"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Imports
const express_1 = require("express");
const user_1 = require("../controllers/user");
// Initializations
const router = express_1.Router();
// Routes
router.post('/singup', user_1.singUp);
router.post('/singin', user_1.singIn);
// Exports
exports.default = router;
