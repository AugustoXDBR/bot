const Discord = require('discord.js');
const bot = new Discord.Client();
const config = require('./config.json');
const links = require('./links.json');
var censor

bot.login(config.token);

bot.on('ready', () => {
    bot.user.setActivity('"!comandos" para ajuda');
    console.log('logado');
    console.log(`Bot foi iniciado, com ${bot.users.size} usuarios, em ${bot.channels.size} canais de ${bot.guilds.size} servers.`)
});

bot.on('message', async message => {
    
    if(message.author.bot) return;
   
    //if(message.content.indexOf(config.prefix) !== 0) return;

    let responseObject = links; 
    let prefix = config.prefix;
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    if(responseObject[message.content]){
        message.channel.send(responseObject[message.content]);
    }

    if(command === "ping") {
        const m = await message.channel.send("Ping?");
        m.edit(`Pong! Latencia de ${m.createdTimestamp - message.createdTimestamp}ms. Latencia de API ${Math.round(bot.ping)}ms`);
    }
    if(message.content.startsWith(`<:pepemonkas:`)){
        const pepemonkas = bot.emojis.find(emoji => emoji.name === "pepemonkas");
        message.channel.send(`${pepemonkas}`);
    }

    if (command === "fala")  {
        let mens = args[0];
        message.channel.send(`${mens}`);
    }
    
    if(message.content.endsWith("!roleta")){
        randomNumber = Math.floor(Math.random() * (6 - 1) + 1);
        if(randomNumber == 2){
            message.reply("Morreu!");
        }
        else{
            message.reply("Sobreviveu!");
        }
    }

    if(message.content.startsWith("!botmute")){
        censor = 1;
    }

    if (message.content.startsWith("!botdesmute")){
        censor = 0;
    }

    if(message.content.startsWith("!var")){
        message.channel.send(censor);
    }

    
    if(message.content.startsWith("!roleta game")){
        randomNumber = Math.floor(Math.random() * (4 - 1) + 1);
        if(randomNumber == 1){
            message.reply("Banco Imobiliario!");
        }
        if(randomNumber == 2){
            message.reply("Stardew Valley!");
        }
        if(randomNumber == 3){
            message.reply("Lolzin!");
        }
        if(randomNumber == 4){
            message.reply("Outro!");
        }
    }

    if(message.content.startsWith("!roleta role")){
        randomNumber = Math.floor(Math.random() * (5 - 1) + 1);
        if(randomNumber == 1){
            message.reply("Top!");
        }
        if(randomNumber == 2){
            message.reply("Jungle!");
        }
        if(randomNumber == 3){
            message.reply("Mid!");
        }
        if(randomNumber == 4){
            message.reply("Atirador!");
        }
        if(randomNumber == 5){
            message.reply("Suporte!");
        }
    }

    if(message.content.startsWith("!roleta h") && (message.channel.id == '442099014167429130')){
        randomNumber = Math.floor(Math.random() * (31 - 1) + 1);
        if((randomNumber == 1) && (message.channel.id == '442099014167429130')){
            message.reply("GR!");
        }
        if((randomNumber == 2) && (message.channel.id == '442099014167429130')){
            message.reply("MO!");
        }
        if((randomNumber == 3) && (message.channel.id == '442099014167429130')){
            message.reply("GP!");
        }
        if((randomNumber == 4) && (message.channel.id == '442099014167429130')){
            message.reply("RP!");
        }
        if((randomNumber == 5) && (message.channel.id == '442099014167429130')){
            message.reply("AG!");
        }
        if((randomNumber == 6) && (message.channel.id == '442099014167429130')){
            message.reply("AN!");
        }
        if((randomNumber == 7) && (message.channel.id == '442099014167429130')){
            message.reply("FJ!");
        }
        if((randomNumber == 8) && (message.channel.id == '442099014167429130')){
            message.reply("BQ!");
        }
        if((randomNumber == 9) && (message.channel.id == '442099014167429130')){
            message.reply("BK!");
        }
        if((randomNumber == 10) && (message.channel.id == '442099014167429130')){
            message.reply("CK!");
        }
        if((randomNumber == 11) && (message.channel.id == '442099014167429130')){
            message.reply("DP!");
        }
        if((randomNumber == 12) && (message.channel.id == '442099014167429130')){
            message.reply("FN!");
        }
        if((randomNumber == 13) && (message.channel.id == '442099014167429130')){
            message.reply("FD!");
        }
        if((randomNumber == 14) && (message.channel.id == '442099014167429130')){
            message.reply("GK!");
        }
        if((randomNumber == 15) && (message.channel.id == '442099014167429130')){
            message.reply("GS!");
        }
        if((randomNumber == 16) && (message.channel.id == '442099014167429130')){
            message.reply("IS!");
        }
        if((randomNumber == 17) && (message.channel.id == '442099014167429130')){
            message.reply("FR!");
        }
        if((randomNumber == 18) && (message.channel.id == '442099014167429130')){
            message.reply("KM!");
        }
        if((randomNumber == 19) && (message.channel.id == '442099014167429130')){
            message.reply("LC!");
        }
        if((randomNumber == 20) && (message.channel.id == '442099014167429130')){
            message.reply("MT!");
        }
        if((randomNumber == 21) && (message.channel.id == '442099014167429130')){
            message.reply("MB!");
        }
        if((randomNumber == 22) && (message.channel.id == '442099014167429130')){
            message.reply("NK!");
        }
        if((randomNumber == 23) && (message.channel.id == '442099014167429130')){
            message.reply("NR!");
        }
        if((randomNumber == 24) && (message.channel.id == '442099014167429130')){
            message.reply("OP!");
        }
        if((randomNumber == 25) && (message.channel.id == '442099014167429130')){
            message.reply("PZ!");
        }
        if((randomNumber == 26) && (message.channel.id == '442099014167429130')){
            message.reply("PK!");
        }
        if((randomNumber == 27) && (message.channel.id == '442099014167429130')){
            message.reply("SC!");
        }
        if((randomNumber == 28) && (message.channel.id == '442099014167429130')){
            message.reply("TC!");
        }
        if((randomNumber == 29) && (message.channel.id == '442099014167429130')){
            message.reply("VL!");
        }
        if((randomNumber == 30) && (message.channel.id == '442099014167429130')){
            message.reply("YO!");
        }
        if((randomNumber == 31) && (message.channel.id == '442099014167429130')){
            message.reply("YU!");
        }

    }

    if(message.content.startsWith("http") && (message.channel.id != '441630318789656578') && (message.channel.id != '510166342025084977')){
        message.channel.send('.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.');
    }
    if(message.content.endsWith(".png")){
        message.channel.send('.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.');
    }
    if(message.content.endsWith(".jpg")){
        message.channel.send('.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.');
    }
    if(message.content.endsWith(".gif")){
        message.channel.send('.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.');
    }
    if(message.content.includes(";-;")){
        message.channel.send(';-;');
    }
    if(message.content.includes("porra") && censor==0){
        message.channel.send('não fale palavras chulas');
    }
    if(message.content.includes("cu") && censor==0){
        message.channel.send('não fale palavras chulas');
    }
    if(message.content.startsWith("!bot merda")){
        message.author.send('I will find you \n and I will kill you');
        message.channel.send(';-;');
    }
    if(message.content.includes("coe bot")){
        message.channel.send('coe mano');
    }
    if(message.content.includes("coe bot")){
        message.channel.send('vai toma no teu cu');
    }
    
    if(message.content.endsWith("!nota")){
        message.channel.send('use: !nota [1/2/3/4/5]');
    }
    if(message.content.startsWith("!nota") && message.content.endsWith('5')){
        message.channel.send('muito obrigado!');
        randomNumber = Math.floor(Math.random() * (6 - 1) + 1);
            if(randomNumber == 1){
                message.author.send('Shhhhhh https://anime-pictures.net/pictures/get_image/289242-900x1600-bakemonogatari-nekomonogatari-shaft+%28studio%29-monogatari+%28series%29-hanekawa+tsubasa-black+hanekawa.jpg \n');
                message.author.send('\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.');
            }
            if(randomNumber == 2){
                message.author.send('Shhhhhh https://pm1.narvii.com/7045/4be21a1b38f0f6ee12ff7166aeb8cd13fef89b03r1-540-553v2_hq.jpg \n');
                message.author.send('\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.');
            }
            if(randomNumber == 3){
                message.author.send('Shhhhhh https://i.pinimg.com/originals/a2/18/ae/a218ae7889bc0eff892f53d96b52dcb8.jpg \n');
                message.author.send('\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.');
            }
            if(randomNumber == 4){
                message.author.send('Shhhhhh http://agstdropoff.000webhostapp.com/img/okita1.jpg \n');
                message.author.send('\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.');
            }
            if(randomNumber == 5){
                message.author.send('Shhhhhh http://agstdropoff.000webhostapp.com/img/gundam1.jpg \n');
                message.author.send('\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.');
            }
            if(randomNumber == 6){
                message.author.send('Shhhhhh http://agstdropoff.000webhostapp.com/img/granbule1.jpg \n');
                message.author.send('\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.\n.');
            }
    }   

    if(message.content.startsWith("!nota") && message.content.endsWith('4')){
        message.channel.send('obrigado!');
    }
    if(message.content.startsWith("!nota") && message.content.endsWith('3')){
        message.channel.send('tá bom');
    }
    if(message.content.startsWith("!nota") && message.content.endsWith('2')){
        message.channel.send('oh, ok ;-;');
    }
    if(message.content.startsWith("!nota") && message.content.endsWith('1')){
	    message.author.send('I will find you \n and I will kill you');
        message.channel.send(';-;');
    }

    if (command === "r34" && (message.channel.id == '509433222975717397'))  {
        let pesq = args[0];
        message.channel.send(`https://rule34.xxx/index.php?page=post&s=list&tags=${pesq}`);
    }
    if (command === "r34" && (message.channel.id != '509433222975717397'))  {
        return;
    }

    if (command === "chama") {
        let pessoa = message.author.id;
            if (pessoa = ("236901700475027456")){
                
                let pess = args[0];
                message.channel.send(`@${pess}`)
                message.channel.send(`@${pess}`)
                message.channel.send(`@${pess}`)
                message.channel.send(`@${pess}`)
                message.channel.send(`@${pess}`)
        }
        else return;
    }

    if (command === "chama2") {
        let pessoa = message.author.id;
            if (pessoa = ("236901700475027456")){
                
                let pess = args[0];
                message.channel.send(`<@${pess}>`)
                message.channel.send(`<@${pess}>`)
                message.channel.send(`<@${pess}>`)
                message.channel.send(`<@${pess}>`)
                message.channel.send(`<@${pess}>`)
                message.delete();
        }
        else return;
    }
});