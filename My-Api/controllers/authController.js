const bcrypt = require("bcryptjs");
const User = require("../models/User");

exports.cadastrarUsuario = async (req, res) => {
  const {
    nome,
    cpf,
    dataNascimento,
    telefone,
    email,
    cep,
    rua,
    complemento,
    renda,
    senha,
  } = req.body;

  const hashedSenha = await bcrypt.hash(senha, 10);
  const novoUsuario = new User({
    nome,
    cpf,
    dataNascimento,
    telefone,
    email,
    cep,
    rua,
    complemento,
    renda,
    senha: hashedSenha,
  });

  await novoUsuario.save();
  res.json({
    success: true,
    message: "Usuário cadastrado! Aguarde aprovação.",
  });
};
