<template>
    <div>
        <h2>child components</h2>
        <p>{{name}}</p>
    </div>
</template>

<script>
    export default {
        inject: ["name"]
    }
</script>
