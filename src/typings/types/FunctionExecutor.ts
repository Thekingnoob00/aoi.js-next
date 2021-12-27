import { Async } from "./Async";

export type FunctionExecutor = (this: unknown) => Async<unknown>