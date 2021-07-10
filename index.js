const Discord = require('discord.js');
const bot = new Discord.Client();
const prefix = ",";

bot.login(process.env.token)

bot.on("ready", async () =>{
    console.log("bot connecté")
    bot.user.setStatus("online")
    bot.user.setActivity("Gun Games", {type: 'PLAYING'} )
});

bot.on("message", message => {
    if(message.content === prefix + "embedr"){
    let embed = new Discord.MessageEmbed ()
        .setDescription("*- Ne pas tirer quand on est dans un véhicule* \n*- Ne pas Carkill* \n*- Ne pas insulter \n- Ne pas se mettre des En Cas / Gilets* \n*- Ne pas avoir de casque ( Par Balle ou non )* \n*- Pas de roulade* \n*- Que du Fight* \n*- Pas de coups de crosse* \n\n<#860870652332736522> <#860870582005268490>")
        .setColor("#010101")
        .setTimestamp()
        .setTitle("Règlement Gang War")
        .setFooter("Zeney", "https://images-ext-2.discordapp.net/external/wNJvB3vOZUGx8jKcuryVEv9eWN9rBtUf8u6hrNBRcro/https/media.discordapp.net/attachments/800669193061138443/861668230040911892/unknown.png")
        .setThumbnail("https://images-ext-2.discordapp.net/external/wNJvB3vOZUGx8jKcuryVEv9eWN9rBtUf8u6hrNBRcro/https/media.discordapp.net/attachments/800669193061138443/861668230040911892/unknown.png")
    message.channel.send(embed)
 
    }
});

bot.on("message", message => {
    if(message.content === prefix + "embede"){
    let embed = new Discord.MessageEmbed ()
        .setDescription("`Comment gagner des points ?` \n\nTOP 1 : **10 pts** \nTOP 2 : **7 pts** \nTOP 3 : **6 pts** \nTOP 4 : **4 pts** \nTOP 5 : **3 pts** \nTOP 6 : **2 pts**  \n\nKILL : **1 pts** \n\n`Voici les différents niveau disponibles grâce a vos points:` \n\n<@&863156394736091156> : **20 pts** \n<@&863156335183921174> : **25 pts** \n<@&863156334164836423> : **34 pts** \n<@&863156332907200542> : **40 pts** \n<@&863156329781919784> : **47 pts** \n<@&863156326317424670> : **54 pts** \n<@&863156275318620220> : **60 pts** \n<@&863156244927873025> : **68 pts** \n<@&863156211197149234> : **75 pts** \n<@&863156179622690836> : **86 pts** \n<@&863156137313173534> : **95 pts** \n<@&863156067881844746> : **100 pts** \n<@&863155953703714838> : **115 pts** \n<@&863155888498933822> : **130 pts** \n<@&863156734205100062> : **170 pts** \n\n     <#860870652332736522> <#860870651254145034>")
        .setColor("#010101")
        .setTimestamp()
        .setTitle(" Explication Ranked")
        .setFooter("Scaiko", "https://images-ext-2.discordapp.net/external/wNJvB3vOZUGx8jKcuryVEv9eWN9rBtUf8u6hrNBRcro/https/media.discordapp.net/attachments/800669193061138443/861668230040911892/unknown.png")
        .setThumbnail("https://images-ext-2.discordapp.net/external/wNJvB3vOZUGx8jKcuryVEv9eWN9rBtUf8u6hrNBRcro/https/media.discordapp.net/attachments/800669193061138443/861668230040911892/unknown.png")
    message.channel.send(embed)
 
    }
});

bot.on("message", message => {
    if(message.content.startsWith(".clear")){
        if(message.member.hasPermission('MANAGE_MESSAGES')){

            let args = message.content.trim().split(/ +/g);

            if(args[1]){
                if(!isNaN(args[1]) && args[1] >= 1 && args[1] <= 99 ){
                   
                    message.channel.bulkDelete(args[1]) 
                    message.channel.send(`${args[1]} messages supprimés`)
                }
                else{
                    message.channel.send(`(.clear + nombre)`)
                }
            }
            else{
                message.channel.send(`Manque du nombre`)
            }
        }
    }
});