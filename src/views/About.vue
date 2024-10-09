<script lang="ts">
import { Vue, Component } from 'vue-facing-decorator'
import aboutMarkdown from '@/assets/about.md';
import ContactList from '@/components/ContactList.vue'

@Component({
  components: {ContactList}
})
export default class About extends Vue {
  md = aboutMarkdown;
}
</script>

<template>
  <ContactList />
  <hr />
  <div class="markdown" v-html="md" />
</template>

<style lang="scss">
</style>