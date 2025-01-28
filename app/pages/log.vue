<script setup lang="ts">
import { ZhiluIcon, ZhiluIconOld } from '#components'

useHead({ title: '日志' })
definePageMeta({ headerText: '互联网上的活动记录' })
const timeline = {
    '2077-05-24': '未完待续...',
    '2025-05-24': '活到了小时候谎报的年纪了,祝自己16岁生日快乐!',
    '2025-01-25': '更换主页',
    '2025-01-24': '博客重建成功',
}
</script>

<template>
    <div class="timeline wrapper">
        <div v-for="(content, date) in timeline" :key="date" class="timeline-item">
            <div class="timeline-item-date">
                {{ date }}
            </div>
            <p v-if="typeof content === 'string'" class="timeline-item-content" v-html="content" />
            <p v-else class="timeline-item-content">
                <component :is="content" />
            </p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.timeline {
    position: relative;
    width: fit-content;
    padding-left: 1em;

    &::before {
        content: "";
        position: absolute;
        top: 0.5em;
        bottom: 0;
        left: 0;
        width: 4px;
        background-color: var(--c-bg-2);
    }
}

.timeline-item {
    display: grid;
    justify-items: start;
    gap: 4px;
    margin: 0.5em 0;

    .timeline-item-date {
        font-size: 0.8em;
        color: var(--c-text-2);
    }

    .timeline-item-content {
        padding: 0.5em 0.8em;
        border-radius: 0.5em;
        background-color: var(--c-bg-2);
    }
}

@container (min-width: $breakpoint-mobile) {
    .timeline-item {
        grid-column-gap: 1em;
        grid-template-areas: "date content";
        grid-template-columns: 1fr 1fr;

        .timeline-item-date {
            grid-area: date;
        }

        .timeline-item-content {
            grid-area: content;
            padding: 0.5em 1em;
        }
    }
}
</style>
