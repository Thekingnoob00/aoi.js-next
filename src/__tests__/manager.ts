import FunctionManager from "../structures/FunctionManager";

console.log(
    FunctionManager,
    FunctionManager.regex,
    FunctionManager.matches(`
    $authorID
    `).next()
)