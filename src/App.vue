<script lang="ts">
import {Vue, Component} from 'vue-facing-decorator';
import Avatar from './components/Avatar.vue';

@Component({components: {Avatar}})
export default class App extends Vue {}
</script>

<template>
  <Avatar />
  <router-view />
</template>

<style lang="scss">
@import '@/css/mocha';
@import '@/css/global';

* {
  color: $text;
}

body {
  background-color: $base;
}

#app {
  width: 100%;
  max-width: 900px;
  min-height: 100vh;
  margin: auto;
}
</style>