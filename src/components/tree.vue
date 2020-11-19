<template>
    <div class="tree">
        <tree-node v-for="item in data" :key="item.title" :model="item"></tree-node>
    </div>
</template>

<script>
import TreeNode from "./tree-node.vue"

export default {
    props: {
        data: {
            type: Array,
            required: true
        }
    },
    components: {
        TreeNode
    }
}
</script>

<style scoped>
.tree{
    text-align: left;
}
</style>
