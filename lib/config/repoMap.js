const getReportUrl = (name) => {
    if (name === 'vue-ts-nuxt3') {
        return `direct:https://github.com/AnderPeng/Nuxt3-ArcoDesign.git#main` 
    }
}

// 由于是根据用户的交互结果来下载某个模板的
// 前面的key就是用户交互的结果，我要根据答案给用户提供模板
// 我这边设置的是：
// - 是否使用模板 0|无模板 1|vue 2|react
// - 使用的语言： 1|js    2|ts
// 这个比较灵活，根据自身需求写就行
const repoMap = {
    '111': getReportUrl('vue-js-nuxt3'),
    '112': getReportUrl('vue-js-admin'),
    '121': getReportUrl('vue-ts-nuxt3'),
    '122': getReportUrl('vue-ts-admin'),
    '211': getReportUrl('react-js-nuxt3'),
    '212': getReportUrl('react-js-admin'),
    '221': getReportUrl('react-ts-nuxt3'),
    '222': getReportUrl('react-ts-admin')
}

module.exports = repoMap