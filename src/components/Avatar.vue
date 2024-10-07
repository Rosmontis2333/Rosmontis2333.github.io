<script lang="ts">
import {Vue, Component} from 'vue-facing-decorator';

@Component({})
export default class Avatar extends Vue {

}
</script>

<template>
  <div class="avatar">
    <div class="left">
      <img alt="avatar" src="/img/ros.jpg" />
    </div>
    <div class="right">
      <h1>Rosmontis Here!</h1>
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
    border-radius: 50%;
    margin: 0.5rem auto;

    img {
      object-fit: contain;
      width: 100%;
      height: 100%;
      margin: auto;
    }
  }

  .right {
    flex: 2;
    display: block;
    width: fit-content;
    height: 200px;
    padding: calc(100px - 1rem) 0;

    h1 {
      font-size: 2rem;
    }
  }
}
</style>