const express = require("express");
const router = express.Router();
const Account = require("../models/Account"); // Certifique-se de que o modelo está correto
const User = require("../models/User");
const { enviarEmailBoasVindas } = require("../controllers/emailController");

// Criar conta bancária quando aprovado
router.post("/criar-conta", async (req, res) => {
  const { userId } = req.body;
  try {
    const usuario = await User.findById(userId);
    if (!usuario || usuario.aprovado)
      return res.status(400).json({ error: "Usuário inválido ou já aprovado" });

    const numeroConta = Math.floor(
      10000000 + Math.random() * 90000000
    ).toString();
    const agencia = "0001"; // Agência fixa

    const novaConta = new Account({ userId, numeroConta, agencia, saldo: 0 });
    await novaConta.save();

    usuario.aprovado = true;
    await usuario.save();

    // Enviar e-mail de boas-vindas
    await enviarEmailBoasVindas(
      usuario.email,
      usuario.nome,
      numeroConta,
      agencia
    );

    res.json({ success: true, message: "Conta criada!", numeroConta, agencia });
  } catch (error) {
    console.error("Erro ao criar conta:", error);
    res.status(500).json({ error: "Erro interno do servidor" });
  }
});

module.exports = router;
