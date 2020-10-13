"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.conexion = void 0;
const mongoose_1 = require("mongoose");
async function conexion() {
    await mongoose_1.connect('mongodb://localhost/adoptiondb', {
        useNewUrlParser: true
    });
    console.log('DB connected');
}
exports.conexion = conexion;
