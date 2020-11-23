let KyVue;
// 实现Store类
class Store {
    constructor(options) {
        // 响应式的state
        this._vm = new KyVue({
            data: {
                $$state: options.state
            }
        });

        // 保存mutations
        this._mutations = options.mutations;
    }

    get state() {
        return this._vm._data.$$state;
    }
    set state(v) {
        console.error("please use replaceState to reset state");
    }

    commit(type, payload) {
        const entry = this._mutations[type];
        if (entry) {
            entry(this.state, payload);
        }
    }
}

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
