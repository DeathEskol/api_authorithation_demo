"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    db: {
        uri: process.env.MONGO_URI || 'mongodb://localhost/test',
        user: '',
        password: ''
    },
    jwtScret: process.env.JWT_Secret || 'Q2FyYWNvbCBjYXJhY29saWxlcm8='
};
