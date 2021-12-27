import { ThisArg } from "../interfaces/ThisArg";
import { Async } from "./Async";

export type FunctionExecutor<T = unknown> = (this: ThisArg<T>) => Async<unknown>