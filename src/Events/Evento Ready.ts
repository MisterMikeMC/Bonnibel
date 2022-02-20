import { Event } from '../interfaces'
export const event: Event = {
    name: 'ready',
    run: (Bunny) => {
        setInterval(() => {
            const Estados = [
                { name: `Comiendo una zanahoria 🥕`, type: 1 },
                { name: `Feliz ^^`, type: 1 },
                { name: `Atendiendo Dolby Lolly Bunnie`, type: 1 }
            ]
            function presence() {
                Bunny.user.setPresence({
                    status: 'online',
                    activities: [Estados[Math.floor(Math.random() * Estados.length)]]
                });
            }
            presence();
        }, 15000)
        console.log(`${Bunny.user.tag} lista ✅`)
    },
}