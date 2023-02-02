let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let text = `amy busy - bot`
const templateButtons = [
    {index: 1, quickReplyButton: {displayText: 'Owner', id: '.owner'}},
]
let tm = {
text: text,
footer: global.wm,
templateButtons: templateButtons,
image: {url: fla + 'Donasi'}
}
conn.sendMessage(m.chat, tm, m)
}
handler.customPrefix = /^(amyyyyy|amyy|amy)$/i
handler.command = new RegExp

export default handler