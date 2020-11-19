<template>
    <div>
        <h2 @click="handleClick">child components</h2>
    </div>
</template>

<script>
    export default {
        methods: {
            handleClick() {
                this.$emit("some-event", { a: 1, b: 2 });
            }
        }
    }
</script>
