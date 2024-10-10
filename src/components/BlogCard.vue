<script lang="ts">
import { Vue, Component, Prop } from 'vue-facing-decorator'

@Component({})
export default class BlogCard extends Vue {
  @Prop({ required: true }) tittle!: string
  @Prop({ required: true }) image!: string
  @Prop({ required: true }) brief!: string
  @Prop({ required: true }) url!: string
}
</script>

<template>
  <a :href="url" target="_self">
    <div class="card">
      <img :src="image" :alt="tittle" />
      <div class="content">
        <p class="tittle">{{ tittle }}</p>
        <p class="brief">{{ brief }}</p>
      </div>
  </div>
  </a>
</template>

<style scoped lang="scss">
@import "@/css/mocha";
@import "@/css/motion";

a {
  flex-grow: 1;
}
.card {
  height: 200px;
  background-color: $overlay0;
  border-radius: 1rem;
  border: 1px solid $peach;
  padding: 5px;
  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: start;
  flex-wrap: nowrap;
  left: 0;
  &:hover {
    filter: drop-shadow(0px 0px 5px $lavender);
  }
  img  {
    height: 190px;
    width: 190px;
    object-fit: contain;
    padding-left: 5px;
    padding-top: 5px;
    border-radius: 1rem;
  }
}
.content {
  height: 190px;
  padding-left: 5px;
  padding-right: 5px;
  width: calc(100% - 205px);
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;

  p {
    padding-top: 2px;
    padding-bottom: 2px;
    margin-bottom: 0;
    margin-top: 0.5rem;
  }
  .tittle {
    font-size: 1.2rem;
    font-weight: bold;
    color: $rosewater;
    padding-bottom: 3px;
  }
  .brief {
    font-size: 1rem;
    color: $text;
    font-weight: lighter;
    overflow: hidden;
  }
}
</style>