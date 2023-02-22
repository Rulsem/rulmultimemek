import fs from 'fs'
import fetch from 'node-fetch'
let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `chat aja wa.me/601169466091 kalo mau donasi :) `
let td = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'

conn.reply(m.chat, info, m, { contextInfo: { externalAdReply: {title: global.wm, body: 'ᴡᴀᴀʟᴀɪᴋᴜᴍᴍᴜꜱꜱᴀʟᴀᴍ ᴡᴀʀᴀʜᴍᴀᴛᴜʟʟᴀʜɪ ᴡᴀʙᴀʀᴏᴋᴀᴛᴜʜ', sourceUrl: owner, thumbnail: fs.readFileSync('./thumbnail.jpg')  }}})
}
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler
