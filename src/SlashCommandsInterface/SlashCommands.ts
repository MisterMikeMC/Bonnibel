import { ChatInputApplicationCommandData, CommandInteraction, CommandInteractionOptionResolver, GuildMember, PermissionResolvable } from 'discord.js';
import Client from '../Client/index'


export interface ExtendedInteraction extends CommandInteraction {
    member: GuildMember;
}

interface RunOption {
    Bunny: Client,
    interaction: CommandInteraction,
    args: CommandInteractionOptionResolver
}

type RunFunction = (options: RunOption) => any;

export type CommandType = {
    userPermisions?: PermissionResolvable[];
    run: RunFunction;
} & ChatInputApplicationCommandData