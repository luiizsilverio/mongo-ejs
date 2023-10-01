import express from "express";
import cookieParser from "cookie-parser";
import User from "./model/user.js";
import db from './database/index.js';

// import path from "path";
// import ejs from "ejs";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.set('view engine', 'ejs');
// server.set('views', path.join(__dirname, 'views'))

app.use(express.static("public"));

app.get('/', (req, res) => {
    res.render('index.ejs', {});
})

app.get('/add', (req, res) => {
    res.render("add-user.ejs");
})

app.post('/add', async (req, res) => {
  const { txtNome: nome, txtEmail: email, txtSenha: senha, txtFoto: foto } = req.body;
  const usuario = new User({
    nome,
    email,
    senha,
    foto,
  })

  try {
    const newUser = await usuario.save();

    res.redirect('/');
  }
  catch (err) {
    console.log(err);
  }
})

db.connection.once('open', () => {
  console.log("Banco apnp conectado com sucesso");
});

app.listen(3000, () => {
    console.log('APNP rodando na porta 3000');
})
