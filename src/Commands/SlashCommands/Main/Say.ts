import { MessageEmbed } from "discord.js";
import { SlashCommandStructure } from "../../../SlashCommandsInterface/SlashCommandStructure";
export default new SlashCommandStructure({
    name: 'say',
    description: 'Repito lo que me digas.',
    options: [
        {
            name: 'message',
            description: 'Escribe lo que quieres que diga..',
            type: 'STRING',
            required: true
        }
    ],
    run: async ({ Bunny, interaction }) => {
        let Message = interaction.options.getString('message')
        interaction.reply({
            embeds: [
                new MessageEmbed()
                    .setDescription(`✅ | Mensaje enviado.`)
                    .setColor("#009900")
            ],
            ephemeral: true
        })
        interaction.channel.send({
            content: `${Message}`,
            allowedMentions: {
                parse: []
            }
        })
    }
})