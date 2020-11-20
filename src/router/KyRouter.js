let KyVue;
class KyRouter {
    constructor(options) {
        this.$options = options;
        
        KyVue
        this.current = '/';

        window.addEventListener('hashchange', this.onHashChange.bind(this));
        window.addEventListener('load', this.onHashChange.bind(this));
    }

    onHashChange() {
        this.current = window.location.hash.substr(1);
        console.log(this.current);
    }
}

// 实现install方法，注册$router
KyRouter.install = function(Vue) {
    KyVue = Vue;
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
    Vue.component('router-link', {
        props: {
            to: {
                type: String,
                require: true
            }
        },
        render(h) {
            // <router-link to="/about">关于</router-link>
            return h('a', { attrs: { href: "#" + this.to } }, this.$slots.default);
        }
    }); 
    Vue.component('router-view', {
        render(h) {
            return h('div', 'view');
        }
    })
}

export default KyRouter;