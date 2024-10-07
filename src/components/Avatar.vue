<script lang="ts">
import { Link } from '@/logic/data'
import {Vue, Component} from 'vue-facing-decorator';
import links from '@/data/links.json';

@Component({})
export default class Avatar extends Vue {
  li = [] as Link[]

  mounted() {
    this.li = links as Link[];
  }
}
</script>

<template>
  <div class="avatar">
    <div class="left">
      <img alt="avatar" src="/img/ros.jpg" />
    </div>
    <div class="right">
      <h1>Rosmontis Here!</h1>
      <div class="links">
        <a v-for="l of li" v-bind:href="l.url" v-text="l.name" :key="l.name" />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.avatar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: nowrap;

  .left {
    flex: 1;
    display: block;
    width: 200px;
    height: 200px;
    border-radius: 100px;
    margin: 0.5rem auto;
    padding: 2rem;

    img {
      object-fit: contain;
      width: 200px;
      height: 200px;
      margin: auto;
      border-radius: 100px;
    }
  }

  .right {
    flex: 2;
    display: flex;
    width: fit-content;
    height: 200px;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    h1 {
      font-size: 2rem;
      text-align: start;
      flex: 1;
      padding-top: 1.5rem;
    }

    .links {
      flex: 1;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-around;
      align-items: center;
      width: 50%
    }
  }
}
</style>