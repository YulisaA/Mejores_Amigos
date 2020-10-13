"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPhotos = exports.createPhoto = void 0;
function createPhoto(req, res) {
    console.log('prueba');
    console.log(req.body);
    return res.json({
        message: 'Foto guardada.'
    });
}
exports.createPhoto = createPhoto;
function getPhotos(req, res) {
}
exports.getPhotos = getPhotos;
