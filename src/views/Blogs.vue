<script lang="ts">
import { Vue, Component } from 'vue-facing-decorator';
import BlogList from '@/components/BlogList.vue'

@Component({components: {BlogList}})
export default class Blogs extends Vue{}
</script>

<template>
  <BlogList/>
  <hr>
  <p>你已经翻到底啦</p>
</template>

<style scoped lang="scss">

</style>