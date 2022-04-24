import express from 'express';
import 'reflect-metadata';
import { createConnection } from "typeorm";
import cors from 'cors';

import {apiRouter} from "./routes/apiRouter";

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(cors());

app.use(apiRouter);

app.listen(5200, async () => {
    console.log("Server  has started")
    try {
        const connection = await createConnection();
        if (connection) {
            console.log('DATABASE Connect');
        }
    }catch (e) {
        console.log(e);
    }
})
