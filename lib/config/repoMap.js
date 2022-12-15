const getReportUrl = (name) => {
    return `direct:https://github.com/san-cli/${name}.git#main`
} // 可以通过#xxx来指明分支

const vueTsRepo = getReportUrl('vue-ts')
const vueJSRepo = getReportUrl('vue-js')
const reactJSRepo = getReportUrl('react-js')
const reactTsRepo = getReportUrl('react-ts')
const tsRepo = getReportUrl('ts')

// 由于是根据用户的交互结果来下载某个模板的
// 前面的key就是用户交互的结果，我要根据答案给用户提供模板
// 我这边设置的是：
// - 是否使用模板 0|无模板 1|vue 2|react
// - 使用的语言： 1|js    2|ts
// 这个比较灵活，根据自身需求写就行
const repoMap = {
    '02': tsRepo,
    '11': vueJSRepo,
    '12': vueTsRepo,
    '21': reactJSRepo,
    '22': reactTsRepo
}

module.exports = repoMap