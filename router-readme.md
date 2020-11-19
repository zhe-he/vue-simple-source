### vue-router前置
1. 安装
    `npm add vue-router`
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
