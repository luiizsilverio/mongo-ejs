import User from "../model/user.js";

export default class UsersController {

  async index(req, res) {
    const usuarios = await User.find();
    res.render('index.ejs', { usuarios });
  }

  async viewAdd(req, res) {
    res.render("add-usuario.ejs");
  }

  async viewEdit(req, res) {
    let usuario;
    try {
      usuario = await User.findById(req.params.id);
      if (usuario) {
        res.render("edit-usuario.ejs", { usuario });
      } else {
        return res.send('Usuário não encontrado');
      }
    }
    catch (err) {
      return res.send('Erro ao localizar usuário');
    }
  }

  async add(req, res) {
    const { txtNome: nome, txtEmail: email, txtSenha: senha } = req.body;
    const foto = req.file.filename;

    const usuario = new User({
      nome,
      email,
      senha,
      foto,
    })

    try {
      await usuario.save();
      res.redirect('/');
    }
    catch (err) {
      console.log(err);
      return res.send('Erro ao adicionar usuário');
    }
  }

  async edit(req, res) {
    const { txtId: id, txtNome: nome, txtEmail: email, txtSenha: senha } = req.body;
    const foto = req.file.filename;

    const usuario = new User({
      id,
      nome,
      email,
      senha,
      foto,
    })

    try {
      await User.findByIdAndUpdate(
        id,
        usuario
      )
      res.redirect('/');
    }
    catch (err) {
      console.log(err);
      return res.send('Erro ao alterar usuário');
    }
  }

  async delete(req, res) {
    try {
      await User.findByIdAndDelete(req.params.id);
      res.redirect('/');
    }
    catch (err) {
      console.log(err);
      return res.send('Erro ao excluir usuário');
    }
  }

  async find(req, res) {
    const { txtPesquisa: pesquisa } = req.body;
    try {
      const usuarios = await User.find({
        nome: new RegExp(pesquisa, 'i')
      });

      res.render('index.ejs', { usuarios });
    }
    catch (err) {
      console.log(err);
      return res.send('Erro ao buscar usuário');
    }
  }

}

