import {Schema, model, Document} from 'mongoose';

const schema=new Schema({
    name: String,
    description: String,
    years: String,
    months: String,
    pathPhoto: String
});

interface IPhoto extends Document {
    name: string;
    description: string;
    years: string;
    months: string;
    pathPhoto: string;
}

export default model<IPhoto>('Photo', schema);