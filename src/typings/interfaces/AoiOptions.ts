import {Client, ClientOptions} from "discord.js";

export interface AoiOptions {
    /**
     * Options for the discord.js client.
     */
    client?: ClientOptions

    /**
     * Intents for this bot, if no intents are given, this will default to GUILD_MESSAGES and GUILDS.
     * Note that using this property will not have any effect if ClientOptions#intents is given.
     */
    intents?: Client["options"]["intents"]
}