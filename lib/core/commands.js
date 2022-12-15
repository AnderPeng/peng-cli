const { actions } = require('../config/constants')
const program = require('commander')
const path = require('path')

const commands = () => {
    Reflect.ownKeys(actions).forEach((action) => {
        program
            .command(action) // 配置命令名称
            .alias(actions[action].alias) // 配置命令别名
            .description(actions[action].description) // 配置命令描述
            .action(() => {
                if (action === "*") {
                    console.log(actions[action].description) // 匹配不到时
                } else {
                    // 匹配到命令时，获取对应的文件（该文件返回一个函数），并执行该函数
                    // 假设action为create，那么下面的操作就是去导入create.js的函数，并执行它

                    // 简单说明一下process.argv的结构：
                    // [node可执行文件的绝对路径,当前执行文件的路径,其他参数]
                    // 现在具体到 san-cli create myproject，
                    // （由于前面在package.json进行了配置，其实node就可忽略，san-cli代表的就是index.js)
                    //  翻译一下，实际执行的是：node index.js create myproject
                    // 所以process.argv的结构是：
                    // [node， index.js， create， myproject]
                    // 现在通过.slice(3)剔除掉前面三个后就是[myproject]
                    // 最后再解构一下，传入的就是 myproject，也就是写入的项目名称
                    require(path.resolve(__dirname, action))(...process.argv.slice(3))
                }
            })
    })
}

module.exports = commands