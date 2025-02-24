const Account = require("../models/Account");
const User = require("../models/User");
const { enviarEmailBoasVindas } = require("./emailController");

exports.criarConta = async (req, res) => {
  const { userId } = req.body;

  try {
    const usuario = await User.findById(userId);
    if (!usuario) {
      return res.status(404).json({ error: "Usuário não encontrado" });
    }
    if (usuario.aprovado) {
      return res.status(400).json({ error: "Usuário já possui uma conta" });
    }

    const numeroConta = Math.floor(
      10000000 + Math.random() * 90000000
    ).toString();
    const agencia = "0001"; // Agência fixa

    const novaConta = new Account({ userId, numeroConta, agencia, saldo: 0 });
    await novaConta.save();

    // Atualiza o usuário com a conta criada
    usuario.aprovado = true;
    usuario.accountId = novaConta._id;
    await usuario.save();

    // Enviar e-mail de boas-vindas
    await enviarEmailBoasVindas(
      usuario.email,
      usuario.nome,
      numeroConta,
      agencia
    );

    res.json({
      success: true,
      message: `Conta criada com sucesso! Agência: ${agencia}, Conta: ${numeroConta}. Agora é só depositar e começar a movimentar sua conta!`,
      numeroConta,
      agencia,
    });
  } catch (error) {
    console.error("Erro ao criar conta:", error);
    res.status(500).json({ error: "Erro interno do servidor" });
  }
};
