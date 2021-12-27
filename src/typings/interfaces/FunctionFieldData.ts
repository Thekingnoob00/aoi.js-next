import {FunctionFieldTypes} from "../types/FunctionFieldTypes"

export interface FunctionFieldData {
    /**
     * The name of this field.
     */
    name: string

    /**
     * The description of this field.
     */
    description: string

    /**
     * The type of this field.
     */
    type: FunctionFieldTypes

    /**
     * Whether this field is required.
     */
    required?: boolean

    /**
     * When a channel is needed, this is useful to point to a field's output to get data from that specific value.
     */
    pointer?: number
}