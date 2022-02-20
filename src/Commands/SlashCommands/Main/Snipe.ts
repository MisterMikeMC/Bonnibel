// @ts-nocheck
import { MessageEmbed } from "discord.js";
import { SlashCommandStructure } from "../../../SlashCommandsInterface/SlashCommandStructure";
export default new SlashCommandStructure({
    name: 'snipe',
    description: 'Muestra el ultimo mensaje borrado de un canal.',
    options: [
        {
            name: 'channel',
            description: 'Canal que quieras revisar.',
            type: 'CHANNEL'
        }
    ],
    run: async ({ Bunny, interaction}) => {
        let Channel = interaction.options.getChannel('channel') || interaction.channel;
        let MessageSniped = Bunny.snipe.get(Channel.id)
        if (!MessageSniped) {
            interaction.reply({
                embeds: [
                    new MessageEmbed()
                        .setDescription("❌ | No se ha borrado ningún mensaje en el canal seleccionado.")
                        .setColor("#990000")
                ],
                ephemeral: true
            })
        }
        interaction.reply({
            embeds: [
                new MessageEmbed()
				    .setTitle("Contenido del mensaje:")
				    .setAuthor({
                        name: `Mensaje escrito por ${MessageSniped.authorSnipe.tag}`,
                        iconURL: `${MessageSniped.authorSnipe.displayAvatarURL({ dynamic: true})}`
                    })
				    .setDescription(`${MessageSniped.messageContent}`)
				    .addField("Canal", `<#${MessageSniped.channelSnipe.id}>`, true)
				    .addField("Fecha:", `<t:${MessageSniped.dateSnipe}:R>`, true)
				    .setImage(`${MessageSniped.imageSnipe}`)
				    .setColor("RANDOM")
            ]
        })
    }
})