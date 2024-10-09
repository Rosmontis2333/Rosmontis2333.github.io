<script lang="ts">
import vr from '@/components/vr.vue'
import contact from '@/data/contact.json'
import { Contact } from '@/logic/data'
import { Icon } from '@iconify/vue'
import { Component, Vue } from 'vue-facing-decorator'

@Component({
  components: { Icon, vr }
})
export default class ContactList extends Vue {
  contact = [] as Contact[]

  mounted() {
    this.contact = contact
  }
}
</script>

<template>
  <div class="contact-list">
    <div class="contact-title">
      <h1>Contact With Me?</h1>
    </div>
    <vr />
    <div class="contacts">
      <div class="contact" v-for="(contact, i) in contact" :key="i">
        <Icon :icon="contact.icon" class="icon" :title="contact.name" />
        <a :href="contact.url" target="_blank">{{ contact.id }}</a>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '@/css/markdown.scss';
@import '@/css/mocha';

.contact-list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  width: 85%;
  margin: auto;

  .contacts {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: left;
    width: fit-content;
    height: fit-content;
    margin: 1rem;
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
        color: $lavender;
        margin-left: 0.2rem;
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
}
</style>
