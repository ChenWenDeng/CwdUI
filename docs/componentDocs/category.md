# Category
分类组件用于商城类网站的首页商品分类功能

### 示例：
<br />
<testCategory/>

### 代码：

```html
<template>
  <m-category :category="category" @parent_click="parent_click" @child_click="child_click"></m-category>
</template>
```

```javascript  
    category: [
        {
            parent_level:[
            {
                label:'手机',
                value:'1001',  //一级分类ID
                child_level:[
                  {
                    label:'华为',
                    value:'001',
                  },
                  {
                    label:'华为',
                    value:'002',
                  },
                  {
                    label:'金立',
                    value:'003',
                  }
                ]
            },
            {
                label:'运营商',
                value:'1002',
                child_level:[
                  {
                    label:'合约机',
                    value:'001',//二级分类ID
                  },
                  {
                    label:'手机卡',
                    value:'002',
                  },
                  {
                    label:'充话费/流量',
                    value:'003',
                  },
                  {
                    label:'中国电信',
                    value:'004',
                  },
                  {
                    label:'中国移动',
                    value:'005',
                  },
                  {
                    label:'中国联通',
                    value:'006',
                  }
                ]
              }
            ],
            id: "10983", //总类分类ID (总类分类ID必须要有)
        },
        {
            //可以根据需要添加更多数据... 
        },
        {
            //可以根据需要添加更多数据... 
        }
    ],
```

## Attributes
|  参数  |  说明  |  类型  |  是否必要  |  默认值  |
|  ----  |  ----  |  ----  |  ----  |  ----  |
| category  | 分类数据 | Array |  true  | - |


## Events
|  事件名称  |  说明  |  回调参数  |
|  ----  |  ----  |  ----  |
| parent_click  | 点击每个父分类数据的回调，传参返回label和value，可以根据返回的参数进行其他操作 |{"label":"豪华电视","value":"7914"}|
| child_click  | 点击每个子分类数据的回调，传参返回label和value，可以根据返回的参数进行其他操作 |{"label":"环保音响","value":"6767"}|