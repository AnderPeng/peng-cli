const program = require('commander')
const { actions } = require('../config/constants')  // 导入所有注册的命令

const helpOptions = () => {
    program.on("--help", () => {
        console.log("\nExamples:")			      // 依次遍历打印所有命令的例子
        Reflect.ownKeys(actions).forEach((action) => {
            actions[action].examples.forEach((example) => {
                console.log(example)
            })
        })
    })
}

module.exports = helpOptions