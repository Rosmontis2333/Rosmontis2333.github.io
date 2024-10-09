<script lang="ts">
import friendMarkdown from '@/assets/friends.md'
import FriendList from '@/components/FriendList.vue'
import { Component, Vue } from 'vue-facing-decorator'

@Component({ components: { FriendList } })
export default class Friends extends Vue {
  md = friendMarkdown
}
</script>

<template>
  <FriendList />
  <hr />
  <div class="markdown" v-html="md" />
</template>

<style lang="scss">
@import '@/css/markdown.scss';
</style>
