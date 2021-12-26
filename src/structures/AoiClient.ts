import {ApplicationCommandData, Client, Collection, Intents, IntentsString, Message} from "discord.js";

import {
    AoiOptions,
} from "../typings";

import {AoiCommandManager} from "./AoiCommandManager";

export class AoiClient {
    /**
     * The client managed by this Client.
     */
    client: Client

    /**
     * The commands for this Client.
     */
    commands = new AoiCommandManager(this)

    /**
     * Options passed to the Client.
     */
    options: AoiOptions

    /**
     *
     * @param options The options to pass to Client.
     */
    constructor(options: AoiOptions) {

        this.client = new Client(options.client)
    }


}