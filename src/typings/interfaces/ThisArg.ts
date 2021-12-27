import { AoiClient } from "../../core/AoiClient";
import { Container } from "../../structures/Container";
import { Context } from "../../structures/Context";
import { Function } from "../../structures/Function";

export interface ThisArg<T = unknown> {
    function: Function
    context: Context<T>
    bot: AoiClient
    container: Container
}