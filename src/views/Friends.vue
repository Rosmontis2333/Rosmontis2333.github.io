<script lang="ts">
import FriendList from '@/components/FriendList.vue';
import { Vue, Component } from 'vue-facing-decorator';
import friendMarkdown from '@/assets/friends.md';

@Component({components: {FriendList}})
export default class Friends extends Vue {
  md = friendMarkdown;
}
</script>

<template>
  <FriendList />
  <div class="markdown" v-html="md" />
</template>

<style lang="scss">
@import '@/css/markdown.scss';
</style>