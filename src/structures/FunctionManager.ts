import { Collection } from "discord.js";
import { readdirSync } from "fs";
import { FunctionData } from "../typings/interfaces/FunctionData";
import getFunctionRegex from "../util/functions/getFunctionRegex";
import option from "../util/functions/option";

class FunctionManager {
    nativeFunctions = new Collection<string, FunctionData>()

    #regex = option<RegExp>()

    constructor() {
        this.#loadNativeFunctions()
    }

    get regex() {
        if (!this.#regex) {
            this.#regex = new RegExp(`(${this.nativeFunctions.map(f => getFunctionRegex(f)).join('|')})`, 'g')
        }

        return this.#regex
    }

    #loadNativeFunctions() {
        const files = readdirSync(__dirname + `/../functions/`).filter(c => c.endsWith('.js'))

        for (let i = 0, len = files.length;i < len;i++) {
            const data = require(`../functions/${files[i]}`).default as FunctionData

            this.nativeFunctions.set(data.name, data)
        }
    }

    matches(str: string): ReturnType<String["matchAll"]> {
        return str.matchAll(this.regex)
    }
}

/**
 * Do not assing this anywhere, you can statically require and use it.
 * This is cached by the process.
 */
export default new FunctionManager()