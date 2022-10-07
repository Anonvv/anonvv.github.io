import{_ as n,q as s,r as a,a2 as e}from"./plugin-vue_export-helper.c35c1c54.js";const k='{"title":"Flex alignment issue of the last element","description":null,"frontmatter":{"page":false,"title":"Flex alignment issue of the last element","description":null,"date":"2022-10-03T03:11:33.000Z","sidebar":true,"comment":true,"category":["Tech"],"tags":["CSS","Flex"]},"relativePath":"posts/Tech/CSS/flex-align.md","lastUpdated":1664978538907}',p={},t=e(`<h1 id="_1-issue" tabindex="-1">1. Issue <a class="header-anchor" href="#_1-issue" aria-hidden="true">#</a></h1><p>Flex layout:</p><div class="language-scss line-numbers-mode"><pre><code><span class="token selector">div </span><span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
    <span class="token property">justify-content</span><span class="token punctuation">:</span> space-around<span class="token punctuation">;</span>
    <span class="token property">flex-wrap</span><span class="token punctuation">:</span> wrap<span class="token punctuation">;</span>
    <span class="token selector">.item </span><span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> <span class="token function">calc</span><span class="token punctuation">(</span>100% <span class="token operator">/</span> 3<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 3 elements per row</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>Render result:</p><ol><li>Divided equally per row: elements have been normally rendered;</li></ol><div class="language-text line-numbers-mode"><pre><code>| item | item | item |
|------|------|------|
| item | item | item |
|------|------|------|
| item | item | item |
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><ol start="2"><li>The last line is less than number of per row: elements are justified at both ends.</li></ol><div class="language-text line-numbers-mode"><pre><code>| item | item | item |
|------|------|------|
| item | item | item |
|------|------|------|
| item |      | item |

</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h1 id="_2-solution" tabindex="-1">2. Solution <a class="header-anchor" href="#_2-solution" aria-hidden="true">#</a></h1><ol><li>Keep the number of rows consistant;</li><li>Use pseudo-classes element(<code>::before/::after</code>) placeholders if the last row of elements is not enough;</li><li>Sets for the last element <code>margin-[reverseDirec]: auto</code>(recommond)\u3002</li></ol><div class="language-scss line-numbers-mode"><pre><code><span class="token selector">div </span><span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
    <span class="token property">justify-content</span><span class="token punctuation">:</span> space-around<span class="token punctuation">;</span>
    <span class="token property">flex-wrap</span><span class="token punctuation">:</span> wrap<span class="token punctuation">;</span>
    <span class="token selector">.item </span><span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> <span class="token function">calc</span><span class="token punctuation">(</span>100% <span class="token operator">/</span> 3<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 3 elements per row</span>
        <span class="token selector"><span class="token parent important">&amp;</span>:last-child </span><span class="token punctuation">{</span>
            <span class="token property">margin-right</span><span class="token punctuation">:</span> auto <span class="token comment">// align to the left</span>
            <span class="token comment">// margin-left: auto // align to the right</span>
            <span class="token comment">// margin-top: auto // align to the bottom</span>
            <span class="token comment">// margin-bottom: auto // align to the top</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div>`,11),l=[t];function o(c,r,i,u,m,b){return s(),a("div",null,l)}var h=n(p,[["render",o]]);export{k as __pageData,h as default};
