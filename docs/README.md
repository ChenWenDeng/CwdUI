# 安装
推荐使用包管理器的方式安装，它能更好地和 vite, webpack 打包工具配合使用。

> npm i cwd-ui


# 快速开始

> 在 main.js 中引入组件库

```javascript
// 全部引入
import 'cwd-ui/dist/css/index.css'
import cwdUI from "cwd-ui";
Vue.use(cwdUI);

// 按需引入,例如：
import 'cwd-ui/dist/css/card.css'
import { Table } from "cwd-ui";
Vue.use(Table);
```