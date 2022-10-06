import{_ as n,q as s,r as e,Y as a}from"./plugin-vue_export-helper.a92e0a4e.js";const _='{"title":"Multi-user configuration","description":"~/.ssh/config","frontmatter":{"title":"Multi-user configuration","description":"~/.ssh/config","sidebar":true,"comment":true,"category":["Tech"],"tags":["Git"],"date":"2022-01-24T08:23:55.000Z"},"relativePath":"posts/Tech/Git/uconfig.md","lastUpdated":1664978702132}',t={},r=a(`<h1 id="add-the-file-config-to-ssh" tabindex="-1">Add the file <code>config</code> to <code>~/.ssh</code>. <a class="header-anchor" href="#add-the-file-config-to-ssh" aria-hidden="true">#</a></h1><div class="language-bash line-numbers-mode"><pre><code><span class="token comment"># ~/.ssh/config</span>

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
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div>`,2),i=[r];function c(o,l,p,m,d,b){return s(),e("div",null,i)}var h=n(t,[["render",c]]);export{_ as __pageData,h as default};
