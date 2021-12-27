<<<<<<< HEAD
import { ThisArg } from "../interfaces/ThisArg";
import { Async } from "./Async";
=======
import {Async} from "./Async";
>>>>>>> 2885c34042a128338948636260a11fe138f91c47

export type FunctionExecutor<T = unknown> = (this: ThisArg<T>) => Async<unknown>