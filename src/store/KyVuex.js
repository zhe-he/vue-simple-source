let KyVue;
// 实现Store类
class Store {
    constructor(options) {
        const store = this;

        // 保存getters
        this._getters = options.getters;
        // 定义computed选项
        const computed = {}
        this.getters = {}
        Object.keys(this._getters).forEach(key => {
            // 获取用户定义的getters
            const fn = store._getters[key];
            // 转化为无参数的computed
            computed[key] = function () {
                return fn(store.state);
            }

            // 为getters定义只读属性
            Object.defineProperty(store.getters, key, {
                get() {
                    return store._vm[key];
                }
            })
        })

        // 响应式的state
        this._vm = new KyVue({
            data: {
                $$state: options.state
            },
            computed
        });

        // 保存mutations
        this._mutations = options.mutations;

        this._actions = options.actions;

        // 改变this
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
