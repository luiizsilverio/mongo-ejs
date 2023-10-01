// const mongoose = require("mongoose");
import mongoose from "mongoose";

const url = `mongodb://localhost:27017/apnp`;

mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 5000  // timeout de 5 seg
});

export default mongoose;
