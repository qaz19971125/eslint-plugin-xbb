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

引入自带的`config`到你的`.eslintrc`配置文件的`extends`中

```Json
{
    "extends": [
        "some-other-config-you-use",
        "plugin:@xbb/vue"
    ]
}
```


