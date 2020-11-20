### vue-router前置
1. 安装
    `yarn add vue-router`
1. 使用vue-router插件，router.js
    ```
    import Router from 'vue-router'
    Vue.use(Router)
    ```
1. 创建Router实例，router.js
    `export default new Router({...})`
1. 挂载到根组件， main.js
    ```
    import router from './router'
    new Vue({
        router,
    }).$mount("#app");
    ```
1. 添加路由视图, app.vue
    `<router-view></router-view>`
1. 导航
    ```
     <router-link to="/">Home</router-link>
     <router-link to="/about">About</router-link>
    ```

### vue-router源码的实现
1. 作为一个插件存在:实现VueRouter类和install方法
1. 实现两个全局组件:router-view用于显示匹配组件内容，router-link用于跳转
1. 监控url变化:监听hashchange或popstate事件
1. 响应最新url:创建一个响应式的属性current，当它改变时获取对应组件并显示
