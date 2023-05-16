"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.use_label = void 0;
function use_label(emoji) {
    return {
        label: emoji.cz + " " + emoji.code + " " + emoji.description,
        code: emoji.code,
        emoji: emoji.cz + " " + emoji.code,
        description: "[" + emoji.name + "]",
    };
}
exports.use_label = use_label;
