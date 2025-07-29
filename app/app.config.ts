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

    // 用于在主页展示下游引用
    fork: [
        {
            img: 'https://image.m-c.top/?/images/2024/07/21/iyt3mhQCDe/b_a3f6e95501bcc4ce64c19c63a1211bcd.png',
            link: 'https://oio.mckfs.com/',
            text: 'Oiolosse MC服',
        },
        {
            img: 'https://api-space.tnxg.top/avatar?s=qq',
            link: 'https://tnxg.top/',
            text: '天翔TNXG',
        },
        {
            img: 'https://ykc.im/icon.png',
            link: 'https://ykc.im/',
            text: 'York Chou',
        },
        {
            img: 'https://www.xxfer.cn/icon.png',
            link: 'https://www.xxfer.cn/',
            text: '小李同学',
        },
        {
            img: 'https://q1.qlogo.cn/g?b=qq&nk=1043865083&s=2',
            link: 'https://www.xlenco.top/',
            text: 'Xlenco',
        },
        {
            img: 'https://www.mugzx.top/icon.png',
            link: 'https://www.mugzx.top/',
            text: 'Mugzx',
        },
        {
            img: 'https://cn.cravatar.com/avatar/1F6C8947D35A8186A1647009BA8BC5F2?size=256',
            link: 'https://www.kemiao.online/',
            text: '克喵爱吃卤面',
        },
        {
            img: 'https://q1.qlogo.cn/g?b=qq&nk=3310149631&s=2',
            link: 'https://gr114.com/',
            text: 'GreenRoc',
        },
    ],

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
