const nodemailer = require("nodemailer");

// Configuração do transporte de e-mail (use suas credenciais)
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER, // Defina isso no .env
    pass: process.env.EMAIL_PASS, // Defina isso no .env
  },
});

/**
 * Enviar e-mail de boas-vindas ao cliente
 */
async function enviarEmailBoasVindas(email, nome, numeroConta, agencia) {
  const mensagem = `
    Olá, ${nome}! Seja bem-vindo ao Infinity Bank! 🎉

    Sua conta foi criada com sucesso! Aqui estão seus dados bancários:
    
    📌 Agência: ${agencia}
    📌 Conta: ${numeroConta}
    
    Para começar a usar sua conta, é importante que você faça um depósito inicial. 
    Oferecemos várias formas para adicionar saldo à sua conta:
    
    ✅ Depósito via boleto bancário
    ✅ Transferência via TED ou PIX
    ✅ Depósito via lotéricas e caixas eletrônicos
    
    Acesse nosso app para mais detalhes e comece a movimentar sua conta!

    Atenciosamente,  
    Equipe Infinity Bank 🚀
  `;

  try {
    await transporter.sendMail({
      from: `"Infinity Bank" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "🚀 Bem-vindo ao Infinity Bank!",
      text: mensagem,
    });
    console.log(`✉️ E-mail de boas-vindas enviado para ${email}`);
  } catch (error) {
    console.error("❌ Erro ao enviar e-mail:", error);
  }
}

module.exports = { enviarEmailBoasVindas };
