import { Event } from "../interfaces";
export const event: Event = {
    name: 'messageDelete',
    run: async (Bunny, message) => {
        Bunny.snipe.set(
            message.channel.id, {
                messageContent: message.content,
                authorSnipe: message.author,
                imageSnipe: message.attachments.first()?.proxyURL || null,
                channelSnipe: message.channel,
                dateSnipe: Math.round(Date.now() / 1000)
            }
        )
    }
}