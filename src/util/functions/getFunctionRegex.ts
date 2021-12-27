import { FunctionData } from "../../typings/interfaces/FunctionData";

export default function(fn: FunctionData) {
    if (!fn.brackets) {
        return `\\${fn.name}`
    } else {
        return `\\${fn.name}(\\[(.*)\\])${fn.optional ? '?' : ''}`
    }
}