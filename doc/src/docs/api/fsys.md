## fsys.attrib(文件路径, 文件属性)

添加文件属性
参数一为文件路径
参数三 可以用 | 操作符连接多个属性
成功返回新属性,失败返回null

文档属性文档：[https://learn.microsoft.com/zh-cn/windows/win32/fileio/file-attribute-constants](https://learn.microsoft.com/zh-cn/windows/win32/fileio/file-attribute-constants)

```js
path = `C:/sys-shim-code/tmp/${Date.now()}.txt`
await native.string.save(path, `hello`)

;[, res1] = await native.fsys.isHidden(path)

// 为文件添加隐藏属性
await native.fsys.attrib(path, undefined, 0x2)
;[, res2] = await native.fsys.isHidden(path)

console.log({res1, res2})

// {res1: 0, res2: 2}
```

## fsys.copy

复制文件或目录,
此函数失败返回 false 时可用 fsys.opError 获取错误代码 

注意：包含不可见字符的错误路径可用「工具>文本文件>十六进制编辑器」
或 string.hex 函数查看

### fsys.copy(源路径, 目标路径)

复制文件或目录,
源路径参数可以是多个路径组成的数组,其他参数可选。
如果目标路径已存在或源路径含通配符则复制到目标目录下面,
否则复制文件或目录到参数@2指定的目标路径。 

如果目标路径的父目录可能不存在，请先用 io.createDir 创建该目录

```js
path = `C:/sys-shim-code/tmp/test/`
filename = `${Date.now()}.txt`
filepath = path + filename

await native.fsys.createDir(path)
await native.string.save(filepath, `hello`)

await native.fsys.copy(filepath, `${filepath}.copy.txt`)
;[, res1] = await native.string.load(`${filepath}.copy.txt`)

console.log({res1})

// {res1: 'hello'}
```

## fsys.createDir(目录路径) 

创建目录并返回创建成功的完整文件路径
可创建多层目录, 参数二可选 

```js
path = `C:/sys-shim-code/tmp/${Date.now()}`

;[, res1] = await native.fsys.isDir(path)
await native.fsys.createDir(path)
;[, res2] = await native.fsys.isDir(path)

console.log({res1, res2})

// {res1: false, res2: 16}
```

## fsys.createParentDir(路径)

创建指定路径的父目录.

```js
path = `C:/sys-shim-code/tmp/${Date.now()}/test`

;[, res1] = await native.fsys.createParentDir(path)

console.log({res1})

// {res1: 'C:\\sys-shim-code\\tmp\\1710905499024\\'}
```

## fsys.delete

删除文件或目录,成功返回 true

### fsys.delete(路径)

删除文件或目录,成功返回 true,
删除含畸形路径的目录请改用 fsys.remove 函数。
此函数失败返回 false 时可用 fsys.opError 获取错误代码

```js
path = `C:/sys-shim-code/tmp/test/${Date.now()}.txt`
await native.fsys.createParentDir(path)
await native.string.save(path, `hello`)
;[, res1] = await native.string.load(path)

await native.fsys.delete(path)

;[, res2] = await native.string.load(path)

console.log({res1, res2})

// {res1: 'hello', res2: undefined}
```

## fsys.deleteEx

删除文件或目录,成功返回true,
此函数失败返回 false 时可用 fsys.opError 获取错误代码

## fsys.deleteEx(路径)

删除文件,成功返回true,
路径参数只能是字符串,其他参数可选
如果删除失败,则在下次系统重启时删除文件,
重启删除目录之前必须先清空目录,
重启删除文件的顺序与调用时的顺序相同

```js
path = `C:/sys-shim-code/tmp/test/${Date.now()}.txt`
await native.fsys.createParentDir(path)
await native.string.save(path, `hello`)

;[, res1] = await native.string.load(path)

await native.fsys.deleteEx(path)
;[, res2] = await native.string.load(path)

console.log({res1, res2})

// {res1: 'hello', res2: undefined}
```

## fsys.formatSize

转换字节长度到适合的最大单位表示的文本,
单位使用 bytes,KB,MB,GB等

### fsys.formatSize()

该函数参数支持math.size64支持的所有参数类型

```js
await native.fsys.formatSize()
/**
 * 返回
 [false, '0 字节']
 */

```

### fsys.formatSize(字节长度)

转换字节长度到适合的最大单位表示的文本,
单位使用 bytes,KB,MB,GB等

```js
await native.fsys.formatSize(100)
/**
 * 返回
[false, '100 字节']
 */
```

### fsys.formatSize(字节长度低位, 字节长度高位)

转换字节长度到适合的最大单位( bytes,KB,MB,GB等 )
低位用于表示4GB以下的长度,高位以4GB为最小单位表示长度

```js
await native.fsys.formatSize(100, 2)
/**
 * 返回
[false, '8.00 GB']
 */
```

## fsys.getCurDir()

获取当前目录。 

当前目录易被改动，导致相对路径（例如 "./res/"）位置变化。
路径首字符用单个斜杠或反斜杆表示「应用程序根目录」的写法更可靠，
例如：（例如 "/res/"）。
很多组件（例如文件对话框）都可能会悄悄改变当前目录

```js
await native.fsys.getCurDir()
/**
 * 返回
[false, 'F:\\company-code\\sys-shim-core\\']
 */
```
## fsys.getDrive()

返回应用程序所在分区,以冒号结束

```js
await native.fsys.getDrive()
/**
 * 返回
[false, 'F:']
 */
```

## fsys.getExtensionName(路径)

返回文件后缀名,转换为小写.
无后缀名则返回null空值

```js
await native.fsys.getExtensionName("C:/sys-shim-code/tmp/test3-1.txt")
/**
 * 返回
[false, 'txt`']
 */
```

## fsys.getFileName(文件路径)

返回路径的所指向的文件名(或目录名称)
```js
path = "C:/sys-shim-code/tmp/"
filepath = path + 'test3.txt'
await native.fsys.getFileName(filepath)
/**
 * 返回
[false, 'test3.txt']
 */
await native.fsys.getFileName(path)
/**
 * 返回
[false, 'tmp']
 */
```

## fsys.getParentDir(路径)

返回指定路径的父目录

```js
path = "C:/sys-shim-code/tmp/test3/"
filepath = `${path}test3-1.txt`
await native.fsys.getParentDir(filepath)
/**
 * 返回
[false, 'C:/sys-shim-code/tmp/test3/']
 */
await native.fsys.getParentDir(path)
/**
 * 返回
[false, 'C:/sys-shim-code/tmp/']
 */
```

## fsys.getTempDir()

返回临时目录,
注意拼接目录与子路径应当使用 io.joinpath 函数
获取临时文件路径应当改用 io.tmpname 函数

```js
await native.fsys.getTempDir()
/**
 * 返回
[false, 'C:\\Users\\WINDYE~1\\AppData\\Local\\Temp']
 */
```

## fsys.idListFromPath(路径)

路径转换为名称ID(PIDL)\路径必须存在

```js
path = "C://sys-shim-code/tmp/test3"
await native.fsys.createDir(path)
await native.fsys.idListFromPath(path)
/**
 * 返回
 [false, 'pointer: 009A9AE8']
 */
```

## fsys.isDir(路径)

路径是否目录
调用attrib检查目标路径是否具有_FILE_ATTRIBUTE_DIRECTORY属性
参数为空字符串或 null 返回 false 

包含不可见字符的错误路径可用「工具>文本文件>十六进制编辑器」
或 string.hex 函数查看

```js
path = "C:/sys-shim-code/tmp/test3/"
filepath = `${path}test3-1.txt`
await native.fsys.isDir(path)
/**
 * 返回
 [false, 16]
 */
await native.fsys.isDir(filepath)
/**
 * 返回
 [false, false]
 */
```

## fsys.isHidden(文件路径)

是否隐藏文件
调用attrib检查文件是否具有_FILE_ATTRIBUTE_HIDDEN属性
注意:WIN10 新版存在设为隐藏文件后变只读的问题

```js
path = `C:/sys-shim-code/tmp/${Date.now()}.txt`
await native.createParentDir(path)
await native.string.save(path, `hello`)

;[, res1] = await native.fsys.isHidden(path)

// 为文件添加隐藏属性
await native.fsys.attrib(path, undefined, 0x2)
;[, res2] = await native.fsys.isHidden(path)

console.log({res1, res2})

// {res1: 0, res2: 2}

// 没有创建的文件
newpath = `C:/sys-shim-code/tmp/${Date.now()}.txt`
await native.fsys.isHidden(newpath)
/**
 * 返回
  [false, false]
 */
```

## fsys.isReadonly(文件路径)

文件是否只读
调用attrib检查文件是否具有_FILE_ATTRIBUTE_READONLY属性

```js
path = "C:/sys-shim-code/tmp/test3/test3-1.txt"
await native.fsys.createDir(path)

// 判断可读文件
;[,res1] = await native.fsys.isReadonly(path)
// 设置为只读文件
await native.fsys.attrib(path, undefined, 0x1)
// 判断只读文件
;[,res2] = await native.fsys.isReadonly(path)
console.log({res1, res2})
// {res1: 0, res2: 1}
```

## fsys.isSystem(文件路径)

是否系统文件
调用attrib检查文件是否具有_FILE_ATTRIBUTE_SYSTEM属性

```js
path = "C:/sys-shim-code/tmp/test3/test3-2.txt"
await native.fsys.createDir(path)

// 判断非系统系统文件
;[,res1] = await native.fsys.isSystem(path)

// 设置为系统文件
await native.fsys.attrib(path, undefined, 0x4)
;[,res2] = await native.fsys.isSystem(path)
console.log({res1, res2})
// {res1: 0, res2: 4}
```

## fsys.joinpath(根目录, 不定个数子路径)

注意根目录不可以圆点字符开始
可追加任意个子路径参数,如果子路径是绝对路径则返回子路径
拼接时可以使用空参数,但不可全部参数为空

```js
await native.fsys.joinpath("C:/", "/test", "/test1-1")
/**
 * 返回
 [false, 'C:\\test\\test1-1']
 */
```

## fsys.list(目录路径, 模式匹配, 通配符)

搜索当前目录下的文件，不搜索子目录下的文件,
返回符合条件的文件名数组,子目录数组，以及全部子目录数组。
注意有三个返回值,数组中使用文件名为键存放对应完整路径的值。
除参数@1以外其他参数可选，
参数@2使用模式匹配语法匹配文件名，模式匹配会成为第三个返回值的匹配条件,
通配符默认值是"*.*",也可以传入包含多个通配符的数组,通配符对第三个返回值无效

参数2：模式匹配使用正则表达式语法匹配

```js
path = `C:/sys-shim-code/tmp/test3/`
filenames = [
  "test3-1.txt",
  "test3-2.txt",
  "test3-4.txt",
  "test3-5.txt"
]
for (let filename of filenames){
  await native.fsys.createDir(path)
  await native.string.save(path+filename, `hello`) 
}
[, ...args] = await native.fsys.list(path, `*?`, '*.txt')
console.log(args)
/**
 * 返回
[
  // 文件名数组
  [
    "test3-1.txt",
    "test3-2.txt",
    "test3-4.txt",
    "test3-5.txt"
  ], 
  [], // 子目录数组
  []  // 全部子目录数组
]
 */
```

## fsys.longpath(路径)

转换为完整路径,并将短文件名转换为长文件名

```js

await native.fsys.longpath("C:/sys-shim-code/tmp/test3/test3-1.txt")
/**
 * 返回
 [false, 'C:/sys-shim-code/tmp/test3/test3-1.txt']
 */
await native.fsys.longpath("test3-1.txt")
/**
 * 返回
 [false, 'F:\\company-code\\sys-shim-core\\test3-1.txt']
 */
```

## fsys.move

移动文件或目录。
此函数失败返回 false 时可用 fsys.opError 获取错误代码

### fsys.move(源路径, 目标路径)

移动文件或目录,
源路径参数可以是多个路径组成的数组,其他参数可选。
如果目标路径已存在或源路径含通配符则移动到目标目录下面,
否则复制文件或目录到参数@2指定的目标路径。 

如果目标路径的父目录可能不存在，请先用 io.createDir 创建该目录 

```js
path = "C:/sys-shim-code/tmp/test-move1/"
path2 = "C:/sys-shim-code/tmp/test-move2/"
filename = "test-move1-1.txt"
filepath = path + filename
filepath2 = path2 + filename
// 创建目录
await native.fsys.createDir(path)
await native.fsys.createDir(path2)

// 写入文件
await native.string.save(filepath, "hello")
// 开始文件不存在
;[,res1] = await native.string.load(filepath2) 
// 移动文件
await native.fsys.move(filepath, path2)
/**
 * 返回
 [false, true]
 */
// 移动后文件存在了
;[,res2] = await native.string.load(filepath2) 
console.log({res1, res2})
// {res1: undefined, res2: 'hello'}
```

## fsys.rename

重命名文件或目录,
此函数失败返回 false 时可用 fsys.opError 获取错误代码

### fsys.rename(源路径, 目标路径, FOF选项)

重命名文件或目录,其他参数可选 
FOF选项为 0 或 不指定该选项但 fsys.opFlags 为 0
则显示操作界面与错误信息

```js
path = "C:/sys-shim-code/tmp/test-rename/"
filename = path + 'test-rename1.txt'
refilename = path + 'test-rename2.txt'
await native.fsys.createDir(path)
await native.string.save(filename, "hello")

// 表示需要重命名文件不存在
;[,res1] = await native.string.load(refilename)
// 重命名文件
await native.fsys.rename(filename, refilename)
/**
 * 返回
 [false, true]
 */
// 文件已经被重命名不存在
;[,res2] = await native.string.load(filename)
// 加载已经重命名文件
;[,res3] = await native.string.load(refilename)
console.log({res1, res2, res3})
// {res1: undefined, res2: undefined, res3: 'hello'}
```
## fsys.replace(文件路径, 查找串, 替换串, 替换次数)

替换文件内容,
查找串支持模式匹配,\支持所有string.replace函数支持的替换串格式,
不指定替换次数则替换所有匹配串 

成功返回替换次数，否则返回 null

```js
path = 'C:/sys-shim-code/tmp/test-replace/test-replace1.txt'
await native.fsys.createParentDir(path)
await native.string.save(path, "replace\nreplace\nreplace")
;[,res1] = await native.string.load(path)
await native.fsys.replace(path, "replace", "rp")
/**
 * 返回
 [false, 3]
 */
;[,res2] = await native.string.load(path)
console.log({res1, res2})
// {res1: 'replace\nreplace\nreplace', res2: 'rp\nrp\nrp'}
```

* 替换并设置替换次数

```js
path = "C:/sys-shim-code/tmp/test-replace/test-replace2.txt"
await native.fsys.createParentDir(path)
await native.string.save(path, "replace\nreplace\nreplace\nreplace")
;[,res1] = await native.string.load(path)
await native.fsys.replace(path, "replace", "rp", 3)
/**
 * 返回
 [false, 3]
 */
;[,res2] = await native.string.load(path)
console.log({res1, res2})
// {res1: 'replace\nreplace\nreplace\nreplace', res2: 'rp\nrp\nrp\nreplace'}
```

## fsys.setCurDir(目录)

设置当前目录。 

当前目录易被改动，导致相对路径（例如 "./res/"）位置变化。
路径首字符用单个斜杠或反斜杆表示「应用程序根目录」的写法更可靠，
例如：（例如 "/res/"）。
很多组件（例如文件对话框）都可能会悄悄改变当前目录

```js
await native.fsys.setCurDir("./src")
/**
 * 返回
 [false, 1]
 */
await native.fsys.getCurDir()
/**
 * 返回
 [false, 'F:\\company-code\\sys-shim-core\\src\\']
 */
```

## fsys.shortpath(路径)

转换为短路径,
如果文件不存在,返回空值,
短文件名指向会因实际文件数变更,所以不能把短路径存入数据库 

存在特定文件目录无法获取短路径且返回包含空格的长路径的可能性
如无必要，不建议使用或依赖此函数，正确使用 process 等可以自动 
转义路径参数中的空格

短路径与长路径的区别: [https://zhidao.baidu.com/question/458582247.html](https://zhidao.baidu.com/question/458582247.html)

```js
// 创建路径
path = 'C:/sys-shim-code/tmp/program files/'

await native.fsys.createDir(path)
await native.fsys.shortpath(path)
/**
 * 返回
  [false, 'C:\\SYS-SH~1\\tmp\\PROGRA~1\\']
 */
```

## fsys.getSysDir()

返回系统目录  
可选在参数中指定子路径并返回完整路径  

## fsys.getWinDir()

返回windows目录  
可选在参数中指定子路径并返回完整路径  

## fsys.searchFile 

查找文件

### fsys.searchFile(文件名) 

检查程序根目录、当前工作目录、系统目录  
是否包含指定文件，找到则返回文件完整路径。  
不搜寻子目录

### fsys.searchFile(文件名, 目录, ...) 

检查一个或多个目录下是否包含指定文件  
如果存在返回完整路径,否则返回 null。  
不搜寻子目录

``` js
await native.fsys.searchFile(`desktop.ini`, `C:/Program Files`, `C:/Program Files (x86)`)
/**
 * 返回
[false, 'C:\\Program Files\\desktop.ini']
 */
```

### fsys.searchFile(文件名, 目录, true) 

在指定目录以及其子目录下搜寻指定文件，  
如果存在返回完整路径,否则返回 null。   

内部调用 fsys.enum 查找，参数 @1 支持 "*","?" 等通配符  

``` js
await native.fsys.searchFile(`*.txt`, `C:`, true)
/**
 * 返回
[false, 'C:\\$WINDOWS.~BT\\Sources\\appraisersdblatestoshash.txt']
 */
```

## fsys.path

提供文件路径相关函数,
在导入fsys支持库时将自动导入fsys.path

### fsys.path.addBackslash(路径) 

首先替换所有正斜杠为反斜杠  
如果目录最后面没有反斜杠,则追加反斜杠,  
这个函数实际是调用 io.joinpath(path,"/")  

``` js
await native.fsys.path.addBackslash(`c:/`)

/**
 * 返回
[false, 'c:\\']
 */
```

### fsys.path.canonicalize(路径, 是否处理短路径) 

转换为完整路径,  
并对路径进行归一化处理,参数2可选(默认为true),  
扩展和适当置换路径中包含的所有".."和"."  
该函数保证除分区根目录外保证尾部不为斜杠  

``` js
await native.fsys.path.canonicalize(`C:/a/b/./c/../`)

/**
 * 返回
[false, 'C:\\a\\b']
 */
```

### fsys.path.cmp(路径, 比较路径)

比较两个路径是否指向同一位置,
任何一个参数为null时返回-1,
返回值意义与 string.cmp()函数相同,
路径相同则返回0,注意在条件表达式中为false 

更准确的检测相同或不同的路径是否指向同一真实文件,
应使用fsys.fileInfo函数

``` js
path = 'C:/sys-shim-code/tmp/test-path-cmp'
path1 = 'C:/sys-shim-code/tmp/test-path-cmp/../test-path-cmp/'
await native.fsys.createDir(path)
// 路径指向同一个
await native.fsys.path.cmp(path, path1)
/**
 * 返回
 [false, 0]
 */

// 路径执行不同位置
await native.fsys.path.cmp(path, './src')
/**
 * 返回
 [false, 92]
 */
```

### fsys.path.commonPrefix(路径, 路径2)

返回两个文件路径的公共前缀目录
该函数失败保证返回的是一个目录比以斜杠结尾,失败返回null,
在比较以前自动对路径归一化处理,忽略大小写

``` js
await native.fsys.path.commonPrefix(`C:/sys-shim-code/tmp/test`, `C:/sys-shim-code/tmp/test2`)
/**
 * 返回
 [false, 'C:\\sys-shim-code\\tmp\\']
 */
```

### fsys.path.compact(文件路径, 显示像素宽度)

截断路径来适合一定数目的像素

``` js
await native.fsys.path.compact(`C:/sys-shim-code/tmp/test/test1-1`)
/**
 * 返回
 [false, 'F:/company-code/tmp/test/test1-1']
 */
await native.fsys.path.compact(`C:/sys-shim-code/tmp/test/test1-1`, 0)
/**
 * 返回
 [false, '...\\test1-1...']
 */
await native.fsys.path.compact(`C:/sys-shim-code/tmp/test/test1-1`, 200)
/**
 * 返回
 [false, 'F:/company-c...\\test1-1']
 */
```

### fsys.path.eofBackslash(文件路径)

首先替换所有正斜杠为反斜杠
检测路径尾部是否有反斜杠

```js
await native.fsys.path.eofBackslash(`C:/sys-shim-code/tmp/test/test1-1/`)
/**
 * 返回
 [false, 34]
 */
await native.fsys.path.eofBackslash(`C:/sys-shim-code/tmp/test\\test1-1`)
/**
 * 返回
 [false]
 */
await native.fsys.path.eofBackslash(`C:/sys-shim-code/tmp/test\\test1-1\\`)
/**
 * 返回
 [false, 34]
 */
```

### fsys.path.full(path)

如果路径是绝对路径则返回该路径（不作任何转换）,
否则返回null

```js
await native.fsys.path.full(`C:/sys-shim-code/tmp/test/test1-1/`)
/**
 * 返回
 [false, 'C:/sys-shim-code/tmp/test/test1-1/']
 */
await native.fsys.path.full(`./src`)
/**
 * 返回
 [false]
 */
```

### fsys.path.full(path, root)

如果path是相对路径，并且不以/、\、~等字符开始,
则返回io.joinpath(root,path)
否则转换为绝对路径返回

```js
await native.fsys.path.full(`./src`, "C:/test")
/**
 * 返回
 [false, 'C:\\test\\src']
 */
await native.fsys.path.full("F:/company-code/tmp/test/test1-1", "C:/test")
/**
 * 返回
 [false, 'F:/company-code/tmp/test/test1-1']
 */
await native.fsys.path.full("./src", "test")
/**
 * 返回
 [false, 'F:\\company-code\\sys-shim-core\\test\\src']
 */
```

### fsys.path.isDir(路径)

如果文件路径存在并且是一个目录,
或者路径路径以斜杠、反斜杠结束返回真

```js
path = "C:/sys-shim-code/tmp/test"
filenamepath = "C:/sys-shim-code/tmp/test/test1.txt"
// 添加路径
await native.fsys.createDir(path)
// 判断文件
;[, res1] = await native.fsys.path.isDir(filenamepath)
/**
 * 返回
 [false, false]
 */
;[, res2] = await native.fsys.path.isDir("C:/sys-shim-code/tmp/test/")
/**
 * 返回
 [false, true]
 */
console.log({res1, res2})
// {res1: false, res2: true}
```

### fsys.path.ischild(目录, 路径)

检测参数@2指定的路径是否在参数@1指定的目录之下

```js
await native.fsys.path.ischild("C:/sys-shim-code/", "C:/sys-shim-code/tmp/test/")
/**
 * 返回
 [false, true]
 */
await native.fsys.path.ischild("C:/sys-shim-code/tmp/", "/test/")
/**
 * 返回
 [false, false]
 */
```

### fsys.path.long(路径)

转为长路径

```js
await native.fsys.path.long("./src")
/**
 * 返回
 [false, 'F:\\company-code\\sys-shim-core\\src']
 */

path = 'C:/sys-shim-code/tmp/program files/'
await native.fsys.createDir(path)
// 获取短路径
;[,shortpath] = await native.fsys.shortpath(path)
// 将短路径转为长路径
await native.fsys.path.long(shortpath)
/**
 * 返回
 [false, 'C:\\sys-shim-code\\tmp\\program files\\']
 */
```

### fsys.path.relative(路径, 目录, 返回路径是否以斜杠开始)

将路径转换为指定目录下层的相对路径,
在比较以前自动对路径归一化处理,忽略大小写
相同路径则返回空字符串,不是该目录下的路径则返回null
参数三可选,默认首字符为斜杠

```js
await native.fsys.path.relative("C:/sys-shim-code/tmp/", "C:/sys-shim-code/", true)
/**
 * 返回
 [false, '\\tmp\\']
 */
await native.fsys.path.relative("C:/sys-shim-code/tmp/", "C:/sys-shim-code/", false)
/**
 * 返回
 [false, 'tmp\\']
 */
```

### fsys.path.relativeTo(参考路径, 目标路径, 参考路径属性, 目标路径属性)

自参数@1指定的路径得到一个相对路径指向目标路径
注意相对路径不一定是子目录,如果是上层目录使用 ../ 表示
路径属性可为0,或 _FILE_ATTRIBUTE_DIRECTORY,可省略

```js
await native.fsys.path.relativeTo("C:/sys-shim-code/tmp", "C:/sys-shim-code/")
/**
 * 返回
 [false, '..\\']
 */
await native.fsys.path.relativeTo("C:/sys-shim-code/tmp", "C:/sys-shim-code/tmp/test")
/**
 * 返回
 [false, '.\\test']
 */
```

### fsys.path.removeBackslash(路径)

首先转换为完整路径,替换所有正斜杠为反斜杠
移除路径最后面的反斜杠,并返回新路径以及尾字符
如果尾字符为反斜杠并已移除,第二个返回值为空字符
如果是分区号后的反斜杠或路径只有一个反斜杠,第二个返回值为反斜杠

```js
await native.fsys.path.removeBackslash("C:/sys-shim-code/tmp/")
/**
 * 返回
 [false, 'C:/sys-shim-code/tmp']
 */
```

### fsys.path.replaceDir(路径, 根目录, 新的根目录)

将路径转换为参数2指定根目录下的相对路径
再将其转换为新的根目录下的绝对路径

```js
await native.fsys.path.replaceDir("F:/sys-shim-code/tmp", "F:/", "C:/")
/**
 * 返回
 [false, 'C:\\sys-shim-code\\tmp']
 */
```

### fsys.path.replaceFile(路径, 新文件名)

替换路径中的文件名部分

```js
await native.fsys.path.replaceFile("C:/sys-shim-code/tmp/test/test1-1.txt", "test2-1.txt")
/**
 * 返回
 [false, 'C:\\sys-shim-code\\tmp\\test\\test2-1.txt']
 */
```

### fsys.path.short(路径)

转为短路径
如果文件不存在,返回空值,
短文件名指向会因实际文件数变更,所以不能把短路径存入数据库 

存在特定文件目录无法获取短路径且返回包含空格的长路径的可能性
如无必要，不建议使用或依赖此函数，正确使用 process 等可以自动
转义路径参数中的空格。

短路径与长路径的区别: [https://zhidao.baidu.com/question/458582247.html](https://zhidao.baidu.com/question/458582247.html)

```js
path = 'C:/sys-shim-code/tmp/program files/'

await native.fsys.createDir(path)
await native.fsys.path.short(path)
/**
 * 返回
 [false, 'C:\\SYS-SH~1\\tmp\\PROGRA~1\\']
 */
```

### fsys.path.validName(路径)

检测文件名是否合法,
返回修正后的合法名称
传入非字符串参数直接返回空值

```js
await native.fsys.path.validName("test.txt")
/**
 * 返回
 [false, 'test.txt']
 */
await native.fsys.path.validName("test|test1.txt")
/**
 * 返回
 [false, 'testtest1.txt']
 */
```
