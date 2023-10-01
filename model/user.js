import db from '../database/index.js';

const userSchema = db.Schema(
  {
    nome: { type: String, required: true },
    email: { type: String, required: true },
    senha: { type: String, required: true },
    foto: String,
  },
  {
    timestamps: true, // cria os campos createdAt e updatedAt
  }
)

const User = db.model("Usuario", userSchema);

export default User;

