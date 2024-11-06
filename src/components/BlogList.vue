<script lang="ts">
import { dataHost } from '@/logic/config'
import { router } from '@/router'
import { Component, Vue } from 'vue-facing-decorator'

@Component({ components: {} })
export default class BlogList extends Vue {
  li = [] as string[]

  created() {
    fetch(dataHost + 'list.json')
      .then((it) => it.text())
      .then((it) => {
        this.li = JSON.parse(it)
      })
  }

  push(name: string) {
    router.push({ path: `/docs/${name}` })
  }
}
</script>

<template>
  <div class="blog-list">
    <div class="blog" v-for="l of li" :key="l">
      <h1 class="blog-title" v-on:click="push(l)">{{ l }}</h1>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '@/css/mocha';

.blog-list {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: start;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1rem;

  .blog {
    width: 100%;
    height: fit-content;
    display: block;
    margin: 0 auto;
    border-bottom: 1px solid $rosewater;
    border-top: 1px solid $rosewater;
    padding: 2rem;

    h1 {
      font-size: 1.6rem;
      font-weight: bold;
      color: $text;
    }
  }
}
</style>
