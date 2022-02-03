import { MessageEmbed } from "discord.js";
import { Command } from "../../../interfaces";
export const command: Command = {
    name: "suggestion",
    aliases: ["sugerencia", "suggest"],
    description: "Has una sugerencia para apoyar al servidor ^^",
    syntaxis: "<Sugerencia>",
    cooldown: {
        name: "SuggestCooldown_",
        time: "30m"
    },
    onlyOwner: false,
    maintenance: false,
    run: async (Bunny, message, args) => {
        let SuggestMessage = args.join(' ')
        if (!SuggestMessage) {
            message.reply({
                embeds: [
                    new MessageEmbed()
                        .setDescription("❌ | Necesitas escribir algo para sugerir.")
                        .setColor("#990000")
                ]
            })
            return;
        }
        // @ts-ignore
        Bunny.channels.cache.get('929538627539726376').send({
            embeds: [
                new MessageEmbed()
                    .setDescription(`<:hear_4:930596428395454464> : ˚ ♡ ꒱ ᚑ ̇ ✦ ︶︶︶ ꒷︶ ꒦ ⊹ ︶ ꒷ ♡ ꒱\n\n<a:flecha_2:930646820584054836> ${SuggestMessage}\n\n<:hear_4:930596428395454464> ˚ ♡ ꒱ ᚑ ̇ ✦ ︶︶︶ ꒷︶ ꒦ ⊹ ︶ ꒷ ♡ ꒱`)
                    .setImage("https://media.discordapp.net/attachments/929161270047936574/929593259154616340/247_sin_titulo_20220108223303.png")
                    .setColor("#BB86DC")
                    .setFooter({
                        text: `Gracias ${message.author.tag} por la sugerencia.`,
                        iconURL: `${message.author.displayAvatarURL({ dynamic: true })}`
                    })
                    .setTimestamp()
            ]
        }).then((SuggestPostMessage) => {
            message.delete()
            SuggestPostMessage.react("<:x_check_nf2:930597239729029191>")
            SuggestPostMessage.react("<:xnf2:930597291260264449>")
        })
    }
}