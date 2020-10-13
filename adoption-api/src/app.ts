import express from 'express'
import morgan from 'morgan'
import path from 'path'
import cors from 'cors'

const app = express();

import indexRoutes from './routes/index'

//settings
app.set('port', process.env.PORT || 4000);

//middlewares
app.use(morgan('dev'));
app.use(cors());

//Configure json files
app.use(express.json());

//routes
app.use('/api', indexRoutes);

//Folder "public" to save images
//Resolve to get full path
app.use('/public', express.static(path.resolve('public')));

export default app;