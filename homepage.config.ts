// 存储 nuxt.config 和 app.config 共用的配置

import type { NitroConfig } from 'nitropack'

const author = {
    name: 'Mugzx',
    avatar: 'https://weavatar.com/avatar/b89a1ad5b1f97dbc13e32aa64c3112cdf518cf5d45d462a45edbad84d2cbd337?s=460',
    email: 'lunar@mugzx.top',
    homepage: 'https://www.mugzx.top',
}

const homepageConfig = {
    title: 'Mugzx🌏 (@Mugzx)',
    subtitle: '向上革命，向下实践。',
    description: 'Mugzx 是一名坚定的马克思列宁主义者,这是他的个人主页。该个人主页简洁美观,为读者提供了卓越的阅读体验。',
    author,
    language: 'zh-CN',
    timezone: 'Asia/Shanghai',
    favicon: '/icon.png',
    url: 'https://www.mugzx.top',
    blogAtom: 'https://blog.mugzx.top/atom.xml',
}

// https://nitro.build/config#routerules
export const routeRules = <NitroConfig['routeRules']>{
    '/api/avatar.png': { redirect: author.avatar },
    '/api/icon.png': { redirect: homepageConfig.favicon },
}

export default homepageConfig
