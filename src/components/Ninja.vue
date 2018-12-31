<template>
    <section class="text-center my-5">
        <h2 class="h1-responsive h1-custom-class font-weight-bold my-5">{{title}}</h2>

        <p class="lead grey-text w-responsive mx-auto mb-5">
            {{description}}
        </p>

        <div class="row">
            <div v-for="(ninja,index) in ninjas" v-bind:key="index" class="col-md-6">
                <i class="fas fa-chart-area fa-3x red-text"></i>
                <h5 class="font-weight-bold my-4" v-on:click="ninja.status = !ninja.status">{{ninja.name}}</h5>
                <p class="grey-text mb-md-0 mb-5" v-show="ninja.status">
                    {{ninja.description}}
                </p>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        props: {
            ninjas: {
                type: Array,
                require: true
            }
        },
        name: "Ninja",
        data(){
            return {
                title: 'Ninja App',
                description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit,\n' +
                    '            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
            }
        }
    }
</script>

<style scoped>
.h1-custom-class{
    color: darkgreen;
}

</style>