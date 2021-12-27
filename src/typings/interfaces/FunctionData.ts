import { FunctionFieldData } from "./FunctionFieldData"
import { Module } from "./Module"

/**
 * Data held by a function from aoi.ts
 */
export interface FunctionData {
    /**
     * The name of a function, this is what matters for the compiler.
     */
    name: string

    /**
     * What does the function do? State it here.
     */
    description: string

    /**
     * Fields for this function.
     */
    fields?: FunctionFieldData[]

    /**
     * Whether this function uses fields.
     */
    brackets?: boolean

    /**
     * Whether brackets are optional on this function.
     */
    optional?: boolean

    /**
     * Set of examples to retrieve for the user if needed.
     */
    examples?: string[]

    /**
     * Required modules / packages for this function to work.
     */
    requiredModules?: Module[]

    /**
     * Optional modules / packages that may improve performance of this function.
     */
    optionalModules?: Module[]
}