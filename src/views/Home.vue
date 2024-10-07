<script lang="ts">
import { Vue, Component } from 'vue-facing-decorator'
import homeMarkdown from '@/assets/home.md'

@Component({})
export default class Home extends Vue {
  md = homeMarkdown;
}
</script>

<template>
  <div class="markdown" v-html="md" />
</template>

<style lang="scss">
@import '@/css/markdown.scss';
@import '@/css/mocha';

</style>
