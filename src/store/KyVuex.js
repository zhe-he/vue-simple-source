let KyVue;
// 实现Store类
class Store {}

// 实现插件
function install(Vue) {
    KyVue = Vue

    // 混入
    Vue.mixin({
        beforeCreate() {
            if (this.$options.store) {
                Vue.prototype.$store = this.$options.store;
            }
        }
    })
}

export default { Store, install }
