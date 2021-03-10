"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.only_cz = void 0;
function only_cz(emoji) {
    return {
        label: emoji.cz + " " + emoji.description,
        code: emoji.code,
        emoji: emoji.cz + " ",
        description: "[" + emoji.name + "]",
    };
}
exports.only_cz = only_cz;
