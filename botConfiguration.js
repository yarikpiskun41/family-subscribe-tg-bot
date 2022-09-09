import TelegramBot from "node-telegram-bot-api";
import {config} from "dotenv";
config()

const bot = new TelegramBot(process.env.TOKEN, {
  webHook: {
    port: process.env.PORT || 8080,
  }
})

bot.setWebHook(`${process.env.WEB_HOOK_URL}/bot${process.env.TOKEN}`)

export default bot