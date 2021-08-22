# page proxy
专门存放基于cf-worker上的各个关于页面代理脚本

## tel-ph-proxy
[telegra.ph](https://telegra.ph)

### 使用方法
1. 将[tel-ph-proxy/index.js](tel-ph-proxy/index.js)分别设成worker
3. 没了（或许可以试试和域名连接到一块？）（反正我懒得写）

### DEMO
[t.bili.ml](https:/t.bili.ml)

### TODO 
1. 在主页可以查看浏览记录（需要KV）
2. ~~理顺代码~~



## yande-proxy
[yande.re](https://yande.re) 代理

### 使用方法
1. 将[yande-proxy/index.js](yande-proxy/index.js)、[yande-proxy/assets.js](yande-proxy/assets.js)、[yande-proxy/file.js](yande-proxy/files.js)分别设成三个worker
2. 再在`index.js`中更改`assets_url`->`assets.js`worker项目地址、`file_url`->`file.js`worker项目地址
3. 没了（或许可以试试和域名连接到一块？）（反正我懒得写）

### DEMO
[y.bili.ml](https://y.bili.ml)

### TODO
1. 一个文件即可代理全站
