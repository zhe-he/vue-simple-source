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

        this._actions = options.actions;

        // 改变this
        const store = this;
        this.commit = this.commit.bind(store);
        this.dispatch = this.dispatch.bind(store);
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

    dispatch(type, payload) {
        const entry = this._actions[type];
        
        if (!entry) {
            console.error("unknow action type");
        }

        return entry(this, payload);
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
