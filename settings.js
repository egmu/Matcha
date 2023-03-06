
const fs = require('fs')
const chalk = require('chalk')
global.footer = 'Matchaadepanmu'//ganti
global.pulsa = "6289519240209"//ganti
global.gopay = "6289519240209"//ganti
global.dana = "6289519240209"//ganti
global.paypal = "---" 
global.shopay = "---" 
global.saweria = "---" 
global.sociabus = "---" 
global.bni = "---" 
global.bri = "---" 
global.bankjatim = "---" 
global.jago = "---" 
global.neobank = "---" 
global.packname = 'Matchaalalumu'//ganti
global.footer = '©Matchaadepanmu'//ganti
global.ovo = "6289519240209"//ganti
global.ownerlen = "Matchaadepanmu/Matchaalalumu"
global.owner =['6289519240209']//ubh nomor owner hp
global.ownername = "Matchaalalumu" 
global.ytname = "YT: @DEVIL-X-COD"
global.socialm = "IG: vlntncptr"
global.location = "Indonesia, Jawatimur, 🅂🄸🄰🄿🄰🄱🄾🅃√'"
global.ownernomer = "6289519240209"
global.premium = ['6289519240209'] 
global.nomorcs = '6289519240209'
global.botname = 'Matchaadepanmu MD' 
global.linkz = "Link Gc"
global.websitex = "https://youtube.com/@DEVIL-X-COD"
global.botscript = '-'
global.themeemoji = "😿"
global.packname = "Sticker By Matchaadepanmu"
global.author = "Made by Matchaalalumu"
global.wm = "Matchaadepanmu"
global.sessionName = 'session'
global.prefa = '! .'
global.sp = '! .'

global.mess = {
success: 'Sucses....',
admin: 'Mohon Maaf Feature hanya Khusus admin',
botAdmin: 'Bot Harus Menjadi Admin Group Terlebih dahulu',
premime: 'Maaf Kamu tidak Bisa menggunakan Feature Premium',
owner: 'Maaf Kamu Tidak Bisa menggunakan Feature Owner', 
group: 'Feature Hanya Bisa Di gunakan Di dalam Group',
private: 'Feature Hanya Bisa di gunakan di dalam Private Chat!',
bot: 'Feature Hanya Bisa di gunakan oleh bot',
wait: 'Permintaan Anda sedang kami proses....',
linkm: 'Mana Link Nya?',
}
global.thum = fs.readFileSync("./image/image.jpg")
global.log0 = fs.readFileSync("./image/image.jpg")
global.err4r = fs.readFileSync("./image/image.jpg")
global.thumb = fs.readFileSync("./image/image.jpg")
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
