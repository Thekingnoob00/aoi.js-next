import {AoiClient} from "./AoiClient";

/**
 * Stores commands for the Client.
 */
export class AoiCommandManager {
    #client: AoiClient

    constructor(client: AoiClient) {
        this.#client = client
    }
}