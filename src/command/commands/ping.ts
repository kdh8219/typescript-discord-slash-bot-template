import {
  SlashCommandBuilder,
  ChatInputCommandInteraction,
  EmbedBuilder,
} from "discord.js";

import { TCommand } from "../commands";

const command: TCommand = {
  data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("check ping")
    .setDMPermission(false),
  async execute(interaction: ChatInputCommandInteraction) {
    const defer = await interaction.reply({
      content: "Pinging...",
      fetchReply: true,
      ephemeral: true,
    });
    const embed = new EmbedBuilder()
      .setColor(0x0099ff)
      .setTitle("***PONG🏓***")
      .addFields(
        {
          name: "Websocket heartbeat",
          value: `${interaction.client.ws.ping}ms`,
        },
        {
          name: "RoundTrip latency",
          value: `${defer.createdTimestamp - interaction.createdTimestamp}ms`,
        }
      );

    await interaction.editReply({ embeds: [embed] });
  },
};

export default command;
