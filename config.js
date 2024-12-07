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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0xIYi9jZ1AxNU1BODJQTi92TGhyNHgvTWMyTjhKbnJtVFduR1pPYUNWdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiakJTQUUrcGFzdlkwc2E0a1JpTGVFdEpEb3RwdzMvcHNYTi9zeG9FY3dtcz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwSlBia3Z6bE5udDhMalkwQ3NLTE9Cbzl5TDVyandKb1ZiL0xwY2JELzJnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ4aVB6eHNHZUpuRjRCNzBlaDAzLzV4Unp5cGVSNnVQOHVkRFB0bFQ2V0M0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBGY1RrMW04ckViWnJxTUw3T0JBbTdhcnRQOFdOWlB3NFdzTWFkQjV3bUE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Inl6QTBjTmpZOVRDaDVjWjd1b1NDeThMSzgxME5DaGtERHcxai9KMWVRRDg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUhxZFRzSFBSbkdkYklabCtES3ExcDhVUkxrbTBPNWdnQ3BFak94cnRYaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaHZRTDFPSnFvdk80bVBTSHNjK3cwZVBoaS9sbnNBK0NRZ1pvR0Zua01sUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlhdU9GVENremhGTjVoMU1wa09aaHNydWFRTzNBckFER01wL0Q5ck90MTByOWZ2dEdrM3NQdFh2UWdMRGdNNUhWL1hISlZveU82UFk0cjUwcThIMkFnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTQ0LCJhZHZTZWNyZXRLZXkiOiJLeGtJKzdaanpmbDFhbDNLVkFSdmlWSGkxTmVkbVk1eStwOTBrY2FIQWFFPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI0NDk0NjcwMjgxNEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJCRjNFMDY3MzlENThFODU4M0E3NTc1RkY5NkU0QTIxQSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzMzNTIwNTk1fSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyNDQ5NDY3MDI4MTRAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQjRFMDc4OTI1RUY5ODIyNjIzRThDQjY0RTQwNEMxMDUifSwibWVzc2FnZVRpbWVzdGFtcCI6MTczMzUyMDU5NX1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoicUl6UWJXMTFTYW14YzVtWWp4WVkwZyIsInBob25lSWQiOiIwOTZjZGJjMS0yNTVhLTRiYjAtYjc2MC0zNDFjMmY1NTRjZmYiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0ZNa0M3UnMwZkV4WktHU0JlUCt2dUd6eXR3PSJ9LCJyZWdpc3RlcmVkIjpmYWxzZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlNWs4cjkrcE5YUFEwUGdEeFppa0FFVWdIdGc9In0sInJlZ2lzdHJhdGlvbiI6e30sImFjY291bnQiOnsiZGV0YWlscyI6IkNPTDg2ZGNERU1UWnpib0dHQUlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJXRnN4MjFEYllJejRLMjdTTHJKVGhMUmZwc2Vac2RIME5hRmNZWjZ4d2lvPSIsImFjY291bnRTaWduYXR1cmUiOiJhaVhxMjlpUHI2VnBIMDAwSTlaQkZGMmJsZ0JvMXIxU3FzTnNuUjI1WHdWeUIxenQ2VmF0L29ub1RuVUZnSS9NSjYwclpBTXV3ZzFBTTNJcVRlQTBBZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiT0k4eTQwZmZ1eXdFZjJQM3lhamxCbmFtc3hXYWQ2QmY1UGQ1dFNFQld3Nlp0VUwwazgycXYzK1hOT1UyL1BwVXpSM3FvZERQRXpLVkp6MUZaa2FaREE9PSJ9LCJtZSI6eyJpZCI6IjI0NDk0NjcwMjgxNDoxMkBzLndoYXRzYXBwLm5ldCIsImxpZCI6IjExODEwNzgwOTAyNjA4NDoxMkBsaWQiLCJuYW1lIjoi6qeB4oGj4LyS8JOGqfCdkazwnZGr8J2Rs/CdkajwnZKAIPCdkarwnZGo8J2RufCdkbvwnZGs8J2RueqngiJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNDQ5NDY3MDI4MTQ6MTJAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVmhiTWR0UTIyQ00rQ3R1MGk2eVU0UzBYNmJIbWJIUjlEV2hYR0dlc2NJcSJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0EwSUNBPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzMzNTIwNTkzLCJsYXN0UHJvcEhhc2giOiJpRWFaMSIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBTW82In0="
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
