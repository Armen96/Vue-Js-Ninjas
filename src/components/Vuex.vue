<template>
    <div class="row">
        <div class="col-md-6 padding-div">
            <VuexPageOne></VuexPageOne>
        </div>
        <div class="col-md-6 padding-div">
            <VuexPageTwo></VuexPageTwo>
        </div>
    </div>
</template>

<script>
    import VuexPageOne from './VuexPageOne.vue';
    import VuexPageTwo from './VuexPageTwo.vue';

    export default {
        name: "Vuex",
        components: {
            VuexPageOne,
            VuexPageTwo
        }
    }
</script>

<style scoped>

</style>