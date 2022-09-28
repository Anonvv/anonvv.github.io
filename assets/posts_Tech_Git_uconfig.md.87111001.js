import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{q as s,r as e,a0 as a}from"./framework.d7d875d2.js";const h='{"title":"Multi-User Configuration","description":null,"frontmatter":{"title":"Multi-User Configuration","description":null,"sidebar":true,"comment":true,"category":["Tech"],"tags":["Git"],"date":"2022-01-24T08:23:55.000Z"},"relativePath":"posts/Tech/Git/uconfig.md","lastUpdated":1663592925099}',t={},r=a(`<h1 id="add-the-file-config-to-ssh" tabindex="-1">Add the file <code>config</code> to <code>~/.ssh</code>. <a class="header-anchor" href="#add-the-file-config-to-ssh" aria-hidden="true">#</a></h1><div class="language-bash line-numbers-mode"><pre><code><span class="token comment"># ~/.ssh/config</span>

<span class="token comment"># site alias</span>
Host github.com

<span class="token comment"># domain name</span>
HostName github.com

<span class="token comment"># verify method</span>
PreferredAuthentications publickey

<span class="token comment"># username(email better)</span>
User user@email.com

<span class="token comment"># key file location</span>
IdentityFile ~/.ssh/id_rsa
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div>`,2),i=[r];function c(l,o,p,m,d,b){return s(),e("div",null,i)}var f=n(t,[["render",c]]);export{h as __pageData,f as default};
