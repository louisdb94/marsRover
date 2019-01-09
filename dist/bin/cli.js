#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer = require("inquirer");
var question = "set size";
inquirer.prompt(question).then(function (answers) {
    console.log(answers);
});
//# sourceMappingURL=cli.js.map