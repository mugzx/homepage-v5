<script setup lang="ts">
useHead({ title: '' })
definePageMeta({
    alias: ['/'],
    title: '主页',
})
const appConfig = useAppConfig()
</script>

<template>
    <ZhiluAvatar class="avatar" />
    <div class="wrapper">
        <ZField label="<span style='font-size: 3rem;'>👋</span>">
            <h1 style="font-size: 3rem;">
                你好，<br>我是<mark>{{ appConfig.author.name }}</mark>
            </h1>
            <p class="desc">
                {{ appConfig.subtitle }}
            </p>
            <div>
                <ZButton icon="ph:files-duotone" to="https://blog.mugzx.top" primary>
                    博客
                </ZButton>
                <ZButton icon="ph:github-logo-duotone" to="https://github.com/mugzx">
                    GitHub
                </ZButton>
            </div>
        </ZField>

        <ZField label="介绍">
            <p>
                <!-- eslint-disable-next-line vue/singleline-html-element-content-newline -->
                欢迎来到我的主页！
            </p>
        </ZField>

        <ZField label="近期活动">
            <p>
                <!-- eslint-disable-next-line vue/singleline-html-element-content-newline -->
              2~3月增设了一些功能站点，并且开始重筑项目，优化推送
            </p>
            <p>
                <!-- eslint-disable-next-line vue/singleline-html-element-content-newline -->
              2025 年 1 月重建了<ZLink to="https://blog.mugzx.top">博客</ZLink>，还在不断修改中...
            </p>
        </ZField>
        <ZField label="一些声明">
            <p>
            <ZLink to="https://github.com/L33Z22L11/homepage-v5">Nuxt.js 开源个人主页</ZLink> <ZLink to="https://icp.gov.moe/?keyword=20258800">萌ICP备20258800号</ZLink>
            </p>
        </ZField>
    </div>
</template>

<style lang="scss" scoped>
.avatar {
    position: fixed;
    opacity: 0.2;
    top: 0;
    right: 20vw;
    margin-right: -0.4em;
    font-size: min(100vw, 60vh);
    z-index: -1;
}

.desc {
    margin: 1rem 0;
    font-size: 1.5rem;
    color: var(--c-text-2);
}
</style>
