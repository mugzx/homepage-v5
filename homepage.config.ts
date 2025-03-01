// 存储 nuxt.config 和 app.config 共用的配置

import type { NitroConfig } from 'nitropack'

const author = {
    name: 'Mugzx',
    avatar: 'https://mumu.s3.bitiful.net/me.avif',
    email: 'lunar@mugzx.top',
    homepage: 'https://www.mugzx.top',
}

const homepageConfig = {
    title: 'Mugzx🌏 (@Mugzx)',
    subtitle: '希望,寄托在你们身上。',
    description: 'Mugzx 目前还是一名形而上学的马克思主义者,这是他的个人主页。该个人主页简洁美观,为读者提供了卓越的阅读体验。',
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