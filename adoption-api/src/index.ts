import app from './app';
import {conexion} from './db'

app.listen(app.get('port'),() => {
    conexion();
    console.log('Server on port', app.get('port'));
})