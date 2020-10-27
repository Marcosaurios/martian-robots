"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Entry point of the program
const file_1 = __importDefault(require("./utils/file"));
const init_1 = __importDefault(require("./utils/init"));
function main() {
    // Sanitize input and output
    const { input, output } = init_1.default(process.argv.slice(2));
    console.log('Input is ', input);
    console.log('Output is ', output);
    // Read file
    const file = file_1.default(input);
    console.log(file);
    // read file
    // load
}
main();
