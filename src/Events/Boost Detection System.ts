import { MessageEmbed } from "discord.js";
import { Event } from "../interfaces";
export const event: Event = {
    name: 'guildMemberUpdate',
    run: async (Bunny, oldMember, newMember) => {
        let oldBoostStatus = oldMember.premiumSince;
        let newBoostStatus = newMember.premiumSince;
        if(!oldBoostStatus && newBoostStatus) {
            Bunny.channels.cache
                .get('929538650046353488')
                // @ts-ignore
                .send({
                    content: `¡¡¡<@${newMember.user.id}> gracias por tu boost!!!`,
                    embeds: [
                        new MessageEmbed()
                            .setTitle(`Gracias por tu mejora ${newMember.user.tag}`)
                            .setDescription(`<a:nf2_B:930644812170919986> <a:nf2_O:930645245576749117> <a:nf2_O:930645245576749117> <a:nf2_S:931647043292762112> <a:nf2_T:930645331388022834> <a:nf2_E:930644866793340948> <a:nf2_R:930645296311042058>\n. ︵︵︵︵︵ ♡♡ 、、 ﹨﹨\n﹐ ┆────────────────── 、\n<:GA_12:930596374960025620>˚ ‧♡﹕ ‹𝟹Gracias por el booster! nos ayudan a mejorar muchisimo el servidor >.< todo el staff lo agradece\n┆────────────────── 、\n<:girl_2:930597417462681660> no olvides reclarmar los beneficios del Booster en <#929742657939472384>`)
                            .setImage("https://media.discordapp.net/attachments/929381022724943923/931634882868834324/256_sin_titulo_20220114134544.png")
                            .setThumbnail(" https://cdn.discordapp.com/emojis/882046859466666024.gif?size=100")
                            .setColor("#BB86DC")
                            .setTimestamp()
                    ]
                })
        }
    }
}