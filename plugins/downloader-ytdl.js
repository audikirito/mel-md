import { 
    youtubedl,
    youtubedlv2 
} from '@bochilteam/scraper'

import fetch from 'node-fetch'


let handler = async (m, { conn, args, isPrems, isOwner }) => {
    if (!args[0]) return m.reply('Link?')
    const sections = [
	{
	title: "đď¸ Audio",
	rows: [
	    {title: "Mp3", rowId: `-getaud ${args[0]} audio`}
	]
    },
    {
	title: "đĽ Video",
	rows: [
	    {title: "1080p", rowId: `-getvid ${args[0]} 1080`},
{title: "720p", rowId: `-getvid ${args[0]} 720`},
{title: "480p", rowId: `-getvid ${args[0]} 480`},
{title: "360p", rowId: `-getvid ${args[0]} 360`}

	]
    },
   
]

const listMessage = {
  text: `âş  á´ŠĘá´á´ęąá´ ęąá´Ęá´á´á´ yá´á´Ę á´á´á´ÉŞá´ á´yá´Šá´...`,
  footer: wm,
  title: htki + " đĽ đđđđđđđ đłđđ đđđđđđđ " + htki,
  buttonText: "Click Here !",
  sections
}

return conn.sendMessage(m.chat, listMessage, { quoted: fgif  })
}

handler.help = ['ytd']
handler.tags = ['downloader']
handler.command = /^ytdl(v|a|mp4|mp3)?$/i
handler.exp = 3

export default handler