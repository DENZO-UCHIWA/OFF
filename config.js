//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "denzouchiwa@gmail.com";
global.location = "lakota, asia";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://sam:sam@cluster0.u1smxsv.mongodb.net/?retryWrites=true&w=majority";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Angola";
global.github = process.env.GITHUB || "https://github.com/DENZO-UCHIWA/BLAST-MD";
global.gurl = process.env.GURL || "";
global.website = process.env.GURL || "";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/ZdD3v42/5ef70435f18d5fb1.jpg";
global.devs = "https://t.me/DENZO_UCHIWA";
global.sudo = process.env.SUDO || "244956100349";
global.owner = process.env.OWNER_NUMBER || "244956100349";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://d.uguu.se/ArwETvsj.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQUlmQkxweS9hbzloVjI0c0pYUG5ZcWlIVXlFcUxiOFBpK3gzNlMwVXEwQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYVpiTXUyc0UxZUpEeXNINUpIR0J5MUU1MUVKUk9KZWxWZmdwTFh5b1RpQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrRk14TEVReVJpUFBhcmY5ZGtZNk9hWmdTMUVsZWQ0VnJQeGNZVjFCTEdNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJET1ZIbkFHKzcrUmJjeVViKzZ1azgwZ29WaERWd2dYTGdGbWlDTTgrUkhRPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlJN1VLSzdCbEd6RXU2emlmZUZuVDFRMVJxRFo2YTk5SVloNUZjNlFXMVk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjEwcmJCcFRCSm1rNkJ1Q0NUZG1KVWhWNVd4STc5NUVZQkRxYXNPeVpZUTg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0ltMllUeElGem42cmtnZHg5MllRSGtRRkRBMUtQTERrQktid1JabEFVdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWE5uN25BdHlyOGRqNUtUbDM2WG81UUNQUERtcy82eHVORDEwSThXa1RtST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjFJVG9LN3hUd3hEbnFHd3ZRemsrVXlyR3NyNU40Y0NEUkNLQlErYjJ3aThUdXpuSWcrT2RUU0F5Nko3S2ttR050K3JGWVZpbHllYTl1R1VUTkR4Mml3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTY0LCJhZHZTZWNyZXRLZXkiOiJOMlppVVp2bEgwcjB2REROM2ZyWFN6MXc0R1hYQWNiVFRlZi9BaDc0WE9jPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI0NDk3MjYxNTQ1OUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI5NEJDMDNBMUNGRUU3NzE5MTA0RDEzRDNDOTkzREMwQiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzM4MTg4NDI4fSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyNDQ5NzI2MTU0NTlAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiOEI1MkE3NzJGMEQxRTdBRkVBQkVGMjRGMzBBMUVGM0YifSwibWVzc2FnZVRpbWVzdGFtcCI6MTczODE4ODQyOH0seyJrZXkiOnsicmVtb3RlSmlkIjoiMjQ0OTcyNjE1NDU5QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkEwRjI1QTc0Q0U1RUMwQkRDMTc1MkU4MkVEQjRDQTgzIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MzgxODg0MzB9LHsia2V5Ijp7InJlbW90ZUppZCI6IjI0NDk3MjYxNTQ1OUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI1OUM0QTM2QUMyQTZGQUFGMDVBNEQ1M0FCNkZGNDI1NyJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzM4MTg4NDMwfV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJMSGFQeEFiblFwdUpoak4zN2tkZmdRIiwicGhvbmVJZCI6IjY1YjUwNzcwLTcxNzktNDUzZi04NjQyLWMxYmRjOTNlNzQxOSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI5c1VjT2F1cmdVdDVTeXhrWHh5Vk9lWFFNeUE9In0sInJlZ2lzdGVyZWQiOmZhbHNlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImRWRVFMbWhsL0xobWRNSDBZdWVNTU9EOGNXMD0ifSwicmVnaXN0cmF0aW9uIjp7fSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ05pNjhMMEVFUHpNNnJ3R0dBSWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InV0eTVVeU9BTGR1MnU0bWFrU3FnbDdpOVkvNG5JYmU5ZDlKSG9rMjYvZ009IiwiYWNjb3VudFNpZ25hdHVyZSI6ImNxR3F3UWlaOHhxa2VZd3hIdGM1Z01yVWVxbDNITXJqNG1aaGZFQVZTZE1oUnVIWWkxU2lQOXVLWnZxWWx2b1BEbGVIaHJkVTlWcDRhMnZ3K3AvNUJ3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJWUWxvRkxYR2c4WE5zcVUwM2lDTGJ1aWo2Z1d5TkJ2U2F5Q1NNZUhlaHFnT2Rqbkg5UHpONzMwUVBzaVJTN2dqK3l6Q0RjZFE4U3JBUFhuWW1tdEhnZz09In0sIm1lIjp7ImlkIjoiMjQ0OTcyNjE1NDU5OjJAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiIxNTk1NjMwMTc5MzY5NTM6MkBsaWQiLCJuYW1lIjoi8J2RqfCdkbPwnZGo8J2RuvCdkbsg8J2RqfCdkbbwnZG7In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI0NDk3MjYxNTQ1OToyQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmJyY3VWTWpnQzNidHJ1Sm1wRXFvSmU0dldQK0p5RzN2WGZTUjZKTnV2NEQifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBSUlFZz09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTczODE4ODQyNiwibGFzdFByb3BIYXNoIjoiMlY3N3FVIiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFNRGgifQ=="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`> 𝑩𝑳𝑨𝑺𝑻-𝑴𝑫 𝑩𝒀 𝑫𝑬𝑵𝒁𝑶-𝑼𝑪𝑯𝑰𝑾𝑨`",
  author: process.env.PACK_AUTHER || "BLAST-MD",
  packname: process.env.PACK_NAME || "DENZO-UCHIWA",
  botname: process.env.BOT_NAME || "BLAST-MD",
  ownername: process.env.OWNER_NAME || "DENZO-UCHIWA",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "229",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "BLAST-MD").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
