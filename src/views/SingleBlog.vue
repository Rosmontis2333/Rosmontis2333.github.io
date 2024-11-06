<script lang="ts">
import { dataHost } from '@/logic/config'
import { Component, Prop, Vue } from 'vue-facing-decorator'
import MDX from '@/components/MDX.vue';

@Component({components: {MDX}})
export default class SingleBlog extends Vue {
  @Prop({ required: true }) name!: string;

  computedCode = "";

  created() {
    fetch(dataHost + this.name + '.json').then(it => it.text()).then(it => {
      this.computedCode = it
    })
  }
}
</script>

<template>
  <MDX :code="computedCode" class="markdown"/>
</template>

<style lang="scss">
@import "@/css/markdown.scss";
</style>
