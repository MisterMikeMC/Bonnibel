import { GuildTextBasedChannel, MessageEmbed } from "discord.js";
import { Command } from "../../../interfaces";
export const command: Command = {
    name: "purge",
    aliases: ["clear", "bulkdelete", "nuke"],
    description: "Elemina una cantidad de mensajes.",
    syntaxis: "<Cantidad de mensajes>",
    cooldown: {
        name: "BulkDeleteMessageCooldown_",
        time: "1m"
    },
    onlyOwner: false,
    maintenance: false,
    run: async (Bunny, message, args) => {
        let Arguments = args[0]
        if (!Arguments) {
            message.reply({
                embeds: [
                    new MessageEmbed()
                        .setDescription(`❌ | Necesitas proporcionar una cantidad de mensajes para borrar.`)
                        .setColor("#990000")
                ]
            })
            return;
        } else if (isNaN(Number(Arguments))) {
            message.reply({
                embeds: [
                    new MessageEmbed()
                        .setDescription(`❌ | Necesitas ingresar una cantidad valida.`)
                        .setColor("#990000")
                ]
            })
            return;
        } else if (Number(Arguments) <= 0 || Number(Arguments) >= 100) {
            message.reply({
                embeds: [
                    new MessageEmbed()
                        .setDescription(`❌ | Necesitas ingresar una cantidad del 1 al 100.`)
                        .setColor("#990000")
                ]
            })
            return;
        }
        let DeleteMessageNumber = Math.round(Number(Arguments))
        if (message.channel.type !== 'GUILD_TEXT') return
        let ChannelForBulk: GuildTextBasedChannel = message.channel
        ChannelForBulk.bulkDelete(DeleteMessageNumber + 1)
            .then(bulk => {
                message.channel.send({
                    embeds: [
                        new MessageEmbed()
                            .setDescription(`✅ | Se han borrado **${DeleteMessageNumber}** correctamente.`)
                            .setColor("#009900")
                    ]
                }).then(msg => {
                    setTimeout(() => {
                        msg.delete()
                    }, 2500);
                })
                return;
            })
            .catch(err => {
                message.reply({
                    embeds: [
                        new MessageEmbed()
                            .setDescription(`❌ | Hubo un error al intentar borrar los mensajes.`)
                            .setColor("#990000")
                    ]
                })
                return;
            })


    }
}