//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "maxwellexcel2@gmail.com";
global.location = "Imo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "true";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/hakisolos/Nikka-v3";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/bh2fpj.jpg";
global.devs = "2348121373516";
global.sudo = process.env.SUDO || "2348159217138";
global.owner = process.env.OWNER_NUMBER || "2348159217138";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/zdD9xsf.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://nikkapair.onrender.com/pair";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOExFUnVPODZlMFV5SG1kTCtNam41Q29uMVZFc1VHYWJudHFkYWMyRHgyUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT29mVDJ0dlJPK3poTytJc2cvbWYrSWw0c1RwbEFRNWU2a3V3aFoxaURrND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBQnZFRXNsOTVNdkZ5d1Q1UUJRYXY0ZVhyVzdETXllY2hsTTVBYzhpcEZBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZTXdoVytlWmN6Sy9oWGJhNjlFZEp5Rk9HWDVIQ1UwcEVZSk9BUlFrSFhVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlVLNDBiREIzQldrVFViTWpUTDViY1RKRVlnVlExU25WYTJqeUlyWFg5RnM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlgyRDdaRmNHcmNPNlE3VGIzb1ZneEtrYXdIak9lbGduUG9VZjFKaWNlbkk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQUR3bWl3ck4wZitjUTFGeG4yeHdHcWJ4WkNCU0hhd25DdGxWallZQzVVbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieFc0Mzd2Q0FBNkN1RlF1UkJiMlc0TzJwRFRUK2t2SEozWTdIT3FCOW54WT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlgrQm42enFHYnJwMGsrcExrQjdsRFpyVmdSakFlUTNnUnFTMmNsWkFDMG50MGJmMWhQN2wwYTRtSW85ck56RzBXVXh5b2lQUlVMTlRhVEc2dWlicGlBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTUwLCJhZHZTZWNyZXRLZXkiOiJTR2VWY3YrQmw5Sm1iSVRra0pNUVkyWnlSeHR3OTZtYTZDNUJZOURDRW9jPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJKOXNWWXlfM1RLZVMzbzgwMVNERlZBIiwicGhvbmVJZCI6IjVjYWFhZjU5LWM1ZTAtNDgxMS04NjhiLWRiYjcyODU3YzI3ZSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJydDVHMnpSeE5seXVOakg1ZEhYWitabUpTSkE9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicHMvb09nODZtdEZuSHc5RFpKM0MxWFBRZkFvPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjVYTTZaSDMzIiwibWUiOnsiaWQiOiIyMzQ4MTU5MjE3MTM4OjE2QHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNPTGw0SmdCRUx2YjRyb0dHQVlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiI1R0tMNzEvdG9VRHVJNHVUdFZXNjVPazM2T1REOXBMQUFaMnBhbERXSlZ3PSIsImFjY291bnRTaWduYXR1cmUiOiJJNTZYUzVKMGsrQitydzkzLzdkb2FjWHdYVHUyZzFqNStqZWtSWjVxVnlBVjQwV0ZvOXl3RmxneVRPMjRRcENDVHkwM0p4UXhKczVTeVNUMGNGY1JDUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiMTRZdzlEaXFldTJhVXRuc3RrcFAzWEJlMWtwak9ReDkrTVVxU2ptMWZlb0ltRGZBV3BQMi9ucW01MGw0WDFKcVJONVIvcHBLckk4aXQ1TVNLMXg3amc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ4MTU5MjE3MTM4OjE2QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmVSaWkrOWY3YUZBN2lPTGs3VlZ1dVRwTitqa3cvYVN3QUdkcVdwUTFpVmMifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzM4NjQ5MDUsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBS3VOIn0=" // session id here
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ",",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`NIKKA™`",
  author: process.env.PACK_AUTHER || "HAKI",
  packname: process.env.PACK_NAME || "KING",
  botname: process.env.BOT_NAME || "NIKKA-V3",
  ownername: process.env.OWNER_NAME || "HAKI",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "N I K K A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
