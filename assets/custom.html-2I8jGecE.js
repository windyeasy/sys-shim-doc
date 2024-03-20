import{_ as o}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r,o as i,c as p,b as n,d as a,e as t,a as s}from"./app-CNvD_FSf.js";const c={},l=s(`<p>Neutralinojs 提供了一个扩展 API，允许使用任何编程语言编写自定义后端代码，但是扩展存在以下缺点，在多种情况下会影响应用程序：</p><ul><li>扩展使用共享的 WebSocket 进行通信，所以在扩展内部无法使用直接的 C++ 引用（例如，窗口处理器）。</li><li>开发者需负责打包他们的扩展二进制文件。</li><li>基于 C++ 的扩展由于基于 WebSockets 的 IPC，其速度并不如原生 C++ 代码快。</li></ul><p>作为替代，开发者可以下载框架的 C++ 代码，修改并重新编译它。但是，开发者可能会在同步上游代码修改时遇到问题。因此，Neutralinojs 提供了一个单独的命名空间，一个函数模板，内置助手函数（例如，获取窗口处理器，验证等），以及一个开发者指南，以便在不更新框架核心的情况下向 Neutralinojs 框架添加自定义 API。</p><h2 id="custom-getmethods" tabindex="-1"><a class="header-anchor" href="#custom-getmethods"><span>custom.getMethods()</span></a></h2><p>返回应用开发者添加的所有自定义方法。</p><h3 id="return-array-awaited" tabindex="-1"><a class="header-anchor" href="#return-array-awaited"><span>Return Array (awaited):</span></a></h3><p>所有自定义方法标识符的字符串数组。</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">let</span> methods <span class="token operator">=</span> <span class="token keyword">await</span> Neutralino<span class="token punctuation">.</span>custom<span class="token punctuation">.</span><span class="token function">getMethods</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>methods<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="custom-add-num1-num2-options" tabindex="-1"><a class="header-anchor" href="#custom-add-num1-num2-options"><span>custom.add(num1, num2, options)</span></a></h2>`,9),u={class:"hint-container info"},d=n("p",{class:"hint-container-title"},"相关信息",-1),m={href:"https://github.com/neutralinojs/neutralinojs/tree/main/api/custom",target:"_blank",rel:"noopener noreferrer"},h=n("code",null,"custom",-1),k={href:"https://github.com/neutralinojs/neutralinojs/blob/db457c717d789a040e70f0b8de9ddd412c8ec103/server/router.cpp#L122",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"router.cpp",-1),g=n("code",null,"add",-1),_=s(`<p>这个方法返回两个数字的和，用于演示自定义方法。</p><h3 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters"><span>Parameters</span></a></h3><ul><li><code>num1</code> Number: 求和过程的第一个数字。</li><li><code>num2</code> Number: 求和过程的第二个数字。</li></ul><h3 id="options" tabindex="-1"><a class="header-anchor" href="#options"><span>Options</span></a></h3><ul><li><code>addExtraFive</code> Boolean: 在数值结果中额外增加五。</li><li><code>addExtraTen</code> Boolean: 在数值结果中额外增加十。</li></ul><h3 id="return-number-awaited" tabindex="-1"><a class="header-anchor" href="#return-number-awaited"><span>Return Number (awaited):</span></a></h3><p>基于选项的输入数值参数的和与额外值的增加。</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">let</span> sum<span class="token punctuation">;</span>
sum <span class="token operator">=</span> <span class="token keyword">await</span> Neutralino<span class="token punctuation">.</span>custom<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 20</span>
sum <span class="token operator">=</span> <span class="token keyword">await</span> Neutralino<span class="token punctuation">.</span>custom<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">addExtraFive</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token literal-property property">addExtraTen</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 17</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),v=n("code",null,"add",-1),y={href:"https://github.com/neutralinojs/neutralinojs/tree/main/.github/workflows",target:"_blank",rel:"noopener noreferrer"};function f(w,j){const e=r("ExternalLinkIcon");return i(),p("div",null,[l,n("div",u,[d,n("p",null,[a("这是一个示例方法，官方的 Neutralinojs 框架默认不包括这个方法。因此，您需要下载 Neutralinojs 框架的源代码，并在 "),n("a",m,[h,t(e)]),a(" 命名空间和 "),n("a",k,[b,t(e)]),a(" 中取消注释 "),g,a(" 方法。")])]),_,n("p",null,[a("查看 "),v,a(" 方法的实现，并了解如何在 C++ 中捕获、验证和处理参数。为了编译你的 Neutralinojs 分支，你可以使用现有的 "),n("a",y,[a("GitHub Actions 工作流"),t(e)]),a("。")])])}const C=o(c,[["render",f],["__file","custom.html.vue"]]),P=JSON.parse('{"path":"/docs/neutralinojs/api/custom.html","title":"Neutralino.custom","lang":"zh-CN","frontmatter":{"title":"Neutralino.custom","description":"Neutralinojs 提供了一个扩展 API，允许使用任何编程语言编写自定义后端代码，但是扩展存在以下缺点，在多种情况下会影响应用程序： 扩展使用共享的 WebSocket 进行通信，所以在扩展内部无法使用直接的 C++ 引用（例如，窗口处理器）。 开发者需负责打包他们的扩展二进制文件。 基于 C++ 的扩展由于基于 WebSockets 的 IP...","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/sys-shim-doc/docs/neutralinojs/api/custom.html"}],["meta",{"property":"og:site_name","content":"sys-shim"}],["meta",{"property":"og:title","content":"Neutralino.custom"}],["meta",{"property":"og:description","content":"Neutralinojs 提供了一个扩展 API，允许使用任何编程语言编写自定义后端代码，但是扩展存在以下缺点，在多种情况下会影响应用程序： 扩展使用共享的 WebSocket 进行通信，所以在扩展内部无法使用直接的 C++ 引用（例如，窗口处理器）。 开发者需负责打包他们的扩展二进制文件。 基于 C++ 的扩展由于基于 WebSockets 的 IP..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-19T06:47:25.000Z"}],["meta",{"property":"article:author","content":"wll8"}],["meta",{"property":"article:modified_time","content":"2024-03-19T06:47:25.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Neutralino.custom\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-03-19T06:47:25.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"wll8\\",\\"url\\":\\"https://github.com/wll8\\"}]}"]]},"headers":[{"level":2,"title":"custom.getMethods()","slug":"custom-getmethods","link":"#custom-getmethods","children":[{"level":3,"title":"Return Array (awaited):","slug":"return-array-awaited","link":"#return-array-awaited","children":[]}]},{"level":2,"title":"custom.add(num1, num2, options)","slug":"custom-add-num1-num2-options","link":"#custom-add-num1-num2-options","children":[{"level":3,"title":"Parameters","slug":"parameters","link":"#parameters","children":[]},{"level":3,"title":"Options","slug":"options","link":"#options","children":[]},{"level":3,"title":"Return Number (awaited):","slug":"return-number-awaited","link":"#return-number-awaited","children":[]}]}],"git":{"createdTime":1710830845000,"updatedTime":1710830845000,"contributors":[{"name":"wll8","email":"xwdaysme@gmail.com","commits":1}]},"readingTime":{"minutes":1.75,"words":525},"filePathRelative":"docs/neutralinojs/api/custom.md","localizedDate":"2024年3月19日","autoDesc":true}');export{C as comp,P as data};
