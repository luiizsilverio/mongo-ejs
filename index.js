import express from "express";
import cookieParser from "cookie-parser";

import db from './database/index.js';
import routes from "./routes/index.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.set('view engine', 'ejs');

app.use(express.static("public"));

app.use(routes);


db.connection.once('open', () => {
  console.log("Banco apnp conectado com sucesso");
});

app.listen(3000, () => {
    console.log('APNP rodando na porta 3000');
})
