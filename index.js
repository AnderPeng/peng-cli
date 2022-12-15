#!/usr/bin/env node

const program=require('commander')
const helpOptions=require('./lib/core/help')
const { version } = require("./lib/config/constants")

const commands=require('./lib/core/commands')

program.version(version,'-v,--version') //设置版本命令

helpOptions() // 设置help命令
commands()

program.parse(process.argv);   // 最后需要执行下这条才会生效（！）