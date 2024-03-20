import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as e,c as n,a as t}from"./app-CNvD_FSf.js";const s={},p=t(`<p><code>Neutralino.updater</code> 命名空间包含与内置自动更新程序相关的方法。<code>Neutralinojs</code> 提供了内置的客户端更新机制。因此，您甚至可以在不调用第三方更新服务、操作系统级服务或其他二进制文件/脚本的情况下更新 <code>Neutralinojs</code> 应用程序。</p><p>通过<code>此指南</code>了解更多关于扩展的信息。</p><h2 id="updater-checkforupdates-url" tabindex="-1"><a class="header-anchor" href="#updater-checkforupdates-url"><span>updater.checkForUpdates(url)</span></a></h2><p>从给定的URL检查最新更新。URL应返回一个有效的 <code>Neutralinojs</code> 更新清单，并包含 <code>Content-Type: application/json</code> 头。对于无效的清单抛出 <code>NE_UP_CUPDMER</code>，对于网络连接问题抛出 <code>NE_UP_CUPDERR</code>。</p><h3 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters"><span>Parameters</span></a></h3><ul><li><code>url</code> String: 获取更新清单的URL。</li></ul><h3 id="return-object-awaited" tabindex="-1"><a class="header-anchor" href="#return-object-awaited"><span>Return Object (awaited):</span></a></h3><p>更新清单。</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">let</span> url <span class="token operator">=</span> <span class="token string">&#39;https://example.com/updates/manifest.json&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> manifest <span class="token operator">=</span> <span class="token keyword">await</span> Neutralino<span class="token punctuation">.</span>updater<span class="token punctuation">.</span><span class="token function">checkForUpdates</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="updater-install" tabindex="-1"><a class="header-anchor" href="#updater-install"><span>updater.install()</span></a></h2><p>从下载的更新清单中安装更新。如果清单没有加载，将抛出 <code>NE_UP_UPDNOUF</code>。如果更新安装过程失败，此函数将抛出 <code>NE_UP_UPDINER</code>。</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">let</span> url <span class="token operator">=</span> <span class="token string">&#39;https://example.com/updates/manifest.json&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> manifest <span class="token operator">=</span> <span class="token keyword">await</span> Neutralino<span class="token punctuation">.</span>updater<span class="token punctuation">.</span><span class="token function">checkForUpdates</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">if</span><span class="token punctuation">(</span>manifest<span class="token punctuation">.</span>version <span class="token operator">!=</span> <span class="token constant">NL_APPVERSION</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">await</span> Neutralino<span class="token punctuation">.</span>updater<span class="token punctuation">.</span><span class="token function">install</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">else</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;您正在使用最新版本！&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12),o=[p];function c(r,l){return e(),n("div",null,o)}const d=a(s,[["render",c],["__file","updater.html.vue"]]),m=JSON.parse('{"path":"/docs/neutralinojs/api/updater.html","title":"Neutralino.updater","lang":"zh-CN","frontmatter":{"title":"Neutralino.updater","description":"Neutralino.updater 命名空间包含与内置自动更新程序相关的方法。Neutralinojs 提供了内置的客户端更新机制。因此，您甚至可以在不调用第三方更新服务、操作系统级服务或其他二进制文件/脚本的情况下更新 Neutralinojs 应用程序。 通过此指南了解更多关于扩展的信息。 updater.checkForUpdates(url)...","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/sys-shim-doc/docs/neutralinojs/api/updater.html"}],["meta",{"property":"og:site_name","content":"sys-shim"}],["meta",{"property":"og:title","content":"Neutralino.updater"}],["meta",{"property":"og:description","content":"Neutralino.updater 命名空间包含与内置自动更新程序相关的方法。Neutralinojs 提供了内置的客户端更新机制。因此，您甚至可以在不调用第三方更新服务、操作系统级服务或其他二进制文件/脚本的情况下更新 Neutralinojs 应用程序。 通过此指南了解更多关于扩展的信息。 updater.checkForUpdates(url)..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-19T06:47:25.000Z"}],["meta",{"property":"article:author","content":"wll8"}],["meta",{"property":"article:modified_time","content":"2024-03-19T06:47:25.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Neutralino.updater\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-03-19T06:47:25.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"wll8\\",\\"url\\":\\"https://github.com/wll8\\"}]}"]]},"headers":[{"level":2,"title":"updater.checkForUpdates(url)","slug":"updater-checkforupdates-url","link":"#updater-checkforupdates-url","children":[{"level":3,"title":"Parameters","slug":"parameters","link":"#parameters","children":[]},{"level":3,"title":"Return Object (awaited):","slug":"return-object-awaited","link":"#return-object-awaited","children":[]}]},{"level":2,"title":"updater.install()","slug":"updater-install","link":"#updater-install","children":[]}],"git":{"createdTime":1710830845000,"updatedTime":1710830845000,"contributors":[{"name":"wll8","email":"xwdaysme@gmail.com","commits":1}]},"readingTime":{"minutes":0.84,"words":252},"filePathRelative":"docs/neutralinojs/api/updater.md","localizedDate":"2024年3月19日","autoDesc":true}');export{d as comp,m as data};
