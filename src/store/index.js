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
    actions: {
        add({ commit }) {
            setTimeout(() => {
                commit('add');
            }, 1000);
        }
    }
})
