// @ts-nocheck
import { Event, Command } from '../interfaces'
import { Message, MessageEmbed } from 'discord.js'
import ms from 'ms'
import prms from 'pretty-ms'
import qdb from 'quick.db'
export const event: Event = {
    name: 'messageCreate',
    run: async (Bunny, message: Message) => {
        /* Declaraciones */
        let Prefix = "b!"
        if (message.channel.type !== 'DM') {
            /* Command Handler */
            if (!message.author.bot && message.guild && message.content.startsWith(Prefix)) {
                const args = message.content
                    .slice(Prefix.length)
                    .trim()
                    .split(/ +/g);
                const command = args
                    .shift()
                    .toLowerCase();
                let cmd = Bunny.commands.get(command) || Bunny.aliases.get(command)
                if (cmd) {
                    if (message.author.id !== `${OwnerID}`) {
                        let CMDCooldownName = `${cmd.cooldown.name}`
                        let CMDCooldownTime = ms(`${cmd.cooldown.time}`)
                        let Cooldown = qdb.fetch(`${CMDCooldownName}${message.author.id}`)
                        if (Date.now() < Cooldown) {
                            let CooldownRestante = Cooldown - Date.now()
                            let Timer = prms(CooldownRestante, { verbose: true })
                                .replace("hours", "Horas")
                                .replace("minutes", "Minutos y")
                                .replace("milliseconds", "Milisegundos")
                                .replace("seconds", "Segundos")
                                .replace("hour ", "Hora ")
                                .replace("minute ", "Minuto ")
                            message.reply({
                                embeds: [
                                    new MessageEmbed()
                                        .setDescription(`❌ | Estás en cooldown, te quedan **${Timer}**.`)
                                        .setColor("#990000")
                                ]
                            })
                            return;
                        }
                        qdb.delete(`${CMDCooldownName}${message.author.id}`)
                        qdb.add(`${CMDCooldownName}${message.author.id}`, Date.now() + CMDCooldownTime)
                    }
                    (cmd as Command).run(Bunny, message, args)
                }
            }
        }
    },
}