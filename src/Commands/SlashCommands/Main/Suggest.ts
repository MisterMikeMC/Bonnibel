import { BaseGuildTextChannel, MessageEmbed } from "discord.js";
import { SlashCommandStructure } from "../../../SlashCommandsInterface/SlashCommandStructure";
export default new SlashCommandStructure({
    name: 'suggest',
    description: 'Has un aporte para el servidore.',
    options: [
        {
            name: 'suggest',
            description: 'Escribe tu sugerencia.',
            type: 'STRING',
            required: true
        }
    ],
    run: async ({ Bunny, interaction }) => {
        let SuggestMessage = interaction.options.getString('suggest')
        if (!SuggestMessage) {
            interaction.reply({
                embeds: [
                    new MessageEmbed()
                        .setDescription("❌ | Necesitas escribir algo para sugerir.")
                        .setColor("#990000")
                ],
                ephemeral: true
            })
            return;
        }
        let ChannelForSendSuggest = Bunny.channels.resolve("929538627539726376") as BaseGuildTextChannel
        ChannelForSendSuggest.send({
            embeds: [
                new MessageEmbed()
                    .setDescription(`<:hear_4:930596428395454464> : ˚ ♡ ꒱ ᚑ ̇ ✦ ︶︶︶ ꒷︶ ꒦ ⊹ ︶ ꒷ ♡ ꒱\n\n<a:flecha_2:930646820584054836> ${SuggestMessage}\n\n<:hear_4:930596428395454464> ˚ ♡ ꒱ ᚑ ̇ ✦ ︶︶︶ ꒷︶ ꒦ ⊹ ︶ ꒷ ♡ ꒱`)
                    .setImage("https://media.discordapp.net/attachments/929161270047936574/929593259154616340/247_sin_titulo_20220108223303.png")
                    .setColor("#BB86DC")
                    .setFooter({
                        text: `Gracias ${interaction.user.tag} por la sugerencia.`,
                        iconURL: `${interaction.user.displayAvatarURL({ dynamic: true })}`
                    })
                    .setTimestamp()
            ]
        }).then((SuggestPostMessage) => {
            interaction.reply({
                embeds: [
                    new MessageEmbed()
                        .setDescription("✅ | Sugerencia enviada.")
                        .setColor("#009900")
                ],
                ephemeral: true
            })
            SuggestPostMessage.react("<:x_check_nf2:930597239729029191>")
            SuggestPostMessage.react("<:xnf2:930597291260264449>")
        })
    }
})