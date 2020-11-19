<template>
    <div>
        <h2>child2 components</h2>
        <ul>
            <li :key="index" v-for="(msg, index) in msgList">{{msg}}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                msgList: []
            }
        },
        mounted() {
            this.$bus.$on("child-msg", (msg) => {
                this.msgList.push(msg);
            })
        }
    }
</script>
