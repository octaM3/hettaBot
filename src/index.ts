import tmi from "tmi.js";
import "dotenv/config";

const client = new tmi.Client({
  options: { debug: true },
  identity: {
    username: process.env.BOT_USERNAME!,
    password: `oauth:${process.env.OAUTH_TOKEN}`
  },
  channels: [process.env.CHANNEL!]
});

client.connect();

client.on("connected", () => {
  console.log("🤖 Bot conectado a Twitch");
});

client.on("message", (channel, tags, message, self) => {
  if (self) return;

  const msg = message.toLowerCase();

  if (msg === "!hola") {
    client.say(channel, `Hola @${tags.username} 👋`);
  }
});