import{d as n,c as a,o as s,e}from"./app.9ccd82eb.js";const g='{"title":"High-Frequency Git Commands","description":"About global configuration and  the generation of ssh-key","frontmatter":{"title":"High-Frequency Git Commands","description":"About global configuration and  the generation of ssh-key","date":"2022-01-18T08:45:18.000Z","sidebar":true,"comment":true,"category":["Tech"],"tags":["Git"],"abbrlink":"91687f8"},"relativePath":"posts/git/cmd.md","lastUpdated":1644576693604}',t={},o=e(`<h4 id="global-config" tabindex="-1">Global config <a class="header-anchor" href="#global-config" aria-hidden="true">#</a></h4><div class="language-bash line-numbers-mode"><pre><code><span class="token comment"># global username</span>
<span class="token function">git</span> config --global user.name <span class="token string">&quot;xxx&quot;</span>

<span class="token comment"># global email</span>
<span class="token function">git</span> config --global user.email <span class="token string">&quot;xxx@email.com&quot;</span>

<span class="token comment"># show configured info</span>
<span class="token function">git</span> config --global --list

<span class="token comment"># clean configured info</span>
<span class="token function">git</span> config --global --unset <span class="token punctuation">[</span>user.name<span class="token punctuation">]</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h4 id="generate-key" tabindex="-1">Generate key <a class="header-anchor" href="#generate-key" aria-hidden="true">#</a></h4><div class="language-bash line-numbers-mode"><pre><code>ssh-keygen -t rsa -C <span class="token string">&quot;xxx@email.com&quot;</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div>`,4),i=[o];function c(r,l,p,u,b,d){return s(),a("div",null,i)}var f=n(t,[["render",c]]);export{g as __pageData,f as default};
