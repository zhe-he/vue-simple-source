<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">

    <div>
      <router-link to="/">首页</router-link>
      <span>|</span>
      <router-link to="/about">关于</router-link>
    </div>
    <router-view></router-view>

  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
