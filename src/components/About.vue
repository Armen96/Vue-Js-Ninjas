<template>
    <section class="text-center my-5">
        <h2 class="h1-responsive h1-custom-class font-weight-bold my-5" v-rainbow>{{title}}</h2>

        <p class="lead grey-text w-responsive mx-auto mb-5">
            {{description}}
        </p>
    </section>
</template>

<script>
    import rainbow from '../mixin/directives'
    export default {
        name: "About",
        data(){
            return {
                title: "About Page",
                description: 'About page some Information'
            }
        },
        mixins: [rainbow]
    }
</script>

<style scoped>

</style>