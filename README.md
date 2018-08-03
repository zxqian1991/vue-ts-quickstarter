# vue-ts-quickstarter

> this is a vue typescript quick-stater uses vue-template-loader which bases on vue-loader, with this starter you can use typescript in vue like angular, but not in the .vue file, template/style/controller are seperated;

## install 

```bash
yarn
```

## run

```bash
npm run dev
```

## build

```bash
npm run build
```

## 项目布局规范

| 目录名     | 功能说明                                                     |
| ---------- | ------------------------------------------------------------ |
| components | 公共组件、业务无关                                           |
| config     | 全局的配置性文件                                             |
| containers | 容器类组件，这类组件和业务密切相关，可以绑定具体的数据或者业务。 |
| directives | 公共的指令                                                   |
| filters    | 公共的过滤器                                                 |
| Helpers    | 公共的帮助函数                                               |
| pages      | 不同的页面                                                   |
| services   | 公共的服务模块                                               |

