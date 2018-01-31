# huya

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## 规范文档

1. 只在src文件夹下工作,不要动其他文件
2. 所有资源文件包括图片、json在 src/assets里存放
3. 不要新建任何.css, .js文件,因为我们是组件开发
4. 组件不用分类,全丢components里

下面说明下几个文件的作用

- src
  - assets        # 所有资源文件
  - components    # 所有组件,这是大家的主要工作目录
  - router        # 路由,部分组件需要路由,涉及到路由这块,尽量通过讨论完成，因为页面关系搞错了后面会很难改
  - App.vue       # 这个是全局的视图,尽量不要动这里
  - main.js       # 别动

1. 项目里尽量少用浮动,我们尽量使用响应式的弹性盒、rem、百分比布局,写完后请自行测试
2. 不要用重置样式,我们手动写重置样式,公用样式会提取出来
3. 不用纠结细节,先整体后细节,能不做的不做,比较难的组件、路由页面关系先丢一边。
4. 组件命名用大写,取名用英文,标签也用大写。
5. 使用es6的对象缩写语法、函数缩写语法以与vue-cli保持一致

重点: __任何一次提交前经过确认__

工作分配:

1. Xioqua: 负责版本控制、任务分配、axios读取数据
2. zhangpan: 主攻路由页面关系管理,少许
3. yanliang: json文件编写
4. zhangyahui: 静态页面制作

---

- App
  - Tabbar

- Index
  - Topnav

要求App和4个标签页面只能放标签,其他一律拆成组件。你们可以看看App和Index里的template标签。