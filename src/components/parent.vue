<template>
    <div>
        <h2>parent components</h2>
        <child v-bind="$attrs"></child>
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
