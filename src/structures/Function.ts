import option from "../util/functions/option";
import { FunctionData } from "../typings/interfaces/FunctionData";
import { Option } from "../typings/types/Option";

export class Function {
    data: FunctionData

    inside = option<string>()

    fields = option<string[]>()

    constructor(data: FunctionData) {
        this.data = data
    }

    setInside(str: string) {
        this.inside = str
        return this
    }

    setFields(fields: string[]) {
        this.fields = fields
        return this
    }
}