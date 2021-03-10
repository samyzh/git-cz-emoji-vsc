"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.display_method = void 0;
var use_label_1 = require("./use_label");
var use_emoji_1 = require("./use_emoji");
var only_cz_1 = require("./only_cz");
exports.display_method = {
    default: use_emoji_1.use_emoji,
    "cz with emoji mode": use_emoji_1.use_emoji,
    "cz with code mode": use_label_1.use_label,
    "only cz mode": only_cz_1.only_cz,
};
