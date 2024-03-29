import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as l,o as c,c as u,d as n,e as t,a as e,w as d,b as p}from"./app-DMUBoo1u.js";const i={},r=n("p",null,"这些 JavaScript 变量可以在任何地方使用，因为这些变量是在 window 范围内定义的。",-1),_=n("h2",{id:"预定义的全局变量",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#预定义的全局变量"},[n("span",null,"预定义的全局变量")])],-1),m=n("thead",null,[n("tr",null,[n("th",null,"变量"),n("th",null,"描述")])],-1),h=n("tr",null,[n("td",null,[n("code",null,"NL_OS")]),n("td",null,[t("操作系统名称："),n("code",null,"Linux"),t("、"),n("code",null,"Windows"),t(" 或 "),n("code",null,"Darwin")])],-1),k=n("tr",null,[n("td",null,[n("code",null,"NL_ARCH")]),n("td",null,[t("CPU 架构："),n("code",null,"x64"),t("、"),n("code",null,"arm"),t("、"),n("code",null,"itanium"),t("、"),n("code",null,"ia32"),t(" 或 "),n("code",null,"unknown")])],-1),v=n("tr",null,[n("td",null,[n("code",null,"NL_APPID")]),n("td",null,"应用程序标识符")],-1),b=n("tr",null,[n("td",null,[n("code",null,"NL_APPVERSION")]),n("td",null,"应用程序版本")],-1),N=n("tr",null,[n("td",null,[n("code",null,"NL_PORT")]),n("td",null,"应用程序端口")],-1),g=n("tr",null,[n("td",null,[n("code",null,"NL_MODE")]),n("td",null,[t("应用程序的模式："),n("code",null,"window"),t("、"),n("code",null,"browser"),t("、"),n("code",null,"cloud"),t(" 或 "),n("code",null,"chrome")])],-1),T=n("tr",null,[n("td",null,[n("code",null,"NL_VERSION")]),n("td",null,"Neutralinojs 框架版本")],-1),L=n("tr",null,[n("td",null,[n("code",null,"NL_CVERSION")]),n("td",null,"Neutralinojs 客户端版本")],-1),y=n("tr",null,[n("td",null,[n("code",null,"NL_CWD")]),n("td",null,"当前工作目录")],-1),q=n("tr",null,[n("td",null,[n("code",null,"NL_PATH")]),n("td",null,"应用程序路径")],-1),S=n("tr",null,[n("td",null,[n("code",null,"NL_ARGS")]),n("td",null,"命令行参数")],-1),w=n("tr",null,[n("td",null,[n("code",null,"NL_PID")]),n("td",null,"当前进程的标识符")],-1),C=n("tr",null,[n("td",null,[n("code",null,"NL_RESMODE")]),n("td",null,[t("应用程序资源的来源："),n("code",null,"bundle"),t(" 或 "),n("code",null,"directory")])],-1),E=n("tr",null,[n("td",null,[n("code",null,"NL_EXTENABLED")]),n("td",null,[t("如果启用了扩展，则返回 "),n("code",null,"true")])],-1),M=n("tr",null,[n("td",null,[n("code",null,"NL_COMMIT")]),n("td",null,"框架二进制的发布提交哈希")],-1),j=n("tr",null,[n("td",null,[n("code",null,"NL_CCOMMIT")]),n("td",null,"客户端库的发布提交哈希")],-1),O=n("td",null,[n("code",null,"NL_CMETHODS")],-1),f=n("code",null,"custom.getMethods",-1),x=n("tr",null,[n("td",null,[n("code",null,"NL_WSAVSTLOADED")]),n("td",null,[t("如果初始窗口状态是从保存的配置加载的，则返回 "),n("code",null,"true")])],-1),I=p(`<div class="hint-container tip"><p class="hint-container-title">提示</p><p>如果您使用夜间发布，可以使用 <code>NL_COMMIT</code> 和 <code>NL_CCOMMIT</code> 值来识别代码库快照。</p></div><h2 id="自定义全局变量" tabindex="-1"><a class="header-anchor" href="#自定义全局变量"><span>自定义全局变量</span></a></h2><p>您也可以通过 <code>neutralino.config.json</code> 创建自定义全局变量，如下所示。</p><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token property">&quot;globalVariables&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;TEST&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Test Value&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以使用 <code>NL_TEST</code> 访问上面的自定义全局变量值。您可以为自定义全局变量设置任何数据类型。请看以下例子。</p><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token property">&quot;globalVariables&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;TEST_1&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;TEST_2&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
    <span class="token property">&quot;TEST_3&quot;</span><span class="token operator">:</span> <span class="token number">3.5</span><span class="token punctuation">,</span>
    <span class="token property">&quot;TEST_4&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;TEST_5&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;value&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;anotherKey&quot;</span><span class="token operator">:</span> <span class="token number">100</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>避免覆盖预定义的全局变量。</p>`,7);function D(R,V){const s=l("RouteLink"),o=l("RenderedHack");return c(),u("div",null,[r,_,n("table",null,[m,n("tbody",null,[h,k,v,b,N,g,T,L,y,q,S,w,C,E,M,j,n("tr",null,[O,n("td",null,[t("自定义方法标识符（返回与 "),e(s,{to:"/docs/neutralinojs/api/custom.html#customgetmethods"},{default:d(()=>[f]),_:1}),t(" 相同的输出）。")])]),x])]),I,e(o)])}const H=a(i,[["render",D],["__file","global-variables.html.vue"]]),B=JSON.parse('{"path":"/docs/neutralinojs/api/global-variables.html","title":"全局变量","lang":"zh-CN","frontmatter":{"title":"全局变量","description":"这些 JavaScript 变量可以在任何地方使用，因为这些变量是在 window 范围内定义的。 预定义的全局变量 提示 如果您使用夜间发布，可以使用 NL_COMMIT 和 NL_CCOMMIT 值来识别代码库快照。 自定义全局变量 您也可以通过 neutralino.config.json 创建自定义全局变量，如下所示。 可以使用 NL_TEST...","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/sys-shim-doc/docs/neutralinojs/api/global-variables.html"}],["meta",{"property":"og:site_name","content":"sys-shim"}],["meta",{"property":"og:title","content":"全局变量"}],["meta",{"property":"og:description","content":"这些 JavaScript 变量可以在任何地方使用，因为这些变量是在 window 范围内定义的。 预定义的全局变量 提示 如果您使用夜间发布，可以使用 NL_COMMIT 和 NL_CCOMMIT 值来识别代码库快照。 自定义全局变量 您也可以通过 neutralino.config.json 创建自定义全局变量，如下所示。 可以使用 NL_TEST..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-19T06:47:25.000Z"}],["meta",{"property":"article:author","content":"wll8"}],["meta",{"property":"article:modified_time","content":"2024-03-19T06:47:25.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"全局变量\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-03-19T06:47:25.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"wll8\\",\\"url\\":\\"https://github.com/wll8\\"}]}"]]},"headers":[{"level":2,"title":"预定义的全局变量","slug":"预定义的全局变量","link":"#预定义的全局变量","children":[]},{"level":2,"title":"自定义全局变量","slug":"自定义全局变量","link":"#自定义全局变量","children":[]}],"git":{"createdTime":1710830845000,"updatedTime":1710830845000,"contributors":[{"name":"wll8","email":"xwdaysme@gmail.com","commits":1}]},"readingTime":{"minutes":1.23,"words":368},"filePathRelative":"docs/neutralinojs/api/global-variables.md","localizedDate":"2024年3月19日","autoDesc":true}');export{H as comp,B as data};
