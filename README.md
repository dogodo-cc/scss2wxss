# scss2wxss
用scss写小程序的样式, 在项目根目录运行，你可以在需要的文件里创建一个 `.scss` 的文件，
该插件会自动监听文件变化，然后在同目录下生成一个同名的 `.wxss` 样式文件供小程序使用。


安装
```bash
npm install scss2wxss -D
```

任务配置
```javascript
"scripts": {
    "scss": "npx scss2wxss"
  },
```

执行任务
```bash
npm run scss
```

如果要编译成`.css`文件，则执行
```bash
npm run scss css
```