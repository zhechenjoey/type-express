# Express + TypeScript.js 延申学习

### 1、搭建 express 项目

- 初始化项目

  `npm init`

- 添加依赖

  ```json
  // package.json
  
  "dependencies": {
      "@types/express":"~4.17.0",
      "express": "~4.17.1",
      "ts-node-dev": "^1.0.0-pre.40",
      "typescript": "~3.5.1"
  }
  ```

  > ts-node-dev：能在开发过程中自动重启项目

- 项目目录新建 app、 build 目录

- 初始化 typescript

  `tsc --init`

  修改 `outDir`  为 `"outDir": "./build/"`

  > 1、全局安装完 `typescript` 就可以使用 tsc 命令了，能够把 `ts` 文件编译为 `js` 文件
  >
  > 2、`tsc init` 生成 `tsconfig.json`  ，用于配置 `typescript` 编译

- 添加命令行

  ```json
  "tsc": "tsc",
  "dev": "ts-node-dev --respawn --transpileOnly ./app/app.ts",
  "prod": "tsc && supervisor ./build/app.js",
  "test": "echo \"Error: no test specified\" && exit 1"
  ```

- `npm install`

- 新建 app/app.ts

  ```typescript
  import express=require('express');
  const app:express.Application=express();
  app.get('/',function(req,res){
      res.send('Hello World!');
  });
  app.listen(8888,function(){
      console.log('Example app listening on port 8888!');
  })
  ```

- `npm run dev`

- 参考：https://blog.csdn.net/sunxiaoju/article/details/91491036