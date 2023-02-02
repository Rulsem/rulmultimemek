let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let text = `
ੈ✩‧₊˚ 𝖣𝗈𝗇𝖺𝗌𝗂 
• 𝖳𝗇𝗀 𝖾𝖶𝖺𝗅𝗅𝖾𝗍 : 176130131
• 𝖬𝖺𝗒𝖻𝖺𝗇𝗄 : 162021892065
`
const templateButtons = [
    {index: 1, quickReplyButton: {displayText: 'Menu', id: '.menu'}},
    {index: 2, quickReplyButton: {displayText: 'Owner', id: '.owner'}},
]
let tm = {
text: text,
footer: global.wm,
templateButtons: templateButtons,
image: {url: fla + 'Donasi'}
}
conn.sendMessage(m.chat, tm, m)
}
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler