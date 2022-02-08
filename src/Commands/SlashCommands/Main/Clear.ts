import { GuildTextBasedChannel, MessageEmbed } from "discord.js";
import { SlashCommandStructure } from "../../../SlashCommandsInterface/SlashCommandStructure";
export default new SlashCommandStructure({
    name: 'clear',
    description: 'Borrar una cantidad de mensajes.',
    options: [
        {
            name: 'cantidad',
            description: 'Cantidad de mensajes a borrar.',
            type: "NUMBER",
            required: true
        }
    ],
    userPermisions: ["MANAGE_CHANNELS", "MANAGE_MESSAGES"],
    run: async ({ Bunny, interaction }) => {
        let Arguments = interaction.options.getNumber('cantidad')
        if (!Arguments) {
            interaction.reply({
                embeds: [
                    new MessageEmbed()
                        .setDescription(`❌ | Necesitas proporcionar una cantidad de mensajes para borrar.`)
                        .setColor("#990000")
                ],
                ephemeral: true
            })
            return;
        } else if (isNaN(Arguments)) {
            interaction.reply({
                embeds: [
                    new MessageEmbed()
                        .setDescription(`❌ | Necesitas ingresar una cantidad valida.`)
                        .setColor("#990000")
                ],
                ephemeral: true
            })
            return;
        } else if (Arguments <= 0 || Arguments >= 99) {
            interaction.reply({
                embeds: [
                    new MessageEmbed()
                        .setDescription(`❌ | Necesitas ingresar una cantidad del 1 al 99.`)
                        .setColor("#990000")
                ],
                ephemeral: true
            })
            return;
        }
        let DeleteinteractionNumber = Math.round(Arguments)
        if (interaction.channel.type !== 'GUILD_TEXT') return
        let ChannelForBulk: GuildTextBasedChannel = interaction.channel
        ChannelForBulk.bulkDelete(DeleteinteractionNumber + 1)
            .then(bulk => {
                interaction.reply({
                    embeds: [
                        new MessageEmbed()
                            .setDescription(`✅ | Se han borrado **${DeleteinteractionNumber}** correctamente.`)
                            .setColor("#009900")
                    ],
                    ephemeral: true
                })
                return;
            })
            .catch(err => {
                interaction.reply({
                    embeds: [
                        new MessageEmbed()
                            .setDescription(`❌ | Hubo un error al intentar borrar los mensajes.`)
                            .setColor("#990000")
                    ],
                    ephemeral: true
                })
                return;
            })
    }
})