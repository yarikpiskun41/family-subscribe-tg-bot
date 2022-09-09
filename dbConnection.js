import mongoose from "mongoose";
import {config} from "dotenv";
config()


mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.kr1vb.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`)
let db = mongoose.connection

let messageSchema = new mongoose.Schema({
  nick: String,
  message: String,
  timestamp: Number
})

let Message = mongoose.model('Message', messageSchema);

db.on('error', console.error.bind(console, 'connection error:'));