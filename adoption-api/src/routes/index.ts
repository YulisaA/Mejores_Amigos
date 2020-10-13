import {Router} from 'express';
import { createPhoto, updatePhoto, deletePhoto, getPhotos, getPhoto } from '../controllers/photo.controller';
import multer from '../libraries/multer'
const router = Router();

//Routes definition
//Main route
router.route('/dogs')
    .post(multer.single('photo'),createPhoto)
    .get(getPhotos)

//Route to obtain a single object
router.route('/dogs/:id')
    .get(getPhoto)
    .put(updatePhoto)
    .delete(deletePhoto)

export default router;