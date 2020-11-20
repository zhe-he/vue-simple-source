import Vue from 'vue'
// import Router from 'vue-router'
import Router from './KyRouter'
import Home from "@/components/home.vue"
import About from "@/components/about.vue"

Vue.use(Router)

export default new Router({
    routes: [{
        name: "Home",
        path: "/",
        component: Home
    }, {
        name: "About",
        path: "/about",
        component: About
    }]
})
