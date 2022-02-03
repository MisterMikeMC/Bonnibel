import { DisTubeEvents } from 'distube'
import Client from "../Client";

interface Run  {
    (Bunny: Client, ...args: any[]);
}

export interface EventDistube {
    name: keyof DisTubeEvents;
    run: Run;
}