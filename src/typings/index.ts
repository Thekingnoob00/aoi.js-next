import type {
    ApplicationCommand,
    ApplicationCommandOption,
    BitFieldResolvable,
    Channel,
    Client,
    ClientOptions,
    DMChannel,
    Guild,
    GuildMember,
    IntentsString,
    Interaction,
    Message,
    MessageReaction,
    PartialDMChannel,
    Presence,
    PresenceData,
    PresenceStatusData,
    Role,
    Sticker,
    ThreadChannel,
    ThreadMember,
    User,
    VoiceState,
    Webhook,
    WebhookClient
} from "discord.js";

/**
 * The options for the bot.
 */
export interface AoiOptions {
    /**
     * Options for the discord.js client.
     */
    client: ClientOptions
}