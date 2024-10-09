<script lang="ts">
import aboutMarkdown from '@/assets/about.md'
import ContactList from '@/components/ContactList.vue'
import { Component, Vue } from 'vue-facing-decorator'

@Component({
  components: { ContactList }
})
export default class About extends Vue {
  md = aboutMarkdown
}
</script>

<template>
  <ContactList />
  <hr />
  <div class="markdown" v-html="md" />
</template>

<style lang="scss"></style>
