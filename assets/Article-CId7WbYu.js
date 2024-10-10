var a=Object.defineProperty;var g=(n,t,e)=>t in n?a(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var i=(n,t,e)=>g(n,typeof t!="symbol"?t+"":t,e);import{V as u,C as d,_ as c,c as q,o as m}from"./index-CRSV75ud.js";const f=`<h1>Markdown文件与Blog实现</h1>
<p>在这个站点被 @Elihuso 使用 Vue 重构后我<del>又一次</del>看不懂自己的项目了，所以我打算把在她的基础上打<del>狗皮膏药</del>（<del>希望她看了我写的东西不会被气晕过去</del>）作为第一个目标，总之我打算为本站添加一个显示 .md 文件的文章展示区（比如用于展示这篇文章）</p>
<h2>初步设计</h2>
<p>首先，让我想想我要添加些什么</p>
<ol>
<li>导航栏的 Blog 选项</li>
<li>/blogs 页面</li>
<li>/blogs 下的文章选项卡</li>
<li>文章本体</li>
</ol>
<h2>操作导航栏</h2>
<p>风庄已经把导航栏写在 Avatar 里了</p>
<pre><code class="language-html">&lt;div class=&quot;links&quot;&gt;
        &lt;router-link v-for=&quot;l of li&quot; :to=&quot;l.url&quot; :key=&quot;l.name&quot; &gt;{{l.name}}&lt;/router-link&gt;
      &lt;/div&gt;
</code></pre>
<p>看起来她把导航栏里的 Link 放在了一个 json 里，我只需要往里面加东西就行了</p>
<pre><code class="language-json">  {
    &quot;name&quot;: &quot;Blogs&quot;,
    &quot;url&quot;: &quot;/blogs&quot;
  }
</code></pre>
<p>然后还需要把这个页面加进 router，照着写就是</p>
<pre><code class="language-typescript">  {
    path: &#39;/blogs&#39;,
    name: &#39;Blogs&#39;,
    component: () =&gt; import(&#39;../views/Blogs.vue&#39;)
  }
</code></pre>
<h2>仿照 Friends 页面写个 Blogs 出来</h2>
<p>让我们看看风庄是怎么写 Friends 的</p>
<p>风庄在这里调用了另一个 Vue 组件 FriendList 然后接上了一个 md 文件，或许可以仿照这种形式</p>
<p>再看 FriendList，在这里风庄遍历了 &#39;@/data/friends.json&#39; 中的数据并将其传入 FriendCard 组件，那我也从 BlogCard 开始吧！</p>
<h3>BlogCard</h3>
<p>script 部分，和 FriendCard 其实差不多，改改名字就行</p>
<pre><code class="language-typescript">&lt;script lang=&quot;ts&quot;&gt;
import { Vue, Component, Prop } from &#39;vue-facing-decorator&#39;

@Component({})
export default class BlogCard extends Vue {
  @Prop({ required: true }) tittle!: string
  @Prop({ required: true }) image!: string
  @Prop({ required: true }) brief!: string
  @Prop({ required: true }) url!: string
}
&lt;/script&gt;
</code></pre>
<p>然后就该写 HTML&amp;CSS 了......对我来说有点难度（</p>
<p>规划一下选项卡该做成什么样：</p>
<p>很普通的卡片样式</p>
<pre><code class="language-html">  &lt;a :href=&quot;url&quot; target=&quot;_blank&quot;&gt;
    &lt;div class=&quot;card&quot;&gt;
      &lt;img :src=&quot;image&quot;  :alt=&quot;tittle&quot;/&gt;
      &lt;div class=&quot;content&quot;&gt;
        &lt;p class=&quot;tittle&quot;&gt;{{ tittle }}&lt;/p&gt;
        &lt;p class=&quot;brief&quot;&gt;{{ brief }}&lt;/p&gt;/
      &lt;/div&gt;
  &lt;/div&gt;
  &lt;/a&gt;
</code></pre>
<p>编写 CSS</p>
<pre><code class="language-vue">&lt;style scoped lang=&quot;scss&quot;&gt;
@import &quot;@/css/mocha&quot;;
@import &quot;@/css/motion&quot;;

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

  &amp;:hover {
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
&lt;/style&gt;
</code></pre>
<p>应该没问题..........吧？</p>
<h3>BlogList</h3>
<p>创建要用到的文件再 import 进来</p>
<pre><code class="language-vue">&lt;script setup lang=&quot;ts&quot;&gt;
import BlogCard from &#39;@/components/BlogCard.vue&#39;
import { Vue, Component } from &#39;vue-facing-decorator&#39;
import { Blog } from &#39;@/logic/data&#39;
import blogs from &#39;@/data/blogs.json&#39;
&lt;/script&gt;
</code></pre>
<p>遍历 BlogCard</p>
<pre><code class="language-vue">&lt;template&gt;
&lt;div class=&quot;blog-list&quot;&gt;
  &lt;BlogCard v-for=&quot;l of li&quot; :key=&quot;l.tittle&quot; :tittle=&quot;l.tittle&quot; :brief=&quot;l.brief&quot; :image=&quot;l.image&quot; :url=&quot;l.url&quot; /&gt;
&lt;/div&gt;
&lt;/template&gt;

&lt;style scoped lang=&quot;scss&quot;&gt;
.blog-list {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: start;
  flex-direction: row;
  flex-wrap: wrap;
  gap:1rem;
}
&lt;/style&gt;
</code></pre>
<h3>Blogs</h3>
<p>最后，Blogs 页面（我草我要累死了）</p>
<pre><code class="language-vue">&lt;script lang=&quot;ts&quot;&gt;
import { Vue, Component } from &#39;vue-facing-decorator&#39;;
import BlogList from &#39;@/components/BlogList.vue&#39;

@Component({components: {BlogList}})
export default class Blogs extends Vue{}
&lt;/script&gt;

&lt;template&gt;
  &lt;BlogList/&gt;
  &lt;hr&gt;
  &lt;p&gt;你已经翻到底啦&lt;/p&gt;
&lt;/template&gt;

&lt;style scoped lang=&quot;scss&quot;&gt;

&lt;/style&gt;
</code></pre>
<p>好，测试一下</p>
<p>flex的行和列写反了（</p>
<p>总之调了一堆东西终于看起来正常了，来到最后一步</p>
<h2>文章本体</h2>
<p>先让我们看看风庄是怎么把 md 文件塞进网页里的</p>
`;var h=Object.defineProperty,v=Object.getOwnPropertyDescriptor,x=(n,t,e,l)=>{for(var o=l>1?void 0:l?v(t,e):t,r=n.length-1,p;r>=0;r--)(p=n[r])&&(o=(l?p(t,e,o):p(o))||o);return l&&o&&h(t,e,o),o};let s=class extends u{constructor(){super(...arguments);i(this,"md",f)}};s=x([d({})],s);const b=["innerHTML"];function B(n,t,e,l,o,r){return m(),q("div",{innerHTML:n.md},null,8,b)}const y=c(s,[["render",B],["__scopeId","data-v-aac878be"]]);export{y as default};
