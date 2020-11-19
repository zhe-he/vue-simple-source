<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <tree :data="treeList" />
</template>

<script>
import { ref } from "vue"
import Tree from './components/tree.vue'

const treeData = [{
  title: "分组1",
  children: [{
    title: "分组1-1",
    children: [{
      title: "分组1-1-1",
      children: [{
        title: "分组1-1-1-1"
      }]
    }]
  }, {
    title: "分组1-2",
    children: []
  }]
}, {
  title: "分组2"
}]

export default {
  name: 'App',
  setup() {
    const treeList = ref(treeData);
    
    return { treeList }
  },
  components: {
    Tree
  }
}
</script>
