import viteLogo from '/vite.svg'
import './App.css'
import Markdown from 'react-markdown'
const markdown = `
## **1.使用create-react-app创建项目**
### 初始化项目

~~~bash
npx create-react-app myApp --template typescript
~~~

### 安装prettier

~~~bash
yarn add prettier --dev --exact prettier
~~~

### 切换为18或以上版本的node

~~~
nvm use 18
~~~

### 在**tsconfig.json**中的compilerOptions加上

~~~json
"baseUrl": "./src"
~~~

### 初始化git

~~~bash
git init
~~~

### 安装lint-staged

~~~bash
npx mrm lint-staged
~~~

### 安装*prettier*与*eslint*兼容插件  
_旧版本需要在**package.json**中的**eslintConfig**字段的**extends**数组中加上prettier_

~~~bash
yarn add eslint-config-prettier -D
yarn add eslint-plugin-prettier -D
~~~

### 创建eslint配置文件

~~~bash
echo 'module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint", "prettier", "react-hooks"],
  rules: {},
};' > .eslintrc.js

~~~

### 安装**commitlint**，使得**commit**的**message**必须符合标准格式

~~~bash
yarn add @commitlint/{config-conventional,cli} -D
~~~

### 符合**commitlint**的格式包括
**build**、
**chore**、
**ci**、
**docs**、
**feat**、
**fix**、
**perf**、
**refactor**、
**revert**、
**style**、
**test**

### 创建**commitlint**配置文件

~~~bash
echo "module.exports = {extends: ['@commitlint/config-conventional']}" > commitlint.config.js
~~~

### 安装**husky**

~~~bash
yarn add husky -D
~~~

### 为**husky**添加钩子

~~~bash
npx husky add .husky/commit-msg  'npx --no -- commitlint --edit ${1}'
~~~

### 在 **package.json** 加入对ts、tsx格式化的支持

~~~json
  "lint-staged": {
    "*.{js,css,md,ts,tsx}": "prettier --write"
  }
~~~

### 添加配置文件.prettierrc.js

~~~bash
echo "module.exports = {
    tabWidth:4
}" > .prettierrc.js
~~~

`


function App() {
  return (
    <>
      <div style={{display:'flex',alignItems:'center'}}>
        <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <h1>施锦科的技术博客</h1>
      </div>

      <div className="card">
        <Markdown>{markdown}</Markdown>
      </div>
      <div style={{textAlign:'center'}}>备案号：鄂ICP备14002884号-7</div>
    </>
  )
}

export default App
