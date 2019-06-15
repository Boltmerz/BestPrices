import express from 'express';
import db from './app/dataAccess/mongo';
import config from './app/config';

const app = express();

try {
    db.connect();
    app.listen(config.port,(error,address) =>{
        if(error) console.log(error);
        console.log(`Server connected ${address}:${config.port}...`)
    })    
} catch (error) {
    
}