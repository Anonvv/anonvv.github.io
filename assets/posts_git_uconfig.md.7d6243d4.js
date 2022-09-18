import{d as n,c as s,o as e,e as a}from"./app.b85ec229.js";const _='{"title":"Multi-User Configuration","description":"Git, gitee, coding...","frontmatter":{"title":"Multi-User Configuration","description":"Git, gitee, coding...","sidebar":true,"comment":true,"category":["Tech"],"tags":["Git"],"date":"2022-01-24T08:23:55.000Z"},"relativePath":"posts/git/uconfig.md","lastUpdated":1663465900923}',t={},r=a(`<h4 id="add-a-file-config-to-ssh-folder-and-change-it-to-your-accounts" tabindex="-1">Add a file <code>config</code> to <code>.ssh</code> folder and change it to your accounts. <a class="header-anchor" href="#add-a-file-config-to-ssh-folder-and-change-it-to-your-accounts" aria-hidden="true">#</a></h4><div class="language-bash line-numbers-mode"><pre><code><span class="token comment"># ~/.ssh/config</span>

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
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div>`,2),c=[r];function i(o,l,p,d,m,u){return e(),s("div",null,c)}var f=n(t,[["render",i]]);export{_ as __pageData,f as default};
