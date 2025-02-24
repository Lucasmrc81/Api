const mongoose = require("mongoose");

const TransactionSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  tipo: String, // "deposito", "saque", "transferencia"
  valor: Number,
  data: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Transaction", TransactionSchema);
