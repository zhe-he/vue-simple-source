<template>
    <div>
        <h2>parent components</h2>
        <child v-on="$listeners"></child>
    </div>
</template>

<script>
    import Child from "./child.vue";

    export default {
        components: {
            Child
        }
    }
</script>
