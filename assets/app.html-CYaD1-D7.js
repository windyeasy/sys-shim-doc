import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as n,c as s,a as e}from"./app-CNvD_FSf.js";const t={},p=e(`<p><code>Neutralino.app</code> 命名空间包含了与当前应用实例相关的方法。</p><h2 id="app-exit-exitcode" tabindex="-1"><a class="header-anchor" href="#app-exit-exitcode"><span>app.exit(exitCode)</span></a></h2><p>终止运行中的应用程序。</p><h3 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters"><span>Parameters</span></a></h3><ul><li><code>exitCode</code> Number: 进程的退出代码。默认值总是 <code>0</code>（成功）。</li></ul><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">await</span> Neutralino<span class="token punctuation">.</span>app<span class="token punctuation">.</span><span class="token function">exit</span><span class="token punctuation">(</span><span class="token number">130</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">await</span> Neutralino<span class="token punctuation">.</span>app<span class="token punctuation">.</span><span class="token function">exit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="app-killprocess" tabindex="-1"><a class="header-anchor" href="#app-killprocess"><span>app.killProcess()</span></a></h2><p>结束应用程序进程。如果应用程序变得无响应，你可以使用这个方法立即终止进程。建议使用 <code>exit()</code> 方法来正确关闭你的应用程序。</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">await</span> Neutralino<span class="token punctuation">.</span>app<span class="token punctuation">.</span><span class="token function">killProcess</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="app-restartprocess-options" tabindex="-1"><a class="header-anchor" href="#app-restartprocess-options"><span>app.restartProcess(options)</span></a></h2><p>重新启动当前应用实例。</p><h3 id="options" tabindex="-1"><a class="header-anchor" href="#options"><span>Options</span></a></h3><ul><li><code>args</code> String: 需要传递给新应用实例进程的额外命令行参数。</li></ul><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">await</span> Neutralino<span class="token punctuation">.</span>app<span class="token punctuation">.</span><span class="token function">restartProcess</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">await</span> Neutralino<span class="token punctuation">.</span>app<span class="token punctuation">.</span><span class="token function">restartProcess</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">args</span><span class="token operator">:</span> <span class="token string">&#39;--restarted&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="app-getconfig" tabindex="-1"><a class="header-anchor" href="#app-getconfig"><span>app.getConfig()</span></a></h2><p>以 JSON 对象形式返回当前应用配置。</p><h3 id="return-object-awaited" tabindex="-1"><a class="header-anchor" href="#return-object-awaited"><span>Return Object (awaited):</span></a></h3><p>当前应用配置。有时，这个配置对象与你的配置文件不完全相同，因为框架在多种情况下更新配置，如通过 CLI 参数覆盖配置和使用 <code>0</code> 作为端口。</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">let</span> config <span class="token operator">=</span> <span class="token keyword">await</span> Neutralino<span class="token punctuation">.</span>app<span class="token punctuation">.</span><span class="token function">getConfig</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;URL = &#39;</span><span class="token punctuation">,</span> config<span class="token punctuation">.</span>url<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="app-broadcast-eventname-data" tabindex="-1"><a class="header-anchor" href="#app-broadcast-eventname-data"><span>app.broadcast(eventName, data)</span></a></h2><p>向所有应用实例派发一个新事件。</p><h3 id="parameters-1" tabindex="-1"><a class="header-anchor" href="#parameters-1"><span>Parameters</span></a></h3><ul><li><code>eventName</code> String: 事件的名称。</li><li><code>data</code> Object (optional): 事件的额外数据。</li></ul><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">await</span> Neutralino<span class="token punctuation">.</span>app<span class="token punctuation">.</span><span class="token function">broadcast</span><span class="token punctuation">(</span><span class="token string">&#39;myTestEvent&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Hello&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">await</span> Neutralino<span class="token punctuation">.</span>app<span class="token punctuation">.</span><span class="token function">broadcast</span><span class="token punctuation">(</span><span class="token string">&#39;myTestEvent&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token literal-property property">myData</span><span class="token operator">:</span> <span class="token string">&#39;Test data&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">await</span> Neutralino<span class="token punctuation">.</span>app<span class="token punctuation">.</span><span class="token function">broadcast</span><span class="token punctuation">(</span><span class="token string">&#39;myTestEvent&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="app-readprocessinput-readall" tabindex="-1"><a class="header-anchor" href="#app-readprocessinput-readall"><span>app.readProcessInput(readAll)</span></a></h2><p>从应用程序进程的标准输入流读取字符串数据。</p><h3 id="parameters-2" tabindex="-1"><a class="header-anchor" href="#parameters-2"><span>Parameters</span></a></h3><ul><li><code>readAll</code> Boolean (optional): 如果设置为 <code>true</code>，框架将读取整个标准流。否则，只返回一行。此选项的默认值为 <code>false</code>。</li></ul><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">let</span> name <span class="token operator">=</span> <span class="token keyword">await</span> Neutralino<span class="token punctuation">.</span>app<span class="token punctuation">.</span><span class="token function">readProcessInput</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Hello </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="return-string-awaited" tabindex="-1"><a class="header-anchor" href="#return-string-awaited"><span>Return String (awaited):</span></a></h3><p>标准输入流数据。</p><h2 id="app-writeprocessoutput-data" tabindex="-1"><a class="header-anchor" href="#app-writeprocessoutput-data"><span>app.writeProcessOutput(data)</span></a></h2><p>将字符串数据写入应用程序进程的标准输出流。</p><h3 id="parameters-3" tabindex="-1"><a class="header-anchor" href="#parameters-3"><span>Parameters</span></a></h3><ul><li><code>data</code> String: 要写入的数据。</li></ul><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">await</span> Neutralino<span class="token punctuation">.</span>app<span class="token punctuation">.</span><span class="token function">writeProcessOutput</span><span class="token punctuation">(</span><span class="token string">&#39;Enter your name: &#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> name <span class="token operator">=</span> <span class="token keyword">await</span> Neutralino<span class="token punctuation">.</span>app<span class="token punctuation">.</span><span class="token function">readProcessInput</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">await</span> Neutralino<span class="token punctuation">.</span>app<span class="token punctuation">.</span><span class="token function">writeProcessOutput</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Hello </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">\\n</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="app-writeprocesserror-data" tabindex="-1"><a class="header-anchor" href="#app-writeprocesserror-data"><span>app.writeProcessError(data)</span></a></h2><p>将字符串数据写入应用程序进程的标准错误流。</p><h3 id="parameters-4" tabindex="-1"><a class="header-anchor" href="#parameters-4"><span>Parameters</span></a></h3><ul><li><code>data</code> String: 要写入的数据。</li></ul><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">await</span> Neutralino<span class="token punctuation">.</span>app<span class="token punctuation">.</span><span class="token function">writeProcessError</span><span class="token punctuation">(</span><span class="token string">&#39;This message goes to stderr&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,41),o=[p];function i(c,l){return n(),s("div",null,o)}const d=a(t,[["render",i],["__file","app.html.vue"]]),k=JSON.parse('{"path":"/docs/neutralinojs/api/app.html","title":"Neutralino.app","lang":"zh-CN","frontmatter":{"title":"Neutralino.app","description":"Neutralino.app 命名空间包含了与当前应用实例相关的方法。 app.exit(exitCode) 终止运行中的应用程序。 Parameters exitCode Number: 进程的退出代码。默认值总是 0（成功）。 app.killProcess() 结束应用程序进程。如果应用程序变得无响应，你可以使用这个方法立即终止进程。建议使用 e...","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/sys-shim-doc/docs/neutralinojs/api/app.html"}],["meta",{"property":"og:site_name","content":"sys-shim"}],["meta",{"property":"og:title","content":"Neutralino.app"}],["meta",{"property":"og:description","content":"Neutralino.app 命名空间包含了与当前应用实例相关的方法。 app.exit(exitCode) 终止运行中的应用程序。 Parameters exitCode Number: 进程的退出代码。默认值总是 0（成功）。 app.killProcess() 结束应用程序进程。如果应用程序变得无响应，你可以使用这个方法立即终止进程。建议使用 e..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-19T06:47:25.000Z"}],["meta",{"property":"article:author","content":"wll8"}],["meta",{"property":"article:modified_time","content":"2024-03-19T06:47:25.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Neutralino.app\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-03-19T06:47:25.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"wll8\\",\\"url\\":\\"https://github.com/wll8\\"}]}"]]},"headers":[{"level":2,"title":"app.exit(exitCode)","slug":"app-exit-exitcode","link":"#app-exit-exitcode","children":[{"level":3,"title":"Parameters","slug":"parameters","link":"#parameters","children":[]}]},{"level":2,"title":"app.killProcess()","slug":"app-killprocess","link":"#app-killprocess","children":[]},{"level":2,"title":"app.restartProcess(options)","slug":"app-restartprocess-options","link":"#app-restartprocess-options","children":[{"level":3,"title":"Options","slug":"options","link":"#options","children":[]}]},{"level":2,"title":"app.getConfig()","slug":"app-getconfig","link":"#app-getconfig","children":[{"level":3,"title":"Return Object (awaited):","slug":"return-object-awaited","link":"#return-object-awaited","children":[]}]},{"level":2,"title":"app.broadcast(eventName, data)","slug":"app-broadcast-eventname-data","link":"#app-broadcast-eventname-data","children":[{"level":3,"title":"Parameters","slug":"parameters-1","link":"#parameters-1","children":[]}]},{"level":2,"title":"app.readProcessInput(readAll)","slug":"app-readprocessinput-readall","link":"#app-readprocessinput-readall","children":[{"level":3,"title":"Parameters","slug":"parameters-2","link":"#parameters-2","children":[]},{"level":3,"title":"Return String (awaited):","slug":"return-string-awaited","link":"#return-string-awaited","children":[]}]},{"level":2,"title":"app.writeProcessOutput(data)","slug":"app-writeprocessoutput-data","link":"#app-writeprocessoutput-data","children":[{"level":3,"title":"Parameters","slug":"parameters-3","link":"#parameters-3","children":[]}]},{"level":2,"title":"app.writeProcessError(data)","slug":"app-writeprocesserror-data","link":"#app-writeprocesserror-data","children":[{"level":3,"title":"Parameters","slug":"parameters-4","link":"#parameters-4","children":[]}]}],"git":{"createdTime":1710830845000,"updatedTime":1710830845000,"contributors":[{"name":"wll8","email":"xwdaysme@gmail.com","commits":1}]},"readingTime":{"minutes":1.5,"words":450},"filePathRelative":"docs/neutralinojs/api/app.md","localizedDate":"2024年3月19日","autoDesc":true}');export{d as comp,k as data};
