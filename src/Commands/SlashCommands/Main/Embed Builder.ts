import { MessageEmbed } from "discord.js";
import { SlashCommandStructure } from "../../../SlashCommandsInterface/SlashCommandStructure";
export default new SlashCommandStructure({
    name: 'embed-builder',
    description: 'Construlle un embed.',
    options: [
        {
            name: 'titulo',
            description: 'Titulo del embed.',
            type: 'STRING'
        },
        {
            name: 'description',
            description: 'Description del embed.',
            type: 'STRING'
        },
        {
            name: 'color',
            description: 'Color del embed.',
            type: 'STRING'
        },
        {
            name: 'footer',
            description: 'Footer del embed.',
            type: 'STRING'
        },
        {
            name: 'image',
            description: 'URL de la imagen para el embed.',
            type: 'STRING'
        },
        {
            name: 'preview',
            description: '¿Previsualizar el embed?',
            type: 'STRING'
        }
    ],
    run: async ({ Bunny, interaction }) => {
        // @ts-ignore
        if (!interaction.member.permissions.has('ADMINISTRATOR')) {
            interaction.reply({
                content: "No tienes permitido usar este comando.",
                ephemeral: true
            })
            return;
        }
        const Title = interaction.options.getString("titulo")
        const Description = interaction.options.getString("description")
        const Color = interaction.options.getString("color")
        const Footer = interaction.options.getString("footer")
        const Image = interaction.options.getString("image")
        const Preview = interaction.options.getBoolean("preview") || false
        let BuildEmbed = new MessageEmbed()
        if (Title) {
            if (Description) {
                BuildEmbed.setDescription(`${Description}`)
            }
            if (Color) {
                // @ts-ignore
                BuildEmbed.setColor(`${Color}`)
            }
            if (Footer) {
                BuildEmbed.setFooter(`${Footer}`)
            }
            if (Image) {
                BuildEmbed.setImage(`${Image}`)
            }
            BuildEmbed.setTitle(`${Title}`)
        } else if (Description) {
            if (Color) {
                // @ts-ignore
                BuildEmbed.setColor(`${Color}`)
            }
            if (Footer) {
                BuildEmbed.setFooter(`${Footer}`)
            }
            if (Image) {
                BuildEmbed.setImage(`${Image}`)
            }
            BuildEmbed.setDescription(`${Description}`)
        } else if (Color) {
            if (Footer) {
                BuildEmbed.setFooter(`${Footer}`)
            }
            if (Image) {
                BuildEmbed.setImage(`${Image}`)
            }
            // @ts-ignore
            BuildEmbed.setColor(`${Color}`)
        } else if (Footer) {
            if (Image) {
                BuildEmbed.setImage(`${Image}`)
            }
            BuildEmbed.setFooter({
                text: `${Footer}`
            })
        } else if (Image) {
            BuildEmbed.setImage(`${Image}`)
        } else {
            interaction.reply({
                content: "Debes de proporcionar datos para tu embed.",
                ephemeral: true
            })
            return;
        }
        if (Preview) {
            interaction.reply({
                embeds: [BuildEmbed],
                ephemeral: true
            })
            return;
        } else {
            interaction.reply({
                content: "Se ha mandado el embed.",
                ephemeral: true
            })
            interaction.channel.send({
                embeds: [BuildEmbed]
            })
            return;
        }
    }
})