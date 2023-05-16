"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.use_emoji = void 0;
function use_emoji(emoji) {
    return {
        label: emoji.cz + " " + emoji.emoji + " " + emoji.description,
        code: emoji.code,
        emoji: emoji.cz + " " + emoji.emoji,
        description: "[" + emoji.name + "]",
    };
}
exports.use_emoji = use_emoji;
