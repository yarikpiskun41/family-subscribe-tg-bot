import bot from "./botConfiguration.js";

bot.onText(/\/echo (.+)/, (msg, match) => {
  bot.sendMessage(chatId, resp);
});
