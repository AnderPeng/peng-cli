// 01 获取版本信息
const { version } = require('../../package.json')

// 02 配置所有需要的命令。写法是commander规定的，具体可在官网查看
const actions = {
    create: {  // create 命令，会通过`san-cli create`执行
        alias: "c", // 别名
        description: "create a project", //描述
        examples: ["peng-cli create <project-name>"],
    },
    "*": {     // 其他没有被匹配的命令
        alias: "",
        description: "command not found",
        examples: [],
    },
}

module.exports = {
    version,
    actions
}