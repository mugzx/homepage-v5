import type { Nav } from '~/types/nav'
import homepageConfig from '~~/homepage.config'

export default defineAppConfig({
    ...homepageConfig,

    footer: {
        copyright: `© ${new Date().getFullYear()} 木姜丝_Mugzx`,
        message: 'aka mugzx',
    },

    nav: <Nav>[
        {
            title: '',
            items: [
                { icon: 'ph:house-duotone', text: '主页', url: '/' },
                { icon: 'ph:pen-nib-duotone', text: '文章', url: '/article' },
                // { icon: "ph:pen-nib-duotone", text: "文章", url: "https://blog.mugzx.top", external: true },
                // { icon: "ph:code-duotone", text: "项目", url: "/project" },
                { icon: 'ph:code-duotone', text: '项目', url: 'https://github.com/mugzx', external: true },
                { icon: 'ph:globe-duotone', text: '站点', url: '/site' },
                { icon: 'ph:files-duotone', text: '日志', url: '/log' },
            ],
        },
        {
            title: '社交',
            items: [
                { icon: 'basil:qq-outline', text: '群: 938973313', url: 'https://qm.qq.com/q/lbtoWDPpZu', external: true },
                { icon: 'ph:github-logo-duotone', text: 'Github', url: 'https://github.com/mugzx', external: true },
                { icon: 'ph:telegram-logo-duotone', text: 'Telegram', url: 'https://t.me/mugzx', external: true },
            ],
        },
    ],

    themes: {
        light: {
            icon: 'ph:sun-duotone',
            tip: '浅色模式',
        },
        system: {
            icon: 'ph:monitor-duotone',
            tip: '跟随系统',
        },
        dark: {
            icon: 'ph:moon-duotone',
            tip: '深色模式',
        },
    },
})
