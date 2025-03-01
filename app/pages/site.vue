<script setup lang="ts">
import type { CardProps } from '~/components/partial/Card.vue'

useHead({ title: '站点' })
definePageMeta({ headerText: '一些分享' })

const toolSites: Array<CardProps> = [
    {
        name: 'DeepSeek',
        nameAlt: 'deepseek',
        buttons: [
            { icon: 'ph:planet-duotone', text: '访问', to: 'https://www.deepseek.com' },
            { icon: 'ph:github-logo-duotone', text: 'GitHub', to: 'https://github.com/deepseek-ai' },
        ],
        desc: '一款国产Ai,感觉蛮好用的，喜欢它的开源精神和手机可用的网页端',
    },
    {
        name: 'Thunderbird',
        nameAlt: 'Thunderbird',
        buttons: [
            { icon: 'ph:planet-duotone', text: '访问', to: 'https://www.thunderbird.net/zh-CN' },
            { icon: 'ph:github-logo-duotone', text: 'GitHub', to: 'https://github.com/thunderbird' },
        ],
        desc: '手机电脑均可用，支持一站式打理邮箱账号的一款邮箱APP (Material You 风格)',
    },
    {
        name: 'PiliPlus',
        nameAlt: 'PiliPlus',
        buttons: [
            { icon: 'ph:github-logo-duotone', text: 'GitHub', to: 'https://github.com/bggRGjQaUbCoE/PiliPlus' },
        ],
        desc: '相比较原版的b站优化与拓展了很多功能，简洁好看 (Material You 风格)',
    },
    {
        name: 'Stratum',
        nameAlt: 'Stratum',
        buttons: [
            { icon: 'ph:planet-duotone', text: '访问', to: 'https://stratumauth.com' },
            { icon: 'ph:github-logo-duotone', text: 'GitHub', to: 'https://github.com/stratumauth/app' },
        ],
        desc: '在经历小黄鸭木马病毒风波之后找到的一款2FA认证APP(依旧是 Material You 风格👍)',
    },
    {
        name: '中文网字计划',
        nameAlt: 'chinese-font',
        buttons: [
           { icon: 'ph:planet-duotone', text: '访问', to: 'https://chinese-font.netlify.app/zh-cn' },
           { icon: 'ph:github-logo-duotone', text: 'GitHub', to: 'https://github.com/KonghaYao/chinese-free-web-font-storage' },
        ],
        desc: '免费的中文字体公益 CDN 服务，让中文字体在互联网世界起飞。来自枫落丰源的推荐~',
    },
]

const orgSites: Array<CardProps> = [
    {
        name: '火蝾螈服务器',
        nameAlt: 'Torch Server',
        buttons: [
            { icon: 'ph:planet-duotone', text: '访问', to: 'https://blog.chengai77a6b.top/archives/4' },
        ],
        desc: '由火蝾螈社团和成员们共同运行的服务器,目前已经更新了三代了。腐竹也已经更新了三代(bushi💦,感兴趣的可以加入哦,我们欢迎大家前来游玩',
    },
    {
        name: '邮立方',
        nameAlt: 'Cube of Posts',
        buttons: [
            { icon: 'ph:planet-duotone', text: '访问', to: 'https://cop.cooo.site' },
        ],
        desc: '西安邮电大学校内的 Minecraft 兴趣交流团体，<ZLink to="https://www.mualliance.cn/">Minecraft 高校联盟(MUA)</ZLink>成员，于2023年10月6日对外开放。官网于2024年1月1日建立，并于2024年2月10日升级为博客。',
    },
    {
        name: '方块茶话会',
        nameAlt: 'Block Tea Reception',
        buttons: [
            { icon: 'ph:planet-duotone', text: '访问', to: 'https://btr.thisis.host/' },
        ],
        desc: '宝鸡中学校内的 Minecraft 爱好群体，由 <ZLink icon="ph:github-logo-duotone" to="https://github.com/guuguai/">古古怪怪GuuGuai </ZLink> 于2020年7月17日建立。帮助文档网站于2022年6月12日建立，并于2024年2月21日迁移。',
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
    <ZTitle>好用推荐</ZTitle>
    <ZCardList :data-list="toolSites" />
    <ZTitle>MC广播站</ZTitle>
    <ZCardList :data-list="orgSites" />
</template>

<style lang="scss" scoped>
</style>
