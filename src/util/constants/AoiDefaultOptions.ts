import {AoiOptions} from "../../typings/interfaces/AoiOptions";

export const AoiDefaultOptions: AoiOptions = {
    client: {
        intents: [
            "GUILDS",
            "GUILD_MESSAGES"
        ]
    },
    intents: []
}