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
global.owner = process.env.OWNER_NUMBER || "+244956100349";
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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0NiMDlpU25qd29kd01HaUJ2V29BdUJldXR0Qzh6a1VieDNvV3Uxa3JWRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZGNOaEgrS1lpMk1ubW8vbVVJQytaSXN6b0pJNTBub21FMXJEYkR4SlZUYz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpSEZLbytPZ2l4aGxpcXdPdTNBTmlRY2UvVHpCckJFdnZwc3RseXljRWtFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0YlArS2FuR3I1QURqNGtrVTVQLzNJVzFqeXhRMXl6Y0dZMmpOZG1rU2w0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFIT3JvdXBqWGdPMnpyTHdnVHAxN1ZRV3hjT0ZzaXJ6UVp5MlcrZUNrSE09In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImI4TTBPeFNMK3FqNmVTdEhTbGx1ODQ3M3NUQnYyMjlobW5LaXJ3ZE9QU0k9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOEFLb0xPZGtrNU5ReUdjT3puYXB6dDg2NUVTMndJSUdjRnJ1a2xHaVBWdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK1ExYWtWUC9JQ0lINW9aSVpnc1NvYnovOXNXUXhmNHhxK2VnOHNYWGlIcz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdhNmFpVStiYlVlKzNPdXpTR1NhU2trb2dJeE5nTitaY24rOEYrK2RFbThlbW95dTZTYXhBdkxtQkFiRjZUb3laNlFFR2Y5cVpWbi9nZ0tPV0ljUmpRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTUzLCJhZHZTZWNyZXRLZXkiOiJnQUxHc21Gcktyelp6MnRFL3Rzb01Fa0toc3lERHpUMzF1WUt1K29oeWJBPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiI1QnFpREVMZlJWMjBfVzlDaVFSQlhnIiwicGhvbmVJZCI6IjY3M2M5ZTlhLTVkM2UtNDIxOS1iYWRiLTk3ZDJmYjJkODFhMyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxQTBOa0JwbzFrTmZ2ZGx5NFlOcjNHK0RtazQ9In0sInJlZ2lzdGVyZWQiOmZhbHNlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik5zTEpiZWpoclFLaE5wMmRtT3ZPT2VUMzV4cz0ifSwicmVnaXN0cmF0aW9uIjp7fSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ1B1d3lzc0lFS0NCdmJvR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InAzbHloSDNXaSt5dEhncy9aWlNXbWlIZVdMR2tadTl3ZlF2MU9BejZWalk9IiwiYWNjb3VudFNpZ25hdHVyZSI6IjJ0TTZpZXVFWkVzZEZ3VjAvNkNxRVBKWWlOdmwySFRnVkVRc2s2dTd2WGFwajFPVlJKN3dmSWU2UHNJYzk2V2dnU3QzWGNoa3hiTzNuK1ZoQmVkSWlRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJGVldmUDY5SDNjbkVLNUtxTitSMVk0SjdiTnozMVFJTVJiMTRFeVN0OVIwRjc5WE5Lc1B5OFFaMGdvUGtpQlFqeUxDSlhmbGJwZlVuakhFK1V6TmNqUT09In0sIm1lIjp7ImlkIjoiMjQyMDY5MjgzOTY2Ojg0QHMud2hhdHNhcHAubmV0IiwibGlkIjoiNDU2MjU4MjM0OTQyNTI6ODRAbGlkIn0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI0MjA2OTI4Mzk2Njo4NEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJhZDVjb1I5MW92c3JSNExQMldVbHBvaDNsaXhwR2J2Y0gwTDlUZ00rbFkyIn19XSwicGxhdGZvcm0iOiJpcGhvbmUiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNCSUlCUT09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTczMzI0NzE1MCwibGFzdFByb3BIYXNoIjoiM0FvU2hzIn0="
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
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
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
