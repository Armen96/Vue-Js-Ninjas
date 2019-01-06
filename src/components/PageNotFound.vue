<template>
    <div>
        <h1 v-rainbow>Page not found</h1>
    </div>
</template>

<script>
    import rainbow from '../mixin/directives';
    export default {
        name: "PageNotFound",
        mixins:[rainbow]
    }
</script>

<style scoped>

</style>