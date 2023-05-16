"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
var vscode = require("vscode");
var util_1 = require("./config/util");
var git_emoji_zh_1 = require("./config/git_emoji_zh");
function activate(context) {
    var disposable = vscode.commands.registerCommand("extension.gitEmoji", function (uri) {
        var git = getGitExtension();
        if (!git) {
            vscode.window.showErrorMessage("无法加载git插件!请先安装git插件!");
            return;
        }
        var methodKey = context.globalState.get("display_method", "default");
        var items = git_emoji_zh_1.default.map(util_1.display_method[methodKey]);
        vscode.window.showQuickPick(items).then(function (selected) {
            if (selected) {
                vscode.commands.executeCommand("workbench.view.scm");
                if (uri) {
                    var selectedRepository = git.repositories.find(function (repository) {
                        return repository.rootUri.path === uri.rootUri.path;
                    });
                    if (selectedRepository) {
                        prefixCommit(selectedRepository, selected.emoji);
                    }
                }
                else {
                    for (var _i = 0, _a = git.repositories; _i < _a.length; _i++) {
                        var repo = _a[_i];
                        prefixCommit(repo, selected.emoji);
                    }
                }
            }
        });
    });
    vscode.commands.registerCommand("extension.switching", function (uri) {
        var items = [];
        for (var key in util_1.display_method) {
            items.push(key);
        }
        vscode.window.showQuickPick(items).then(function (res) {
            context.globalState.update("display_method", res);
        });
    });
    context.subscriptions.push(disposable);
}
exports.activate = activate;
function prefixCommit(repository, prefix) {
    repository.inputBox.value !== ""
        ? ((repository.inputBox.value = ""),
            (repository.inputBox.value = "" + prefix + repository.inputBox.value))
        : (repository.inputBox.value = "" + prefix + repository.inputBox.value);
}
function getGitExtension() {
    var vscodeGit = vscode.extensions.getExtension("vscode.git");
    var gitExtension = vscodeGit && vscodeGit.exports;
    return gitExtension && gitExtension.getAPI(1);
}
function deactivate() { }
exports.deactivate = deactivate;
