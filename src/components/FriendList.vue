<script lang="ts">
import FriendCard from '@/components/FriendCard.vue'
import friends from '@/data/friends.json'
import { Friend } from '@/logic/data'
import { Component, Vue } from 'vue-facing-decorator'

@Component({ components: { FriendCard } })
export default class FriendList extends Vue {
  fi = [] as Friend[]

  mounted() {
    this.fi = friends as Friend[]
  }
}
</script>

<template>
  <div class="friend-list">
    <FriendCard
      v-for="f of fi"
      :key="f.name"
      :image="f.image"
      :name="f.name"
      :url="f.url"
      :description="f.description"
    />
  </div>
</template>

<style lang="scss">
.friend-list {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 25px;
}
</style>
