import {Request,Response} from 'express'

import Photo from '../models/photo'
//Module to work with files
import fs from 'fs-extra'
//Path to obtain the path file
import path from 'path'


export async function createPhoto(req: Request,res:Response):Promise<Response>{
    //console.log(req.body)
    const { name, description, years, months } = req.body;

    const newDog = {
        name: name,
        description: description,
        years: years,
        months: months,
        pathPhoto: req.file.path
    }
    const photo = new Photo(newDog);
    //console.log(photo)
    await photo.save();
   return res.json({
       message: 'Foto guardada.',
       photo
   })
} 

export async function getPhotos(req: Request,res:Response): Promise<Response>{
    const photos = await Photo.find();
    return res.json(photos);
} 

export async function getPhoto(req: Request,res:Response): Promise<Response>{
    const photo = await Photo.findById(req.params.id);
    return res.json(photo);
} 

export async function updatePhoto(req: Request,res:Response): Promise<Response>{   
    const {name, description, years, months} = req.body;
    const updated = await Photo.findByIdAndUpdate(req.params.id , {
        name,
        description,
        years,
        months
    }, {new:true});
    return res.json({
        message: 'Actualizado.',
        updated
    })
} 

export async function deletePhoto(req: Request,res:Response): Promise<Response>{
    const photo = await Photo.findByIdAndRemove(req.params.id);
    if(photo){
        await fs.unlink(path.resolve(photo.pathPhoto))
    }
    return res.json({
        message: 'Foto eliminada.',
        photo
    })
} 