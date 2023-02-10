const { promisify } = require("util")  // 转为异步
const download = promisify(require("download-git-repo"))
const ora = require('ora') // 可视加载
const inquirer = require("inquirer") // 交互
const repoMap = require("../config/repoMap") // 仓库地址映射

// 询问1：选择框架
const useFrame = () => {
    return inquirer.prompt([
        {
            type: "list",
            name: "frame",  // 交互结果会放在这个字段中
            message: "chose frame：",
            default: 0,
            choices: [
                { value: 1, name: "Vue" },
                { value: 2, name: "React" },
            ],
        }
    ])
}

// 询问2：选择语言
const useLang = () => {
    return inquirer.prompt([
        {
            type: "list",
            name: "lang",
            message: "chose lang：",
            default: 0,
            choices: [
                { value: 1, name: "JavaScript" },
                { value: 2, name: "TypeScript" },
            ],
        }
    ])
}

// 询问3：选择模板
const useTemplate = () => {
    return inquirer.prompt([
        {
            type: "list",
            name: "template",
            message: "chose template",
            default: 0,
            choices: [
                { value: 1, name: "Nuxt3" },
                { value: 2, name: "admin" },
            ],
        }
    ])
}

const getResult = async () => {
    // 当使用框架时，让用户选择
    const frame = await useFrame()
    const lang = await useLang()
    const template = await useTemplate()
    return `${frame.frame}${lang.lang}${template.template}`
}

const createProjectAction = async (projectName) => {
    const result = await getResult()
    const spinner = ora('Fetch...').start(); // 开始可视加载
    console.log('下载地址', repoMap[result]);
    // 传入仓库地址，项目名称，配置
    await download(repoMap[result], projectName).then(() => {
        spinner.succeed("success!")			// 结束可视加载
        console.log(`- cd ${projectName}`)
        console.log("- npm install     -- to install dependencies")
        console.log("- npm start       -- to run the project")
        console.log("- npm run build   -- to build the project")
    }).catch((error) => {
        console.log('error', error);
        spinner.fail("error!", error)			// 结束可视加载
    })
}

module.exports = createProjectAction