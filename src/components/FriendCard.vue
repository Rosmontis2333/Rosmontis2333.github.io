<script lang="ts">
import { Vue, Component, Prop } from 'vue-facing-decorator'

@Component({})
export default class FriendCard extends Vue {
  @Prop({ required: true }) name!: string
  @Prop({ required: true }) image!: string
  @Prop({ required: true }) description!: string
  @Prop({ required: true }) url!: string
}
</script>

<template>
  <div class="card">
    <a :href="url" target="_blank">
      <img :src="image" :alt="name"/>
    </a>
    <div class="content">
      <p class="name">{{ name }}</p>
      <p class="description">{{ description }}</p>
    </div>
  </div>
</template>

<style lang="scss">
@import "@/css/mocha";

.card {
  background-color: $overlay0;
  border-radius: 2rem;
  border: 1px solid $peach;
  width: 250px;
  height: 110px;
  padding: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 10px;

  img {
    width: 100px;
    height: 100px;
    border-radius: 50px;
    object-fit: contain;
  }

  .content {
    width: 140px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: baseline;

    .name {
      font-size: 1.2rem;
      font-weight: bold;
      color: $rosewater;
    }

    .description {
      font-size: 1rem;
      color: $text;
      font-weight: lighter;
    }
  }
}
</style>