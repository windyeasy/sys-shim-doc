import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as t,c as a,a as s}from"./app-CNvD_FSf.js";const e={},i=s(`<p><code>init</code> 不是命名空间，它是一个函数，用于初始化 Neutralinojs 应用程序。</p><h2 id="init" tabindex="-1"><a class="header-anchor" href="#init"><span>init()</span></a></h2><p>应用程序开发者需要在使用任何原生 API 函数之前，通过 JavaScript 源文件显式调用此方法。当调用 <code>init</code> 函数时，它会执行以下任务。</p><ul><li>异步启动与 Neutralinojs 服务器的 WebSocket 连接。</li><li>如果提供了 <code>--neu-dev-auto-reload</code> 标志（<code>neu run</code> 命令会设置此标志），则注册自动重载事件处理程序。</li><li>在 <code>window</code> 范围内定义 <code>NL_CVERSION</code>，包含客户端库版本。</li></ul><p>您可以在调用 <code>init</code> 函数之后立即调用原生 API，如下所示。</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>Neutralino<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

Neutralino<span class="token punctuation">.</span>os<span class="token punctuation">.</span><span class="token function">showMessageBox</span><span class="token punctuation">(</span><span class="token string">&#39;Welcome&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Hello Neutralinojs&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果你愿意，也可以用 <code>ready</code> 事件回调函数来包装立即执行的原生调用。</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>Neutralino<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

Neutralino<span class="token punctuation">.</span>events<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;ready&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    Neutralino<span class="token punctuation">.</span>os<span class="token punctuation">.</span><span class="token function">showMessageBox</span><span class="token punctuation">(</span><span class="token string">&#39;Welcome&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Hello Neutralinojs&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container info"><p class="hint-container-title">相关信息</p><p>Neutralinojs 客户端库通常会在 WebSocket 连接建立后，将原生 API 调用排队并发送到服务器。因此，您并不总是需要使用 <code>ready</code> 事件回调。</p></div>`,9),o=[i];function c(p,l){return t(),a("div",null,o)}const d=n(e,[["render",c],["__file","init.html.vue"]]),m=JSON.parse('{"path":"/docs/neutralinojs/api/init.html","title":"Neutralino.init","lang":"zh-CN","frontmatter":{"title":"Neutralino.init","description":"init 不是命名空间，它是一个函数，用于初始化 Neutralinojs 应用程序。 init() 应用程序开发者需要在使用任何原生 API 函数之前，通过 JavaScript 源文件显式调用此方法。当调用 init 函数时，它会执行以下任务。 异步启动与 Neutralinojs 服务器的 WebSocket 连接。 如果提供了 --neu-de...","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/sys-shim-doc/docs/neutralinojs/api/init.html"}],["meta",{"property":"og:site_name","content":"sys-shim"}],["meta",{"property":"og:title","content":"Neutralino.init"}],["meta",{"property":"og:description","content":"init 不是命名空间，它是一个函数，用于初始化 Neutralinojs 应用程序。 init() 应用程序开发者需要在使用任何原生 API 函数之前，通过 JavaScript 源文件显式调用此方法。当调用 init 函数时，它会执行以下任务。 异步启动与 Neutralinojs 服务器的 WebSocket 连接。 如果提供了 --neu-de..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-19T06:47:25.000Z"}],["meta",{"property":"article:author","content":"wll8"}],["meta",{"property":"article:modified_time","content":"2024-03-19T06:47:25.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Neutralino.init\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-03-19T06:47:25.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"wll8\\",\\"url\\":\\"https://github.com/wll8\\"}]}"]]},"headers":[{"level":2,"title":"init()","slug":"init","link":"#init","children":[]}],"git":{"createdTime":1710830845000,"updatedTime":1710830845000,"contributors":[{"name":"wll8","email":"xwdaysme@gmail.com","commits":1}]},"readingTime":{"minutes":0.83,"words":249},"filePathRelative":"docs/neutralinojs/api/init.md","localizedDate":"2024年3月19日","autoDesc":true}');export{d as comp,m as data};
