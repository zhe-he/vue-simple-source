<template>
    <div>
        <h2>child components</h2>
    </div>
</template>

<script>
    export default {
        mounted() {
            setInterval(() => {
                this.$bus.$emit("child-msg", "the msg from child");
            }, 1000);
        }
    }
</script>
