const mongoose = require("mongoose");

const AccountSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  agencia: { type: String, required: true, default: "0001" }, // Sempre "0001"
  numeroConta: { type: String, required: true, unique: true },
  saldo: { type: Number, default: 0 },
});

module.exports = mongoose.model("Account", AccountSchema);
