import { Client, ClientOptions } from "discord.js";

export interface AoiOptions {
    /**
     * Options for the discord.js client.
     */
    client?: ClientOptions

    intents?: Client["options"]["intents"]
}