class KyRouter {
    constructor(options) {
        this.$options = options;
    }
}

// 实现install方法，注册$router
KyRouter.install = function(Vue) {
    // 挂载$router
    Vue.mixin({
        beforeCreate() {
            // 全局混入，将来在组件实例化才执行
            // 只有根组件拥有router选项
            if (this.$options.router) {
                Vue.prototype.$router = this.$options.router;
            }
        }
    })

    // 实现两个全局组件router-link和router-view
    Vue.component('router-link', {}); 
    Vue.component('router-view', {})
}

export default KyRouter;