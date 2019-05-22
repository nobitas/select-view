# select-view

微信小程序自定义选择组件


## 使用效果
![select-view](https://github.com/nobitas/select-view/raw/master/images/gif.gif)

## 安装

```
 npm install --save select-view
```

[微信小程序使用npm的教程](https://developers.weixin.qq.com/miniprogram/dev/devtools/npm.html)

## 用法

1. 在app.json全局引入设置：
```json
{
  "usingComponents": {
    "select-view": "select-view"
  }
}
```

2. 单页面 page.json 中添加 select-view 自定义组件配置

```json
{
  "usingComponents": {
    "select-view": "select-view"
  }
}
```
3. WXML 文件中引用 select-view

``` xml
 <select-view data="{{ Array }}" isShow="{{ Boolean }}" bindselected="{{ Function }}"></select-view> 
```
**属性**

| 属性名                  | 类型        | 默认值     | 是否必须        | 说明                                              |
|------------------------|------------|-----------|----------------|---------------------------------------------------|
| isShow                 | Boolean    | false     | 是             | 控制组件的显示与隐藏                                 |
| data                   | Array      | []        | 是             | 组件的数据源                                        |
| attr                   | String     | label     | 否             | 数组对应展示的属性值                                 |
| icon                   | String     | false     | 否             | 展示icon图标地址                                   |
  
  


**方法**

| 方法名                  | 属性        | 说明       |
|------------------------|------------|-----------|
| selected               | e.detail   | 选中事件    |  
  
  
**Tip:** 组件采用position: fixed定位，需注意与页面其他元素的z-index层级，以及与原生组件的层级问题。[原生组件限制查看](https://developers.weixin.qq.com/miniprogram/dev/component/native-component.html)
