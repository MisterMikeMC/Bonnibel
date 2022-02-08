import { MessageEmbed } from "discord.js";
import { Event } from "../interfaces";
export const event: Event = {
    name: 'guildMemberUpdate',
    run: async (Bunny, Old, New) => {
        let NewMemberRole = New.roles.cache.some((role) => role.id === '928810920296189982')
        let OldMemberRole = Old.roles.cache.some((role) => role.id === '928810920296189982')
        if(OldMemberRole === false && NewMemberRole === true){
            //@ts-ignore
            Bunny.channels.cache.get('929161334673793034').send({
                content: `Demosle la bienvenida a <:hear_3:930596463942185000> <@${New.id}> <:Qlindo_NF2:933705330225987614>`,
                embeds: [
                    new MessageEmbed()
                        .setAuthor({
                            name: `_ _   ♡♡   __Bienvenida__﹒🌸`,
                            iconURL: New.displayAvatarURL({ dynamic: true })
                        })
                        .setThumbnail(New.displayAvatarURL({ dynamic: true }))
                        .setDescription(`_ _     ─⊹ \🍥  ˚₊  >< Lee las <#929431172621156413>  ʚĭɞ\n_ _ ─ visita <#929514219454464070> e <#930130086236155914>  ! ﹒ \🎀 ⊹ ˚₊\n_ _  ─  ⊹ ˚₊  **   No olvides presentarte <#929514348529991680> !  **  ⊹ ˚₊\n_ _               ・Disfruta tu estadía en el servidor ^^ ・`)
                        .setColor("#F5A9D0")
                        .setFooter({
                            text: `Ahora somos ${New.guild.memberCount} personitas!!!`,
                            iconURL: Bunny.user.displayAvatarURL()
                        })
                        .setTimestamp()
                ]
            })
        }
    }
}