import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as n,c as a,a as t}from"./app-Po8Pscvf.js";const e={},p=t(`<h1 id="fsys-remove" tabindex="-1"><a class="header-anchor" href="#fsys-remove"><span>fsys.remove</span></a></h1><p>用于移除参数@1指定路径的目录或文件， 支持 fsys.delete 函数无法删除的畸形路径, 此函数库不在 fsys 库内需要单独导入</p><h2 id="fsys-remove-路径或文件" tabindex="-1"><a class="header-anchor" href="#fsys-remove-路径或文件"><span>fsys.remove(路径或文件)</span></a></h2><p>用于移除参数@1指定路径的目录或文件， 支持 fsys.delete 函数无法删除的畸形路径, 此函数库不在 fsys 库内需要单独导入</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>path <span class="token operator">=</span> <span class="token string">&#39;C:\\\\sys-shim-test&#39;</span>
<span class="token keyword">await</span> native<span class="token punctuation">.</span>fsys<span class="token punctuation">.</span><span class="token function">createDir</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span>

<span class="token comment">// 写入文件夹，文件</span>
path2 <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">C:/sys-shim-test/test2</span><span class="token template-punctuation string">\`</span></span>
<span class="token keyword">await</span> native<span class="token punctuation">.</span>fsys<span class="token punctuation">.</span><span class="token function">createDir</span><span class="token punctuation">(</span>path2<span class="token punctuation">)</span>

filepath <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">C:/sys-shim-test/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">.md</span><span class="token template-punctuation string">\`</span></span>
<span class="token keyword">await</span> native<span class="token punctuation">.</span>string<span class="token punctuation">.</span><span class="token function">save</span><span class="token punctuation">(</span>filepath<span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">hello</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>

<span class="token comment">// 移除目录</span>
<span class="token punctuation">;</span><span class="token punctuation">[</span><span class="token punctuation">,</span> res<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">await</span> native<span class="token punctuation">.</span>fsys<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span>path2<span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">{</span>res<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// {res: true}</span>

<span class="token comment">// 移除文件</span>
<span class="token punctuation">;</span><span class="token punctuation">[</span><span class="token punctuation">,</span> res<span class="token punctuation">]</span> <span class="token operator">=</span>  <span class="token keyword">await</span> <span class="token keyword">await</span> native<span class="token punctuation">.</span>fsys<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span>filepath<span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">{</span>res<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// {res: true}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),o=[p];function c(i,l){return n(),a("div",null,o)}const m=s(e,[["render",c],["__file","fsys.remove.html.vue"]]),d=JSON.parse('{"path":"/docs/api/fsys/fsys.remove.html","title":"fsys.remove","lang":"zh-CN","frontmatter":{"description":"fsys.remove 用于移除参数@1指定路径的目录或文件， 支持 fsys.delete 函数无法删除的畸形路径, 此函数库不在 fsys 库内需要单独导入 fsys.remove(路径或文件) 用于移除参数@1指定路径的目录或文件， 支持 fsys.delete 函数无法删除的畸形路径, 此函数库不在 fsys 库内需要单独导入 ","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/sys-shim-doc/docs/api/fsys/fsys.remove.html"}],["meta",{"property":"og:site_name","content":"sys-shim"}],["meta",{"property":"og:title","content":"fsys.remove"}],["meta",{"property":"og:description","content":"fsys.remove 用于移除参数@1指定路径的目录或文件， 支持 fsys.delete 函数无法删除的畸形路径, 此函数库不在 fsys 库内需要单独导入 fsys.remove(路径或文件) 用于移除参数@1指定路径的目录或文件， 支持 fsys.delete 函数无法删除的畸形路径, 此函数库不在 fsys 库内需要单独导入 "}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-26T09:57:29.000Z"}],["meta",{"property":"article:author","content":"wll8"}],["meta",{"property":"article:modified_time","content":"2024-03-26T09:57:29.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"fsys.remove\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-03-26T09:57:29.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"wll8\\",\\"url\\":\\"https://github.com/wll8\\"}]}"]]},"headers":[{"level":2,"title":"fsys.remove(路径或文件)","slug":"fsys-remove-路径或文件","link":"#fsys-remove-路径或文件","children":[]}],"git":{"createdTime":1711447049000,"updatedTime":1711447049000,"contributors":[{"name":"windyeasy","email":"windyeasy13gb@163.com","commits":1}]},"readingTime":{"minutes":0.55,"words":164},"filePathRelative":"docs/api/fsys/fsys.remove.md","localizedDate":"2024年3月26日","autoDesc":true}');export{m as comp,d as data};
