# U-UI-一个基于VUE的UI框架

[![Build Status](https://travis-ci.com/BookerDrew/Booker-UI.svg?branch=main)](https://travis-ci.com/BookerDrew/Booker-UI)


## 介绍

`Booker-UI` 是一个基于 Vue2 的 UI 组件库，这是我在`Vue` 的使用过程中，开发的一个简单的`UI`框架。

如果你在使用过程中发现问题， 非常感谢你提出[宝贵意见](https://github.com/BookerDrew/Booker-UI/issues)。

目前已开发完成 `Icon`、`Button`、`ButtonGrop`、`Tabs`、`Input`、`Grid`、 `Container`、`Toast`、`Popover` 、`Collapse`、`CodeCollapse`等组件，本 UI 框架是一个「面向[源码 (opens new window)](https://github.com/BookerDrew/Booker-UI)阅读者」的框架，希望对你有所帮助。



**注意：**

本组件库仅供学习交流，请不要在生产环境中使用本 UI 框架。 欢迎讨论交流，如果你觉得还不错，请[star](https://github.com/BookerDrew/Booker-UI)



## 开始使用

- 开启`border-box`

> 添加 CSS 样式 使用本框架前，请在 CSS 中开启 `border-box`。
>
> IE 8 及以上浏览器都支持此样式。

```css
*,*::before,*::after{box-sizing: border-box;}
```



- 安装 

```shell
$ npm i -D booker-ui-develop # 或yarn i -D booker-ui-develop
```



- 局部引入

```javascript
import { OButton, OButtonGroup, Icon } from 'booker-ui-develop'
```



## 文档

https://github.com/BookerDrew/Booker-UI/introduce/



## 变更记录

**v1.1.0 :**   `Icon`、`Button`、`ButtonGrop`、`Tabs`、`Input`、`Grid`、 `Container`、`Toast`、`Popover` 、`Collapse`、`CodeCollapse` 等基础组件的实现。