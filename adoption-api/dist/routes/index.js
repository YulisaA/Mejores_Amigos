"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const photo_controller_1 = require("../controllers/photo.controller");
const multer_1 = __importDefault(require("../libraries/multer"));
const router = express_1.Router();
//Routes definition
//Main route
router.route('/photos')
    .post(multer_1.default.single('photo'), photo_controller_1.createPhoto)
    .get(photo_controller_1.getPhotos);
exports.default = router;
