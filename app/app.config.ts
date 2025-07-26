import type { Nav } from '~/types/nav'
// 此组件暂无实际用法，目前先阻止其执行
// import { h } from 'vue'
import homepageConfig from '~~/homepage.config'

// 图标查询：https://yesicon.app/ph
// 图标插件：https://marketplace.visualstudio.com/items?itemName=antfu.iconify

export default defineAppConfig({
    ...homepageConfig,

    footer: {
        copyright: `© ${new Date().getFullYear()} Mugzx`,
        message: '',
    },

    nav: [
        {
            title: '',
            items: [
                { icon: 'ph:house-duotone', text: '个人介绍', url: '/' },
                { icon: 'ph:pen-nib-duotone', text: '驻站笔记', url: '/article' },
                // { icon: "ph:pen-nib-duotone", text: "文章", url: "https://blog.mugzx.top", external: true },
                // { icon: 'ph:code-duotone', text: '项目', url: '/project' },
                { icon: 'ph:globe-duotone', text: '站点分享', url: '/site' },
                { icon: 'ph:files-duotone', text: '活动日志', url: '/log' },
            ],
        },
        {
            title: '社交',
            items: [
                { icon: 'basil:qq-outline', text: 'MC交流电台', url: 'https://qm.qq.com/q/lbtoWDPpZu', external: true },
                { icon: 'ph:github-logo-duotone', text: 'Github', url: 'https://github.com/mugzx', external: true },
            ],
        },
    ] satisfies Nav,

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
