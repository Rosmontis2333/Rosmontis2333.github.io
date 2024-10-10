<script lang="ts">
import { Vue, Component } from 'vue-facing-decorator'
import ArticleMarkdown from '@/assets/articles/Markdown文件与Blog实现.md';
@Component({})
export default class Article extends Vue {
    md = ArticleMarkdown;
}
</script>

<template>
  <div v-html="md"></div>
</template>

<style scoped lang="scss">
@import '@/css/markdown.scss';
@import '@/css/mocha';
</style>