import { MessageEmbed } from "discord.js";
import { Command } from "../../../interfaces";
export const command: Command = {
    name: "say",
    aliases: [],
    description: "Repito lo que me digas ^^",
    syntaxis: "<Message>",
    cooldown: {
        name: "SayCooldown_",
        time: "30s"
    },
    onlyOwner: false,
    maintenance: false,
    run: async (Bunny, message, args) => {
        let Message = args.join(' ')
        if (!Message) {
            message.reply({
                embeds: [
                    new MessageEmbed()
                        .setDescription(`❌ | Necesitas escribir un mensaje.`)
                        .setColor("#990000")
                ]
            })
        }
        message.delete().then(msg => {
            message.channel.send({
                content: `${Message}`,
                allowedMentions: {
                    parse: []
                }
            })
        })
    }
}