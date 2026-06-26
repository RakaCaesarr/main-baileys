"use strict";

const clearConsole = () => {
  process.stdout.write(
    process.platform === "win32" ? "\x1B[2J\x1B[0f" : "\x1B[2J\x1B[3J\x1B[H"
  );
};

clearConsole();

process.stdout.write(`
\x1b[38;2;255;0;0m ██████╗░░█████╗░██╗░░██╗░█████╗░\x1b[0m
\x1b[38;2;255;60;0m ██╔══██╗██╔══██╗██║░██╔╝██╔══██╗\x1b[0m
\x1b[38;2;255;140;0m ██████╔╝███████║█████═╝░███████║\x1b[0m
\x1b[38;2;255;220;0m ██╔══██╗██╔══██║██╔═██╗░██╔══██║\x1b[0m
\x1b[38;2;160;255;0m ██║░░██║██║░░██║██║░╚██╗██║░░██║\x1b[0m
\x1b[38;2;0;255;80m ╚═╝░░╚═╝╚═╝░░╚═╝╚═╝░░╚═╝╚═╝░░╚═╝\x1b[0m

\x1b[38;2;0;255;200m ░█████╗░░█████╗░███████╗░██████╗░█████╗░██████╗░\x1b[0m
\x1b[38;2;0;200;255m ██╔══██╗██╔══██╗██╔════╝██╔════╝██╔══██╗██╔══██╗\x1b[0m
\x1b[38;2;0;100;255m ██║░░╚═╝███████║█████╗░░╚█████╗░███████║██████╔╝\x1b[0m
\x1b[38;2;80;0;255m ██║░░██╗██╔══██║██╔══╝░░░╚═══██╗██╔══██║██╔══██╗\x1b[0m
\x1b[38;2;180;0;255m ╚█████╔╝██║░░██║███████╗██████╔╝██║░░██║██║░░██║\x1b[0m
\x1b[38;2;255;0;180m ░╚════╝░╚═╝░░╚═╝╚══════╝╚═════╝░╚═╝░░╚═╝╚═╝░░╚═╝\x1b[0m

\x1b[38;2;255;0;0m ❯❯ Recode    : Raka Caesar\x1b[0m
\x1b[38;2;0;255;0m ❯❯ WhatsApp  : +62 896-1509-3232\x1b[0m
\x1b[38;2;33;150;243m ❯❯ Telegram  : @RakaCaesarr\x1b[0m
\x1b[38;2;255;220;0m ᡣ𐭩 Terima kasih sudah menggunakan baileys Raka\x1b[0m
`);

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeWASocket = void 0;
const Socket_1 = __importDefault(require("./Socket"));
exports.makeWASocket = Socket_1.default;
__exportStar(require("../WAProto"), exports);
__exportStar(require("./Utils"), exports);
__exportStar(require("./Types"), exports);
__exportStar(require("./Store"), exports);
__exportStar(require("./Defaults"), exports);
__exportStar(require("./WABinary"), exports);
__exportStar(require("./WAM"), exports);
__exportStar(require("./WAUSync"), exports);

exports.default = Socket_1.default;
