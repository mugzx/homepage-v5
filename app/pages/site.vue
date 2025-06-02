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
        desc: '一款国产Ai，感觉蛮好用的，喜欢它的开源精神和手机可用的网页端',
    },
    {
        name: 'Thunderbird',
        nameAlt: 'Thunderbird',
        buttons: [
            { icon: 'ph:planet-duotone', text: '访问', to: 'https://www.thunderbird.net/zh-CN' },
            { icon: 'ph:github-logo-duotone', text: 'GitHub', to: 'https://github.com/thunderbird' },
        ],
        desc: '在b站上看到的一款app，开源无广告，能一站式打理邮箱账号，颜值还高',
    },
    {
        name: 'PiliPlus',
        nameAlt: 'PiliPlus',
        buttons: [
            { icon: 'ph:github-logo-duotone', text: 'GitHub', to: 'https://github.com/bggRGjQaUbCoE/PiliPlus' },
        ],
        desc: '相比较原版臃肿不堪的b站更加简洁好看，功能也都还在不断的完善中...',
    },
    {
        name: 'Stratum',
        nameAlt: 'Authenticator Pro',
        buttons: [
           { icon: 'ph:planet-duotone', text: '访问', to: 'https://stratumauth.com/' },
           { icon: 'ph:github-logo-duotone', text: 'GitHub', to: 'https://github.com/stratumauth/app' },
        ],
        desc: '经历过木马病毒后找到的一款 2FA app，与前两者同样使用Material You设计语言',
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
            { icon: 'ph:planet-duotone', text: '访问', to: 'https://www.chengai77a6b.top/2025/03/27/%E6%9C%8D%E5%8A%A1%E5%99%A8%E4%BB%8B%E7%BB%8D' },
        ],
        desc: '由火蝾螈社团和成员们共同运行的服务器，目前已经更新了三代了。腐竹也已经更新了三代(bushi💦，感兴趣的可以加入哦，我们欢迎大家前来游玩',
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
