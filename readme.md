# less-plugin-antd-to-css-variable
转换ant design的less变量为原生css变量，方便实现主题切换以及暗黑模式

## 灵感来源
[transform-antd-theme-variable](https://github.com/spark-build/transform-antd-theme-variable)

## 用法

```
npm install antd-less-to-css-variable
```

```

webpack 配置

```less
const LessPluginAntd2CssVariable = require('antd-less-to-css-variable').default
css: {
    loaderOptions: {
      // 给 less-loader 传递 Less.js 相关选项
      less: {
        plugins: [
          new LessPluginAntd2CssVariable(),
        ],
      }
    }
  }
```
