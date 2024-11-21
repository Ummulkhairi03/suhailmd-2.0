const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_22_20_11_21_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDEyMyxcbiAgICAgICAgODAsXG4gICAgICAgIDE1LFxuICAgICAgICA5MyxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMzIsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNyxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjE3LFxuICAgICAgICAyNTUsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTY3LFxuICAgICAgICAyNDUsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTk4LFxuICAgICAgICA1OCxcbiAgICAgICAgOSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNTMsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMDIsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMTYsXG4gICAgICAgIDExMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNDYsXG4gICAgICAgIDk2LFxuICAgICAgICA2NyxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMjIsXG4gICAgICAgIDc5LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTk4LFxuICAgICAgICA2NyxcbiAgICAgICAgOTcsXG4gICAgICAgIDQsXG4gICAgICAgIDc4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDM0LFxuICAgICAgICAxNjMsXG4gICAgICAgIDI1LFxuICAgICAgICAyMDYsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMDEsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxOCxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMSxcbiAgICAgICAgMTI3LFxuICAgICAgICA4LFxuICAgICAgICAxMTksXG4gICAgICAgIDg1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzIsXG4gICAgICAgIDMzLFxuICAgICAgICA1MyxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMixcbiAgICAgICAgMjIzLFxuICAgICAgICA5MixcbiAgICAgICAgMTEsXG4gICAgICAgIDEyLFxuICAgICAgICA1OCxcbiAgICAgICAgMSxcbiAgICAgICAgNyxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMDUsXG4gICAgICAgIDg0LFxuICAgICAgICAxNjYsXG4gICAgICAgIDM3LFxuICAgICAgICA2NCxcbiAgICAgICAgMzksXG4gICAgICAgIDEzMixcbiAgICAgICAgNjAsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMzMsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMDcsXG4gICAgICAgIDcsXG4gICAgICAgIDczLFxuICAgICAgICAxODAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgODEsXG4gICAgICAgIDg1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAzMyxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMjIsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjQxLFxuICAgICAgICA2MSxcbiAgICAgICAgNjksXG4gICAgICAgIDUxLFxuICAgICAgICAzNSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTMyLFxuICAgICAgICA4MixcbiAgICAgICAgMjQsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTczLFxuICAgICAgICA2LFxuICAgICAgICAxNTgsXG4gICAgICAgIDU2LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTQyLFxuICAgICAgICA0N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjA3LFxuICAgICAgICA4MCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxOSxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMSxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMjIsXG4gICAgICAgIDg3LFxuICAgICAgICAyMzgsXG4gICAgICAgIDI5LFxuICAgICAgICAxMTcsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMTgsXG4gICAgICAgIDI1NSxcbiAgICAgICAgOTksXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjI0LFxuICAgICAgICA5NixcbiAgICAgICAgMTU3LFxuICAgICAgICA0NSxcbiAgICAgICAgMjEsXG4gICAgICAgIDY0LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgODFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg3LFxuICAgICAgICAyMjksXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTI5LFxuICAgICAgICAxOTksXG4gICAgICAgIDQ3LFxuICAgICAgICA2MixcbiAgICAgICAgMjE1LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjI5LFxuICAgICAgICA1MixcbiAgICAgICAgMTksXG4gICAgICAgIDIyOSxcbiAgICAgICAgOTgsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTc3LFxuICAgICAgICAyNTAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNzQsXG4gICAgICAgIDQwLFxuICAgICAgICA1MyxcbiAgICAgICAgOTksXG4gICAgICAgIDEzNyxcbiAgICAgICAgNjAsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMSxcbiAgICAgICAgMzhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDcyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxMTNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTUsXG4gICAgICAgIDE3MyxcbiAgICAgICAgODgsXG4gICAgICAgIDExNixcbiAgICAgICAgMTU5LFxuICAgICAgICAxODcsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTAwLFxuICAgICAgICA5NSxcbiAgICAgICAgNzAsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMTAsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMjgsXG4gICAgICAgIDM2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMzEsXG4gICAgICAgIDExNCxcbiAgICAgICAgNTUsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTAxLFxuICAgICAgICAyNDMsXG4gICAgICAgIDc4LFxuICAgICAgICA2NSxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMDYsXG4gICAgICAgIDQsXG4gICAgICAgIDY4LFxuICAgICAgICA0NSxcbiAgICAgICAgMTcyLFxuICAgICAgICA0NSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMDksXG4gICAgICAgIDIxMixcbiAgICAgICAgMzcsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjQwLFxuICAgICAgICAyMCxcbiAgICAgICAgNjUsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMjQsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjIsXG4gICAgICAgIDcyLFxuICAgICAgICAyMTksXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjIsXG4gICAgICAgIDExNixcbiAgICAgICAgMTY3LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTI3LFxuICAgICAgICAzNSxcbiAgICAgICAgMTYyLFxuICAgICAgICAyNTEsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMjEsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjE4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE1OSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJUYStVVUlQaDdBaTcvMm04SExHL1VnUXFZUmJSbDFjdzBzT3Q2RmNjVitJPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJsOWFsNTZyQ1JVdVBRdFkyQVhiSFdBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjg3Zjc1ZmE0LTQ0MzAtNGI1Yy1iMDQzLTMzYmE3M2E3OTAyZVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA3MSxcbiAgICAgIDExMSxcbiAgICAgIDU5LFxuICAgICAgMTUyLFxuICAgICAgOTYsXG4gICAgICAxNDAsXG4gICAgICAyOCxcbiAgICAgIDE3NSxcbiAgICAgIDI4LFxuICAgICAgMTAsXG4gICAgICAxNTMsXG4gICAgICA3LFxuICAgICAgMTg5LFxuICAgICAgODAsXG4gICAgICAxODIsXG4gICAgICA3OCxcbiAgICAgIDI1NSxcbiAgICAgIDkwLFxuICAgICAgMjIsXG4gICAgICAzN1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMTEsXG4gICAgICAyMjQsXG4gICAgICA3NyxcbiAgICAgIDE0MixcbiAgICAgIDU3LFxuICAgICAgMTU0LFxuICAgICAgMTA3LFxuICAgICAgMTc0LFxuICAgICAgMTcyLFxuICAgICAgMzYsXG4gICAgICAxMjAsXG4gICAgICAyMzksXG4gICAgICAyMDYsXG4gICAgICA2NyxcbiAgICAgIDIyNyxcbiAgICAgIDExMyxcbiAgICAgIDIwNixcbiAgICAgIDIzNCxcbiAgICAgIDIwNSxcbiAgICAgIDE5N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJEODQ1QTZXNlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTAzMjYwOTUxOToxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiVW1tdSBBaGFtYWRcIixcbiAgICBcImxpZFwiOiBcIjI3MjAyMTg1NDM3NjE4ODoxQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0t6eGtYd1FodVQrdVFZWUFTQUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiUndTanBvbklqT1VJSksyL1lsVEp1VFJGc2NqMWZrWGdETStkdCsxNEhWQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCIvRXJkS3BPWlBYUERUYVo0QU9DT0xLN2ZzTDVrRVk0cDEzNy9Ea0RHdlc2WUlZemVtV1JRclV5azVWMjlDUW1iWExGZFRNQXRVclIvRzdTWUhQTFVBZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJEOGpIN09uSDNjTk5nSHErVHoycDBBTUo3eFp0SHJXWjU5TnFpN09RVFhwT281cmhJVHA4UWRoRS9uaHB0SXZiSTBLenM4ZDMvckQyUzNYSmh3RzlCQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MDMyNjA5NTE5OjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICA4MFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMyMjI3NTk4XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ==  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
