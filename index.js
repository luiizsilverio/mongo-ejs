import express from "express";
import cookieParser from "cookie-parser";
// import path from "path";
// import ejs from "ejs";

const app = express();

app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.set('view engine', 'ejs');
// server.set('views', path.join(__dirname, 'views'))

app.use(express.static("public"));

app.get('/', (req, res) => {
    res.render('index.ejs', {});
})

app.get('/usuarios', (req, res) => {
    res.render('users.ejs', { usuarios: [
      {nome: 'Diego', email: 'diego@gmail.com'},
      {nome: 'Maria', email: 'maria@gmail.com'},
      {nome: 'Tereza', email: 'tereza@gmail.com'},
      {nome: 'Ana', email: 'ana@gmail.com'},
      {nome: 'Luiz', email: 'luiz@gmail.com'},
      {nome: 'José', email: 'jose@gmail.com'}
    ] });
})

app.listen(3000, () => {
    console.log('APNP rodando na porta 3000');
})
