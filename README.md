# ts-project
typescript+react完成一个项目

## 搭建项目

### 安装依赖包

```bash
cnpm i react react-dom @types/react @types/react-dom react-router-dom 
@types/react-router-dom react-transition-group @types/react-transition-group 
react-swipe @types/react-swipe  -S
cnpm i webpack webpack-cli webpack-dev-server html-webpack-plugin -D
cnpm i typescript ts-loader source-map-loader -D
cnpm i redux react-redux @types/react-redux redux-thunk redux-logger @types/redux-logger -S
cnpm i connected-react-router -S

```
### TypeScript配置文件tsconfig.json

```bash
 tsc --init
```
```javascript
{
  "compilerOptions": {
    "outDir": "./build",
    "sourceMap": true,
    "module": "commonjs",
    "target": "es5",
    "jsx": "react",
    "strictNullChecks": false
   },
   "include": [
     "./src/**/*"
   ]
}
```

### 最终项目结构
```
ts-project
 - webpack.config.js
 - package.json
 - tsconfig.json
 - README.md
 - api
  - mock
   - lesson.js
   - slider.js
  - server.js
 - dist
 - src
  - index.html
  - index.tsx
  - types.tsx
  - utils.tsx
  - components
   - Loading
    - index.less
    - index.tsx
   - NavHeader
    - index.less
    - index.tsx
   - Tab
    - index.less
    - index.tsx
  - containers
   - Detail
    - index.less
    - index.tsx
   - Home
    - components
     - HomeHeader
      - index.less
      - index.tsx
     - HomeLessons
      - index.less
      - index.tsx
     - HomeSwiper
      - index.less
      - index.tsx
     - index.less
     - index.tsx
   - Login
    - index.less
    - index.tsx
   - Mine
    - index.tsx
   - Profile
    - index.less
    - index.tsx
   - Reg
    - index.less
    - index.tsx
   - App.tsx
   - PrivateRoute.tsx
  - api
   - home.js
   - index.js
  - common
   - index.less
  - images
  - store
   - actions
   - reducer
   - action-types.tsx
   - index.tsx
```
