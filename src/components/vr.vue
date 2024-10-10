<script lang="ts">
import { Component, Vue } from 'vue-facing-decorator'

@Component({})
export default class vr extends Vue {}
</script>

<template>
  <div class="vr" />
</template>

<style lang="scss">
@import '@/css/mocha';

.vr {
  display: block;
  width: 0;
  height: 10rem;
  border-style: solid;
  border-width: 1px;
  border-image: repeating-linear-gradient(
      45deg,
      $lavender 0,
      $lavender 20px,
      $blue 20px,
      $blue 40px
    )
    0.5;
}
</style>
