#空闲时间练习

##babel
注意babel的presets需要安装上对应的插件如`es2015`就需要安装`babel-preset-es2015`

##eslint
- extends:“eslint:recommended”表示使用eslint推荐的代码风格
- parser：“babel-eslint”表示使用babel-eslint作为代码识别器？
- ecmaVersion:6,识别ES6
- sourceType:"module"，模块化的代码
- rules：自定义规则
- globals：全局变量，方法

##es6-babel

`npm run es6-babel`
- es6的`export`和`import`

##lodash和webpack
- lodash支持使用webpack打包使用中的内容，需要用到插件`lodash-webpack-plugin`
