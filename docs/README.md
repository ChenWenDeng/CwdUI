# 快速开始

> 在 main.js 中引入组件库

```javascript
// 全部引入
import 'cwd-ui/dist/css/index.css'
import cwdUI from "cwd-ui";
Vue.use(cwdUI);

// 按需引入
import 'cwd-ui/dist/css/card.css'
import { Card } from "cwd-ui";
Vue.use(Card);
```