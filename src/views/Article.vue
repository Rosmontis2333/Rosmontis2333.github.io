<script lang="ts">
import { Vue, Component } from 'vue-facing-decorator'
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