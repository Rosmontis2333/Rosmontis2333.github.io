<script lang="ts">
import { Contact } from '@/logic/data'
import { Vue, Component } from 'vue-facing-decorator'
import contact from '@/data/contact.json'
import {Icon} from '@iconify/vue';
import aboutMarkdown from '@/assets/about.md';

@Component({components: {Icon}})
export default class About extends Vue {
  contact = [] as Contact[];
  md = aboutMarkdown;

  mounted() {
    this.contact = contact
  }
}
</script>

<template>
  <div class="contacts">
    <div class="contact" v-for="(contact, i) in contact" :key="i">
      <Icon :icon="contact.icon" class="icon" :title="contact.name"/>
      <a :href="contact.url" target="_blank">{{contact.id}}</a>
    </div>
  </div>
  <div class="markdown" v-html="md" />
</template>

<style lang="scss">
@import '@/css/markdown.scss';
@import '@/css/mocha';

.contacts {
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: left;
  width: fit-content;
  height: fit-content;
  margin: 1rem 1rem;
  gap: 0.5rem;

  .contact {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: start;
    align-items: start;
    width: 100%;
    height: 1.5rem;
    flex: 1;
    gap: 1rem;
    border-bottom: 1px solid $mauve;

    .icon {
      width: 1.5rem;
      height: 1.5rem;
      display: block;
      color: $lavender
    }

    a {
      text-decoration: none;
      color: $lavender;
      font-size: 1.2rem;

      &:hover {
        filter: drop-shadow(0px 0px 2px $lavender);
      }

      &:active {
        text-decoration: none;
        color: $lavender;
      }
    }
  }
}
</style>