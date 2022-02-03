import { Event } from '../interfaces'
export const event: Event = {
    name: 'ready',
    run: (Bunny) => {
        const Estados = [
            { name: `Comiendo una zanahoria 🥕`, type: 1 },
            { name: `Feliz ^^`, type: 1 }
        ]
        setInterval(() => {
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