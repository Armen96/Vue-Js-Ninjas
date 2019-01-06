<template>
    <section class="text-center my-5">
        <h2 class="h1-responsive h1-custom-class font-weight-bold my-5" v-rainbow>{{title}}</h2>

        <p class="lead grey-text w-responsive mx-auto mb-5">
            {{description}}
        </p>

        <div class="row">
            <div v-for="(product,index) in products" :key="index" class="col-md-4 products-items">
                <div class="panel panel-default">
                    <div class="panel-heading"></div>
                    <div class="panel-body">
                        <span>{{ product.name }}</span>
                        <br>
                        <span>{{ product.price }}$</span>
                    </div>
                </div>
            </div>
        </div>

        <hr>
        <hr>

        <div class="row">
            <div class="col-md-10">
                <h1>*****************</h1>

                <p>Counter is {{ cc }}</p>

                <h6 v-on:click="cc++">Add cc</h6>

                <h1>*****************</h1>

            </div>
        </div>


        <hr>
        <hr>
        <hr>

        <div class="row">
            <div class="col-md-10">
                <h1>Event Bus Result</h1>
                <p>Counter is {{ counter }}</p>
                <hr>
                <hr>
                <hr>

                <h1>{{stateTitle}}</h1>
                <h3>Links Count is {{ linksCount }}</h3>
                <h6 v-on:click="removeAllItems">Remove All items</h6>
                <h6>{{msg}}</h6>



            </div>
        </div>

    </section>
</template>

<script>
    import rainbow from '../mixin/directives'
    import {EventBus} from '../event_bus/index';
    import { mapState } from 'vuex';
    import { mapGetters,mapActions } from 'vuex';


    export default {
        name: "VuexPageTwo",

        computed: {
            products(){
              return this.$store.getters.products;
            },
            ...mapState({
                'stateTitle':'title'
            }),
            ...mapGetters([
                'linksCount'
            ])
        },

        data(){
            return {
                title: 'VuexPageTwo 2',
                description: 'VuexPageTwo Description',
                counter: 0,
                cc: 0,
                msg: ''
            }
        },
        mounted(){
            EventBus.$on('counterObserver', (data) => {
                this.counter = data;

                if(data>50){
                    EventBus.$off('counterObserver')
                }
            });

            EventBus.$once('counterObserver', (data) => {
                console.log('Listen once')
            });
        },
        methods: {
            ...mapActions([
                'removeAll'
            ]),
            removeAllItems(){
                this.removeAll().then(() =>{
                    this.msg = 'Removed'
                });
            },
            handlerMsg(){
                this.msg = "test*****test";
            }
        },
        watch:{
           cc(val){
               console.log("cc",val)
           },
           msg:{
               handler: 'handlerMsg',
               immediate: true
           }
        },
        mixins:[rainbow]
    }
</script>

<style >
    .products-items{
        padding: 20px;
        background: lightcyan;
    }
</style>
