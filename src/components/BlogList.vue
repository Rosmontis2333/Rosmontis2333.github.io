<script lang="ts">
import BlogCard from '@/components/BlogCard.vue'
import { Vue, Component } from 'vue-facing-decorator'
import { Blog } from '@/logic/data'
import blogs from '@/data/blogs.json'

@Component({components: {BlogCard}})
export default class BlogList extends Vue{
  li = [] as Blog[]

  mounted() {
    this.li= blogs as Blog[]
  }
}
</script>

<template>
<div class="blog-list">
  <BlogCard v-for="l of li" :key="l.tittle" :tittle="l.tittle" :brief="l.brief" :image="l.image" :url="l.url" />
</div>
</template>

<style scoped lang="scss">
.blog-list {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: start;
  flex-direction: row;
  flex-wrap: wrap;
  gap:1rem;
}
</style>