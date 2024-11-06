# Markdown文件与Blog实现

在这个站点被 @Elihuso 使用 Vue 重构后我~~又一次~~看不懂自己的项目了，所以我打算把在她的基础上打~~狗皮膏药~~（~~希望她看了我写的东西不会被气晕过去~~）作为第一个目标，总之我打算为本站添加一个显示 .md 文件的文章展示区（比如用于展示这篇文章）

## 初步设计

首先，让我想想我要添加些什么

1. 导航栏的 Blog 选项
2. /blogs 页面
3. /blogs 下的文章选项卡
4. 文章本体

## 操作导航栏

风庄已经把导航栏写在 Avatar 里了

```html
<div class="links">
        <router-link v-for="l of li" :to="l.url" :key="l.name" >{{l.name}}</router-link>
      </div>
```

看起来她把导航栏里的 Link 放在了一个 json 里，我只需要往里面加东西就行了

```json
  {
    "name": "Blogs",
    "url": "/blogs"
  }
```

然后还需要把这个页面加进 router，照着写就是

```typescript
  {
    path: '/blogs',
    name: 'Blogs',
    component: () => import('../views/Blogs.vue')
  }
```

## 仿照 Friends 页面写个 Blogs 出来

让我们看看风庄是怎么写 Friends 的

风庄在这里调用了另一个 Vue 组件 FriendList 然后接上了一个 md 文件，或许可以仿照这种形式

再看 FriendList，在这里风庄遍历了 '@/data/friends.json' 中的数据并将其传入 FriendCard 组件，那我也从 BlogCard 开始吧！

### BlogCard

script 部分，和 FriendCard 其实差不多，改改名字就行

```typescript
<script lang="ts">
import { Vue, Component, Prop } from 'vue-facing-decorator'

@Component({})
export default class BlogCard extends Vue {
  @Prop({ required: true }) tittle!: string
  @Prop({ required: true }) image!: string
  @Prop({ required: true }) brief!: string
  @Prop({ required: true }) url!: string
}
</script>
```

然后就该写 HTML&CSS 了......对我来说有点难度（

规划一下选项卡该做成什么样：

很普通的卡片样式

```html
  <a :href="url" target="_blank">
    <div class="card">
      <img :src="image"  :alt="tittle"/>
      <div class="content">
        <p class="tittle">{{ tittle }}</p>
        <p class="brief">{{ brief }}</p>/
      </div>
  </div>
  </a>
```

编写 CSS

```vue
<style scoped lang="scss">
@import "@/css/mocha";
@import "@/css/motion";

.card {
  height: 200px;
  width: 100%;
  background-color: $overlay0;
  border-radius: 2rem;
  border: 1px solid $peach;
  padding: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;

  &:hover {
    filter: drop-shadow(0px 0px 5px $lavender);
  }
  img  {
    height: 190px;
    width: 190px;
    object-fit: contain;
    padding-left: 5px;
  }
}
.content {
  height: 190px;
  padding-left: 5px;
  padding-right: 5px;
  width: calc(100% - 205px);
  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: start;
  
  .tittle {
    font-size: 1.2rem;
    font-weight: bold;
    color: $rosewater;
    padding-bottom: 3px;
  }
  .brief {
    font-size: 1rem;
    color: $text;
    font-weight: lighter;
  }
}
</style>
```

应该没问题..........吧？

### BlogList

创建要用到的文件再 import 进来

```vue
<script setup lang="ts">
import BlogCard from '@/components/BlogCard.vue'
import { Vue, Component } from 'vue-facing-decorator'
import { Blog } from '@/logic/data'
import blogs from '@/data/blogs.json'
</script>
```

遍历 BlogCard

```vue
<template>
<div class="blog-list">
  <BlogCard v-for="l of li" :key="l.tittle" :tittle="l.tittle" :brief="l.brief" :image="l.image" :url="l.url" />
</div>
</template>

<style scoped lang="scss">
.blog-list {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: start;
  flex-direction: row;
  flex-wrap: wrap;
  gap:1rem;
}
</style>
```

### Blogs

最后，Blogs 页面（我草我要累死了）

```vue
<script lang="ts">
import { Vue, Component } from 'vue-facing-decorator';
import BlogList from '@/components/BlogList.vue'

@Component({components: {BlogList}})
export default class Blogs extends Vue{}
</script>

<template>
  <BlogList/>
  <hr>
  <p>你已经翻到底啦</p>
</template>

<style scoped lang="scss">

</style>
```

好，测试一下

flex的行和列写反了（

总之调了一堆东西终于看起来正常了，来到最后一步

## 文章本体

先让我们看看风庄是怎么把 md 文件塞进网页里的

