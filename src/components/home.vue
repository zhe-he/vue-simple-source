<template>
    <div>
        <h1>Home</h1>
        <p @click="$store.commit('add')">count: {{ $store.state.count }}</p>
        <p @click="$store.dispatch('add')">async count: {{ $store.state.count }}</p>
        <p>doubleCount: {{ $store.getters.doubleCount }}</p>
    </div>
</template>

<script>
    export default { 
    }
</script>