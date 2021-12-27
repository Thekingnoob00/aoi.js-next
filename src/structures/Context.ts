import { Interaction, Message } from "discord.js"

/**
 * The context stores a class from discord.js.
 */
export class Context<T> {
    data: T

    constructor(data: T) {
        this.data = data
    }

    isMessage(): this is Context<Message> {
        return this.data instanceof Message
    }

    isInteraction(): this is Context<Interaction> {
        return this.data instanceof Interaction
    }
}