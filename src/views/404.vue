<script lang="ts">
import { Component, Vue } from 'vue-facing-decorator'

@Component({})
export default class _04 extends Vue {}
</script>

<template>
  <div class="four-oh-four">
    <div class="top"></div>
    <div class="title">404</div>
    <div class="sub">这个页面不见了</div>
    <div class="bottom"></div>
  </div>
</template>

<style lang="sass">
.four-oh-four
  display: flex
  flex-direction: column
  gap: 5px
  margin: auto

  .top
    flex-grow: 1

  .title
    font-size: min(15em, 40vw)
    color: transparent
    background-color: rgb(188 140 68 / 50%)
    -webkit-background-clip: text
    text-shadow: rgba(255, 255, 255, 0.5) 0 5px 6px
    margin: auto

  .sub, .click
    color: #a6adc8
    font-size: 1.2em
    margin: auto

  .bottom
    flex-grow: 2
</style>
