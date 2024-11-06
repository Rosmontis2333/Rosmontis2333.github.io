<script lang="ts">
import { dataHost } from '@/logic/config'
import { router } from '@/router'
import { Component, Vue } from 'vue-facing-decorator'
import blog_image from '@/data/blog-image.json'

@Component({ components: {} })
export default class BlogList extends Vue {
  li = [] as string[]

  created() {
    fetch(dataHost + 'list.json')
      .then((it) => it.text())
      .then((it) => {
        this.li = JSON.parse(it)
      })
  }

  push(name: string) {
    router.push({ path: `/docs/${name}` })
  }

  imageUrl(name: string) {
    return blog_image[name].image
  }

  description(name: string) {
    return blog_image[name].description
  }
}
</script>

<template>
  <div class="blog-list">
    <div class="blog" v-for="l of li" :key="l">
      <img class="blog-image" :src="imageUrl(l)" />
      <div class="content">
        <h1 class="blog-title" v-on:click="push(l)">{{ l }}</h1>
        <p class="blog-description">{{ description(l) }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '@/css/mocha';

.blog-list {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: start;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1rem;

  .blog {
    width: 100%;
    height: fit-content;
    display: flex;
    margin: 0 auto;
    border-bottom: 1px solid $rosewater;
    border-top: 1px solid $rosewater;
    padding: 0.2rem;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: start;
    align-items: center;
    gap: 2rem;

    .blog-image {
      width: 175px;
      height: 175px;
      border-radius: 65px;
      border: 3px solid $rosewater;
      transition: .5s all ease-in-out;

      &:hover {
        filter: drop-shadow(0px 0px 5px $rosewater);
      }
    }

    .content {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: start;
      align-items: start;
      gap: 0.5rem;

      h1 {
        font-size: 1.6rem;
        text-align: start;
        flex: 3;
        font-weight: bold;
        cursor: pointer;
        position: relative;

        &:before {
          content: '';
          display: block;
          position: absolute;
          width: 100%;
          height: 2px;
          bottom: 0;
          left: 0;
          background-color: $flamingo;
          transform: scaleX(0);
          transition: transform 0.3s ease;
          transform-origin: top left;
        }

        &:hover {
          &:before {
            transform: scaleX(1);
          }
        }
      }

      p {
        font-size: 1rem;
        flex: 5;
        text-wrap: stable;
      }
    }
  }
}
</style>
