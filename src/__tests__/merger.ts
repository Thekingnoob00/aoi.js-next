import { Util } from "../util/Util"

const curr = {
    tmr: {
        owo: false
    }
}

const source = {
    intents: [],
    tmr: {
        owa: true
    }
}

console.log(
    Util.mergeDefault(curr, source)
)