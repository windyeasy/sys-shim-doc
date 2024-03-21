import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as e,c as t,a as l}from"./app-D-qA7BIg.js";const i={},a=l(`<h2 id="globalthis-ext" tabindex="-1"><a class="header-anchor" href="#globalthis-ext"><span>globalThis.ext</span></a></h2><p>当通过 main.exe 加载时，会得到一个全局对象 ext，在浏览器环境下，该对象是一个 Promise（返回json）, 在 nodejs 中是一个 json。</p><p>json 内容为:</p><ul><li>ext.wsUrl</li></ul><p>当前 json-rpc 的 url 地址。你可以通过 <code>socket</code> 来配置 ip/port/token 。</p><ul><li>ext.toekn</li></ul><p>当前 json-rpc 的 token。</p><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;hwnd&quot;</span><span class="token operator">:</span> <span class="token number">198610</span><span class="token punctuation">,</span>
    <span class="token property">&quot;token&quot;</span><span class="token operator">:</span> <span class="token string">&quot;36A07471-F13D-4048-91ED-E7A36BF2D8A8&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;wsUrl&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ws://192.168.1.253:7788&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="globalthis-sys" tabindex="-1"><a class="header-anchor" href="#globalthis-sys"><span>globalThis.Sys</span></a></h2><p>当通过 main.exe 加载时，会得到一个全局对象 Sys，实例化此对象后，即可使用 sys-shim 提供的 api。</p><ul><li>参数为：wsUrl 地址，默认为 ext.wsUrl 。</li><li>返回值：main 对象。</li></ul><h3 id="main-ws" tabindex="-1"><a class="header-anchor" href="#main-ws"><span>main.ws</span></a></h3><p>ws 连接后的 rpc 实例。</p><h3 id="main-api" tabindex="-1"><a class="header-anchor" href="#main-api"><span>main.api</span></a></h3><p>这是对三方 api 的封装，默认包含 neutralino 。</p><h3 id="main-native" tabindex="-1"><a class="header-anchor" href="#main-native"><span>main.native</span></a></h3><p>调用原生方法，返回一个 Promise 数组，第一项为失败信息，后面为运行成功的返回值。示例：</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">await</span> main<span class="token punctuation">.</span>native<span class="token punctuation">.</span>win<span class="token punctuation">.</span><span class="token function">msgbox</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">hello</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="todo" tabindex="-1"><a class="header-anchor" href="#todo"><span>todo</span></a></h2><p><code>原生 API</code> 是指通过 js 可调用的原生方法。为了让开发者不用再花精力去关注原生 api 的使用。所以这里对大部分原生 api 进行 js 调用验证后，统一在此进行对每个 api 进行文档化描述。</p><p>为了让描述更容易理解，需要对原始文档进行变更，包括但不限于：</p><ul><li>错别字修正。</li><li>格式修正：例如参数逗号后空格、参数语义化等。</li><li>对于难理解的概念进行适当批注。</li></ul><p>此 todo 用于标记工作进度和需求，为了避免工作冲突，建议<code>分模块进行工作</code>，例如 fsys 由 A 完成，fsys.path 由 B 完成。</p><ul><li><code>// 跳过</code> 表示暂无需关注，不予理睬。</li><li>已完成文档和验证的，使用 <code>- [x]</code> 标记。</li></ul><h3 id="fsys" tabindex="-1"><a class="header-anchor" href="#fsys"><span>fsys</span></a></h3><ul class="task-list-container"><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-0" disabled="disabled"><label class="task-list-item-label" for="task-item-0"> fsys.WIN32_FIND_DATA -- // 跳过</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-1" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-1"> fsys.attrib(文件路径, , 文件属性)</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-2" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-2"> fsys.attrib(文件路径, 文件属性)</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-3" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-3"> fsys.attrib(文件路径)</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-4" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-4"> fsys.copy</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-5" disabled="disabled"><label class="task-list-item-label" for="task-item-5"> fsys.copy(源路径, 目标路径, FOF选项, 进度标题, 父窗口句柄)</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-6" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-6"> fsys.createDir(目录路径, 是否清空重建)</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-7" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-7"> fsys.createParentDir(路径)</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-8" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-8"> fsys.delete</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-9" disabled="disabled"><label class="task-list-item-label" for="task-item-9"> fsys.delete(路径, FOF选项, 进度标题, 父窗口句柄)</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-10" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-10"> fsys.deleteEx</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-11" disabled="disabled"><label class="task-list-item-label" for="task-item-11"> fsys.deleteEx(路径, FOF选项, 进度标题, 父窗口句柄)</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-12" disabled="disabled"><label class="task-list-item-label" for="task-item-12"> fsys.enum(目录路径, 通配符, , 目录回调函数)</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-13" disabled="disabled"><label class="task-list-item-label" for="task-item-13"> fsys.enum(目录路径, 通配符, 回调函数, 是否处理子目录)</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-14" disabled="disabled"><label class="task-list-item-label" for="task-item-14"> fsys.enum(目录路径, 通配符, 回调函数, 目录筛选函数)</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-15" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-15"> fsys.formatSize</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-16" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-16"> fsys.formatSize(字节长度)</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-17" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-17"> fsys.formatSize(字节长度低位, 字节长度高位)</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-18" disabled="disabled"><label class="task-list-item-label" for="task-item-18"> fsys.fromFileTime</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-19" disabled="disabled"><label class="task-list-item-label" for="task-item-19"> fsys.fromFileTime(FILETIME结构体)</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-20" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-20"> fsys.getCurDir()</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-21" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-21"> fsys.getDrive()</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-22" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-22"> fsys.getExtensionName(路径)</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-23" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-23"> fsys.getFileName(文件路径)</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-24" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-24"> fsys.getParentDir(路径)</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-25" disabled="disabled"><label class="task-list-item-label" for="task-item-25"> fsys.getSpecial(<em>CSIDL</em>_)</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-26" disabled="disabled"><label class="task-list-item-label" for="task-item-26"> fsys.getSpecialDefault(<em>CSIDL</em>_)</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-27" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-27"> fsys.getSysDir()</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-28" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-28"> fsys.getTempDir()</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-29" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-29"> fsys.getWinDir()</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-30" disabled="disabled"><label class="task-list-item-label" for="task-item-30"> fsys.gmatch(文件路径, 查找串)</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-31" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-31"> fsys.idListFromPath(路径)</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-32" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-32"> fsys.isDir(路径)</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-33" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-33"> fsys.isHidden(文件路径)</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-34" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-34"> fsys.isReadonly(文件路径)</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-35" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-35"> fsys.isSystem(文件路径)</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-36" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-36"> fsys.joinpath(根目录, 不定个数子路径)</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-37" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-37"> fsys.list(目录路径, 模式匹配, 通配符)</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-38" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-38"> fsys.longpath(路径)</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-39" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-39"> fsys.move</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-40" disabled="disabled"><label class="task-list-item-label" for="task-item-40"> fsys.move(源路径, 目标路径, FOF选项, 进度标题, 父窗口句柄)</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-41" disabled="disabled"><label class="task-list-item-label" for="task-item-41"> fsys.opError -- // 跳过</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-42" disabled="disabled"><label class="task-list-item-label" for="task-item-42"> fsys.opFlags -- // 跳过</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-43" disabled="disabled"><label class="task-list-item-label" for="task-item-43"> fsys.pathFromIdList(PIDL名称ID, 是否释放PIDL)</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-44" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-44"> fsys.rename</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-45" disabled="disabled"><label class="task-list-item-label" for="task-item-45"> fsys.rename(源路径, 目标路径, FOF选项)</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-46" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-46"> fsys.replace(文件路径, 查找串, 替换串, 替换次数)</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-47" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-47"> fsys.searchFile</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-48" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-48"> fsys.searchFile(文件名)</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-49" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-49"> fsys.searchFile(文件名, 目录, ...)</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-50" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-50"> fsys.searchFile(文件名, 目录, true)</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-51" disabled="disabled"><label class="task-list-item-label" for="task-item-51"> fsys.setAttributes(文件路径, 文件属性)</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-52" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-52"> fsys.setCurDir(目录)</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-53" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-53"> fsys.shortpath(路径)</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-54" disabled="disabled"><label class="task-list-item-label" for="task-item-54"> _CSIDL_COMMON_FAVORITES -- // 跳过</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-55" disabled="disabled"><label class="task-list-item-label" for="task-item-55"> _CSIDL_COOKIES -- // 跳过</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-56" disabled="disabled"><label class="task-list-item-label" for="task-item-56"> _CSIDL_HISTORY -- // 跳过</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-57" disabled="disabled"><label class="task-list-item-label" for="task-item-57"> _CSIDL_INTERNET_CACHE -- // 跳过</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-58" disabled="disabled"><label class="task-list-item-label" for="task-item-58"> _CSIDL_TEMPLATES -- // 跳过</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-59" disabled="disabled"><label class="task-list-item-label" for="task-item-59"> findDataObject.cAlternateFileName -- // 跳过</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-60" disabled="disabled"><label class="task-list-item-label" for="task-item-60"> findDataObject.cFileName -- // 跳过</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-61" disabled="disabled"><label class="task-list-item-label" for="task-item-61"> findDataObject.dwFileAttributes -- // 跳过</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-62" disabled="disabled"><label class="task-list-item-label" for="task-item-62"> findDataObject.ftCreationTime -- // 跳过</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-63" disabled="disabled"><label class="task-list-item-label" for="task-item-63"> findDataObject.ftLastAccessTime -- // 跳过</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-64" disabled="disabled"><label class="task-list-item-label" for="task-item-64"> findDataObject.ftLastWriteTime -- // 跳过</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-65" disabled="disabled"><label class="task-list-item-label" for="task-item-65"> findDataObject.nFileSizeHigh -- // 跳过</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-66" disabled="disabled"><label class="task-list-item-label" for="task-item-66"> findDataObject.nFileSizeLow -- // 跳过</label></li></ul><h3 id="fsys-path" tabindex="-1"><a class="header-anchor" href="#fsys-path"><span>fsys.path</span></a></h3><ul class="task-list-container"><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-67" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-67"> fsys.path.addBackslash(路径)</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-68" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-68"> fsys.path.canonicalize(路径, 是否处理短路径)</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-69" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-69"> fsys.path.cmp(路径, 比较路径)</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-70" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-70"> fsys.path.commonPrefix(路径, 路径2)</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-71" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-71"> fsys.path.compact(文件路径, 显示像素宽度)</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-72" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-72"> fsys.path.eofBackslash(文件路径)</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-73" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-73"> fsys.path.full(path)</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-74" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-74"> fsys.path.full(path, root)</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-75" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-75"> fsys.path.isDir(路径)</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-76" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-76"> fsys.path.ischild(目录, 路径)</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-77" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-77"> fsys.path.long(路径)</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-78" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-78"> fsys.path.relative(路径, 目录, 返回路径是否以斜杠开始)</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-79" disabled="disabled"><label class="task-list-item-label" for="task-item-79"> fsys.path.relativeTo(参考路径, 目标路径, 参考路径属性, 目标路径属性)</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-80" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-80"> fsys.path.removeBackslash(路径)</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-81" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-81"> fsys.path.replaceDir(路径, 根目录, 新的根目录)</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-82" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-82"> fsys.path.replaceFile(路径, 新文件名)</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-83" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-83"> fsys.path.short(路径)</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-84" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-84"> fsys.path.validName(路径)</label></li></ul><h3 id="sys" tabindex="-1"><a class="header-anchor" href="#sys"><span>sys</span></a></h3><ul class="task-list-container"><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-85" disabled="disabled"><label class="task-list-item-label" for="task-item-85"> sys.getComputerName()</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-86" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-86"> sys.getStartTime()</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-87" disabled="disabled"><label class="task-list-item-label" for="task-item-87"> sys.getUserName()</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-88" disabled="disabled"><label class="task-list-item-label" for="task-item-88"> sys.hibernate()</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-89" disabled="disabled"><label class="task-list-item-label" for="task-item-89"> sys.lock()</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-90" disabled="disabled"><label class="task-list-item-label" for="task-item-90"> sys.logoff()</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-91" disabled="disabled"><label class="task-list-item-label" for="task-item-91"> sys.restart()</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-92" disabled="disabled"><label class="task-list-item-label" for="task-item-92"> sys.setComputerName(计算机名)</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-93" disabled="disabled"><label class="task-list-item-label" for="task-item-93"> sys.shutdown()</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-94" disabled="disabled"><label class="task-list-item-label" for="task-item-94"> sys.sleep()</label></li></ul><h3 id="sys-cpu" tabindex="-1"><a class="header-anchor" href="#sys-cpu"><span>sys.cpu</span></a></h3><ul class="task-list-container"><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-95" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-95"> sys.cpu.getBrand()</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-96" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-96"> sys.cpu.getFrequence()</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-97" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-97"> sys.cpu.getFrequence(true)</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-98" disabled="disabled"><label class="task-list-item-label" for="task-item-98"> sys.cpu.getInfo // 跳过</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-99" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-99"> sys.cpu.getInfo()</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-100" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-100"> sys.cpu.getInfoByWmi()</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-101" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-101"> sys.cpu.getMaxExtFunction()</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-102" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-102"> sys.cpu.getVender()</label></li></ul><h3 id="win-clip" tabindex="-1"><a class="header-anchor" href="#win-clip"><span>win.clip</span></a></h3><ul class="task-list-container"><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-103" disabled="disabled"><label class="task-list-item-label" for="task-item-103"> win.clip.formats()</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-104" disabled="disabled"><label class="task-list-item-label" for="task-item-104"> win.clip.read()</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-105" disabled="disabled"><label class="task-list-item-label" for="task-item-105"> win.clip.readBitmap()</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-106" disabled="disabled"><label class="task-list-item-label" for="task-item-106"> win.clip.readUnicode()</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-107" disabled="disabled"><label class="task-list-item-label" for="task-item-107"> win.clip.write()</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-108" disabled="disabled"><label class="task-list-item-label" for="task-item-108"> win.clip.writeBitmap</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-109" disabled="disabled"><label class="task-list-item-label" for="task-item-109"> win.clip.writeBitmap(位图句柄, 接管位图, 清空剪贴板)</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-110" disabled="disabled"><label class="task-list-item-label" for="task-item-110"> win.clip.png.read()</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-111" disabled="disabled"><label class="task-list-item-label" for="task-item-111"> win.clip.png.write(剪贴板数据, 是否清空剪贴板)</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-112" disabled="disabled"><label class="task-list-item-label" for="task-item-112"> win.clip.html()</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-113" disabled="disabled"><label class="task-list-item-label" for="task-item-113"> win.clip.gif.write()</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-114" disabled="disabled"><label class="task-list-item-label" for="task-item-114"> win.clip.file.oleCopy()</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-115" disabled="disabled"><label class="task-list-item-label" for="task-item-115"> win.clip.file.read()</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-116" disabled="disabled"><label class="task-list-item-label" for="task-item-116"> win.clip.file.write(文件路径)</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-117" disabled="disabled"><label class="task-list-item-label" for="task-item-117"> win.clip.file.write(文件路径, &quot;copy&quot;)</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-118" disabled="disabled"><label class="task-list-item-label" for="task-item-118"> win.clip.file.write(文件路径, &quot;move&quot;)</label></li></ul><h3 id="inet-httpfile" tabindex="-1"><a class="header-anchor" href="#inet-httpfile"><span>inet.httpFile</span></a></h3><ul class="task-list-container"><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-119" disabled="disabled"><label class="task-list-item-label" for="task-item-119"> inet.httpFile</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-120" disabled="disabled"><label class="task-list-item-label" for="task-item-120"> inet.httpFile()</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-121" disabled="disabled"><label class="task-list-item-label" for="task-item-121"> inet.httpFile(URL, 存储路径, 配置文件路径, userAgent, proxy, ...)</label></li></ul>`,36),c=[a];function k(b,d){return e(),t("div",null,c)}const h=s(i,[["render",k],["__file","overview.html.vue"]]),p=JSON.parse('{"path":"/docs/api/overview.html","title":"原生API概览","lang":"zh-CN","frontmatter":{"title":"原生API概览","description":"globalThis.ext 当通过 main.exe 加载时，会得到一个全局对象 ext，在浏览器环境下，该对象是一个 Promise（返回json）, 在 nodejs 中是一个 json。 json 内容为: ext.wsUrl 当前 json-rpc 的 url 地址。你可以通过 socket 来配置 ip/port/token 。 ext.t...","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/sys-shim-doc/docs/api/overview.html"}],["meta",{"property":"og:site_name","content":"sys-shim"}],["meta",{"property":"og:title","content":"原生API概览"}],["meta",{"property":"og:description","content":"globalThis.ext 当通过 main.exe 加载时，会得到一个全局对象 ext，在浏览器环境下，该对象是一个 Promise（返回json）, 在 nodejs 中是一个 json。 json 内容为: ext.wsUrl 当前 json-rpc 的 url 地址。你可以通过 socket 来配置 ip/port/token 。 ext.t..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-21T06:32:14.000Z"}],["meta",{"property":"article:author","content":"wll8"}],["meta",{"property":"article:modified_time","content":"2024-03-21T06:32:14.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"原生API概览\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-03-21T06:32:14.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"wll8\\",\\"url\\":\\"https://github.com/wll8\\"}]}"]]},"headers":[{"level":2,"title":"globalThis.ext","slug":"globalthis-ext","link":"#globalthis-ext","children":[]},{"level":2,"title":"globalThis.Sys","slug":"globalthis-sys","link":"#globalthis-sys","children":[{"level":3,"title":"main.ws","slug":"main-ws","link":"#main-ws","children":[]},{"level":3,"title":"main.api","slug":"main-api","link":"#main-api","children":[]},{"level":3,"title":"main.native","slug":"main-native","link":"#main-native","children":[]}]},{"level":2,"title":"todo","slug":"todo","link":"#todo","children":[{"level":3,"title":"fsys","slug":"fsys","link":"#fsys","children":[]},{"level":3,"title":"fsys.path","slug":"fsys-path","link":"#fsys-path","children":[]},{"level":3,"title":"sys","slug":"sys","link":"#sys","children":[]},{"level":3,"title":"sys.cpu","slug":"sys-cpu","link":"#sys-cpu","children":[]},{"level":3,"title":"win.clip","slug":"win-clip","link":"#win-clip","children":[]},{"level":3,"title":"inet.httpFile","slug":"inet-httpfile","link":"#inet-httpfile","children":[]}]}],"git":{"createdTime":1710830845000,"updatedTime":1711002734000,"contributors":[{"name":"windyeasy","email":"windyeasy13gb@163.com","commits":4},{"name":"wll8","email":"xwdaysme@gmail.com","commits":3},{"name":"禾白","email":"61929206+hebaq@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":3.66,"words":1098},"filePathRelative":"docs/api/overview.md","localizedDate":"2024年3月19日","autoDesc":true}');export{h as comp,p as data};
