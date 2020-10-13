import {connect} from 'mongoose';

export async function conexion(){
    await connect('mongodb://localhost/adoptiondb', {
        useNewUrlParser: true
    });
    console.log('DB connected');
}
