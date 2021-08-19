# yande-proxy

基于cf-worker的 [yande.re](https://yande.re) 代理

## 使用方法

1. 将[index.js](index.js)、[assets.js](assets.js)、[file.js](files.js)分别设成三个worker
2. 再在`index.js`中更改`assets_url`->`assets.js`worker项目地址、`file_url`->`file.js`worker项目地址
3. 没了（或许可以试试和域名连接到一块？）（反正我懒得写）


