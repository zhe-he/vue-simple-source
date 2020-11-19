<template>
    <div>
        <h2>parent components</h2>
        <child></child>
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
