<script setup lang="ts">
import type { CardProps } from '~/components/partial/Card.vue'
import { ZLink } from '#components'

useHead({ title: '站点' })
definePageMeta({ headerText: '一些分享' })

const toolSites: Array<CardProps> = [
    {
        name: 'PiliPlus',
        nameAlt: 'bggRGjQaUbCoE',
        buttons: [
            { icon: 'ph:github-logo-duotone', text: 'GitHub', to: 'https://github.com/bggRGjQaUbCoE/PiliPlus' },
        ],
        desc: '开源的BiliBili第三方客户端，由Flutter开发，使用Material You设计语言。',
    },
    {
        name: 'Stratum',
        nameAlt: 'Authenticator Pro',
        buttons: [
            { icon: 'ph:planet-duotone', text: '访问', to: 'https://stratumauth.com/' },
            { icon: 'ph:github-logo-duotone', text: 'GitHub', to: 'https://github.com/stratumauth/app' },
        ],
        desc: '开源的双因素验证（2FA）应用，使用Material You设计语言。',
    },
    {
        name: '中文网字计划',
        nameAlt: 'chinese-font',
        buttons: [
            { icon: 'ph:planet-duotone', text: '访问', to: 'https://chinese-font.netlify.app/zh-cn' },
            { icon: 'ph:github-logo-duotone', text: 'GitHub', to: 'https://github.com/KonghaYao/chinese-free-web-font-storage' },
        ],
        desc: '免费的中文字体公益 CDN 服务，让中文字体在互联网世界起飞。来自枫落丰源的推荐。',
    },

]

const orgSites: Array<CardProps> = [
    {
        name: '火蝾螈服务器',
        nameAlt: 'Torch Server',
        buttons: [
            { icon: 'ph:planet-duotone', text: '访问', to: 'https://www.chengai77a6b.top/2025/03/27/%E6%9C%8D%E5%8A%A1%E5%99%A8%E4%BB%8B%E7%BB%8D' },
        ],
        desc: '由火蝾螈社团和成员们共同运行的服务器，目前已经更新了三代了。感兴趣的可以加入哦，我们欢迎大家前来游玩。',
    },
    {
        name: '邮立方',
        nameAlt: 'Cube of Posts',
        buttons: [
            { icon: 'ph:planet-duotone', text: '访问', to: 'https://cop.cooo.site' },
        ],
        desc: () => h('div', [
            '西安邮电大学校内的Minecraft兴趣交流团体，',
            h(ZLink, { to: 'https://www.mualliance.cn/' }, 'Minecraft高校联盟(MUA)'),
            '成员，于2023年10月6日对外开放。官网于2024年1月1日建立，并于2024年2月10日升级为博客。',
        ]),
    },
    {
        name: '方块茶话会',
        nameAlt: 'Block Tea Reception',
        buttons: [
            { icon: 'ph:planet-duotone', text: '访问', to: 'https://btr.thisis.host/' },
        ],
        desc: () => h('div', [
            '宝鸡中学校内的Minecraft爱好群体，由',
            h(ZLink, { icon: 'ph:github-logo-duotone', to: 'https://github.com/guuguai/' }, '古古怪怪GuuGuai'),
            '于2020年7月17日建立。帮助文档网站于2022年6月12日建立，并于2024年2月21日迁移。',
        ]),
    },
    {
        name: '相侵相碍异家人',
        nameAlt: 'Alien Family Hub',
        buttons: [
            { icon: 'ph:planet-duotone', text: '访问', to: 'https://alienfamily.us.kg/' },
        ],
        desc: 'Hexo博客交流群“糖果屋”的群友组织的Minecraft服务器，于2024年7月18日建群。2025年2月2日创建了成员列表页面。',
    },
]
</script>

<template>
    <ZTitle>自用推荐</ZTitle>
    <ZCardList :data-list="toolSites" />
    <ZTitle>MC广播站</ZTitle>
    <ZCardList :data-list="orgSites" />
</template>

<style lang="scss" scoped></style>
