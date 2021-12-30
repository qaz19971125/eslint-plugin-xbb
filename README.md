# @xbb/eslint-plugin

eslint plugin for xbb

## 安装

第一步需要安装 [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

接下来，安装 `@xbb/eslint-plugin`:

```sh
npm i @xbb/eslint-plugin --save-dev
```

## 使用方法

使用 `.eslintrc.*` 文件来配置`eslint`规则。请查看`eslint`官方的教程: https://eslint.org/docs/user-guide/configuring

以 `.eslintrc.js` 举例：
```JavaScript
module.exports = {
  extends: [
    // 添加其他config，比如:
    // 'eslint:recommended',
    'plugin:@xbb/recommended',
  ],
  rules: {
    // 在这里重写/添加规则，比如:
    // 'vue/no-unused-vars': 'error'
  }
}
```


