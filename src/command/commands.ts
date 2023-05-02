import {
  ChatInputCommandInteraction,
  Collection,
  SlashCommandBuilder,
} from "discord.js";

import ping from "./commands/ping.js";

const commands: TCommand[] = [
  ping,
  // Add more commands here
];
export default commands;

export type TCommand = {
  data: SlashCommandBuilder;
  execute: (interaction: ChatInputCommandInteraction) => Promise<void>;
};

export function getCommands(): Collection<string, TCommand> {
  const commandCollection = new Collection<string, TCommand>();
  for (const command of commands) {
    commandCollection.set(command.data.name, command);
  }
  return commandCollection;
}
