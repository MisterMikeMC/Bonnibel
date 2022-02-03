import { CommandInteractionOptionResolver, Interaction, MessageEmbed } from 'discord.js'
import { Event } from '../interfaces'
import { ExtendedInteraction } from '../SlashCommandsInterface/SlashCommands';
export const event: Event = {
    name: 'interactionCreate',
    run: async (Bunny, interaction: Interaction) => {
        if (interaction.isCommand()) {
            const SlashCommand = Bunny.slashcommands.get(interaction.commandName);
            if (!SlashCommand) {
                interaction.reply({
                    embeds: [
                        new MessageEmbed()
                            .setDescription(`❌ | Estas usando un comando invalido.`)
                            .setColor("#BE0000")
                    ],
                    ephemeral: true
                })
            } else {
                SlashCommand.run({
                    args: interaction.options as CommandInteractionOptionResolver,
                    Bunny,
                    interaction: interaction as ExtendedInteraction
                })
            }
        }
    },
}