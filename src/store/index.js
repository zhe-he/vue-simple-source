import Vue from "vue"
// import Vuex from "vuex"
import Vuex from "./KyVuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        count: 1
    },
    mutations: {
        add(state) {
            state.count++
        }
    },
    getters: {
        doubleCount(state) {
            return state.count * 2;
        }
    },
    actions: {
        add({ commit }) {
            setTimeout(() => {
                commit('add');
            }, 1000);
        }
    }
})
