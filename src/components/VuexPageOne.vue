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
                        <br>
                    </div>
                </div>
            </div>
            <br>
            <br>
            <div class="col-md-12">
                <button class="btn btn-warning">Reduce price</button>
            </div>
        </div>
        <hr>
        <hr>
        <hr>
        <div class="row">
            <div class="col-md-10">
                <h1>Event Bus</h1>
                <input type="number" class="form-control" v-model="counter">
                <br>
                <button class="btn btn-primary" v-on:click="runClickEvent">Run Event Bus</button>
                <hr>
                <hr>
                <hr>

                <h2>{{ stateTitle }}</h2>

                <form @submit.prevent="addLink">
                    <input class="link-input" type="text" placeholder="Add a Link" v-model="newLink" />
                    <button type="submit">Save</button>
                </form>

                <ul>
                    <li v-for="(link,index) in links" :key="index">
                        {{ link }}
                        <button class="rm" v-on:click="removeLinks(index)">x</button>
                    </li>
                </ul>
            </div>
        </div>

    </section>
</template>

<script>
    import rainbow from '../mixin/directives'
    import { mapState } from 'vuex';
    import { mapGetters, mapActions } from 'vuex';
    import { mapMutations } from 'vuex';
    import {EventBus} from '../event_bus/index';

    export default {
        name: "VuexPageOne",

        computed: {
            ...mapGetters([
                'products'
            ]),
            ...mapState({
                'stateTitle':'title',
                'links': 'links'
            })
        },

        data(){
           return {
               title: 'VuexPageOne 1',
               description: 'VuexPageOne Description',
               counter: 0,
               newLink: ''
           }
        },
        methods:{
            ...mapActions([
                'removeLink'
            ]),
            ...mapMutations([
                'ADD_LINK'
            ]),

            runClickEvent(){
                EventBus.$emit('counterObserver',this.counter);
            },
            addLink: function() {
                this.ADD_LINK(this.newLink)
                this.newLink = ''
            },
            removeLinks(index){
                this.removeLink(index)
            }
        },
        mixins:[rainbow]
    }
</script>

<style scoped>

</style>
