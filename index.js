import express from "express";
import cookieParser from "cookie-parser";
import path from "path";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.set('view engine', 'ejs');

app.use(express.static("public"));



app.get('/', (req, res) => {
    res.send('APNP ✨');
})

app.listen(3000, () => {
    console.log('APNP rodando na porta 3000');
})