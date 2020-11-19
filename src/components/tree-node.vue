<template>
    <div>
        <div @click="toggle" :style="{ paddingLeft: (level - 1) + 'em' }">
            <label>{{ model.title }}</label>
            <span v-if="isFolder">{{ open ? '-' : '+' }}</span>
        </div>
        <div v-show="open" v-if="isFolder">
            <tree-node
                v-for="model in model.children" 
                :model="model"
                :key="model.title"
                :level="level + 1"
            ></tree-node>
        </div>
    </div>
</template>

<script>
import { ref, computed } from "vue";

export default {
    name: "tree-node",
    props: {
        model: Object,
        level: {
            type: Number,
            defalut: 1
        }
    },
    computed: {
        isFolder() {
            return this.model.children && this.model.children.length
        }
    },
    setup () {
        const open = ref(false);
        const toggle = () => {
            open.value = !open.value;
        }
        return { toggle, open };
    }
}
</script>
