import{d as n,c as s,o as a,e}from"./app.c33dfb03.js";const g='{"title":"High-Frequency Git CMD","description":"Note","frontmatter":{"title":"High-Frequency Git CMD","description":"Note","date":"2022-01-18T08:45:18.000Z","sidebar":true,"comment":true,"category":["Tech"],"tags":["Git"]},"relativePath":"posts/tech/git/cmd.md","lastUpdated":1663592904297}',t={},c=e(`<h1 id="_1-global-config" tabindex="-1">1. Global config <a class="header-anchor" href="#_1-global-config" aria-hidden="true">#</a></h1><div class="language-bash line-numbers-mode"><pre><code><span class="token comment"># global username</span>
<span class="token function">git</span> config --global user.name <span class="token string">&quot;xxx&quot;</span>

<span class="token comment"># global email</span>
<span class="token function">git</span> config --global user.email <span class="token string">&quot;xxx@email.com&quot;</span>

<span class="token comment"># show configured info</span>
<span class="token function">git</span> config --global --list

<span class="token comment"># clean configured info</span>
<span class="token function">git</span> config --global --unset <span class="token punctuation">[</span>user.name<span class="token punctuation">]</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h1 id="_2-generate-key" tabindex="-1">2. Generate key <a class="header-anchor" href="#_2-generate-key" aria-hidden="true">#</a></h1><div class="language-bash line-numbers-mode"><pre><code>ssh-keygen -t rsa -C <span class="token string">&quot;xxx@email.com&quot;</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div>`,4),o=[c];function r(i,l,p,u,d,m){return a(),s("div",null,o)}var _=n(t,[["render",r]]);export{g as __pageData,_ as default};
