<template>
    <div>
        <h2>top components</h2>
        <parent @some-event="someEvent"></parent>
        <child2></child2>
    </div>
</template>

<script>
    import Parent from "./parent.vue";
    import Child2 from "./child2.vue";
    export default {
        methods: {
            someEvent(k) {
                console.log(k);
            }
        },
        components: {
            Parent,
            Child2
        }
    }
</script>
