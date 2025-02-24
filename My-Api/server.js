require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

// Conectar ao MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB conectado!"));

// Importar rotas
const authRoutes = require("./routes/authRoutes");
const accountRoutes = require("./routes/accountRoutes");
const { enviarEmailBoasVindas } = require("./controllers/emailController");

app.use("/auth", authRoutes);
app.use("/account", accountRoutes);

app.listen(3000, () => console.log("🚀 Servidor rodando na porta 3000"));
