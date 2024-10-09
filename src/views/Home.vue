<script lang="ts">
import homeMarkdown from '@/assets/home.md'
import { Component, Vue } from 'vue-facing-decorator'

@Component({})
export default class Home extends Vue {
  md = homeMarkdown
}
</script>

<template>
  <div class="markdown" v-html="md" />
</template>

<style lang="scss">
@import '@/css/markdown.scss';
@import '@/css/mocha';
</style>
