## vuex前置
`yarn add vuex`

## 核心
- state 状态、数据
- mutations 更改状态的函数
- actions 异步操作
- store 包含以上概念的容器

## vuex源码的实现
- 实现一个插件:声明Store类，挂载$store
- Store具体实现:
    - 创建响应式的state，保存mutations、actions和getters 
    - 实现commit根据用户传入type执行对应mutation 
    - 实现dispatch根据用户传入type执行对应action，同时传递上下文 
    - 实现getters，按照getters定义对state做派生
