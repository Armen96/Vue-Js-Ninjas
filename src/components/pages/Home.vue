<template>

    <div class="padding-more">
        <h2 class="h1-responsive h1-custom-class font-weight-bold my-5">{{clansState.clan_title}}</h2>
        <p class="lead grey-text w-responsive mx-auto mb-5">{{clansState.clan_description}}</p>
        <div class="row">
            <div v-for="(ninja,index) in clans" v-bind:key="index" class="col-sm-4 col-md-3">
                <div class="thumbnail" >
                    <img :src="ninja.logo" class="img-responsive">
                    <div class="caption">
                        <div class="row">
                            <div class="col-md-12 col-xs-12">
                                <h4 class="text-center"><span class="label label-info">{{ninja.name}}</span></h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapGetters,mapState } from 'vuex';

    export default {
        name: 'Home',
        data(){
            return {
                clans: {}
            }
        },
        methods:{
            ...mapGetters([
                'getClans','getClanTitle'
            ])
        },
        computed:{
            ...mapState({
                'clansState': 'clans'
            }),
        },
        async created (){
            await this.getClans()
                .then(response => response.data)
                .then(data => {
                    this.clans = data.data;
                });
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
    .btn-product{
        width: 100%;
    }
    .img-responsive{
        width: 100%;
        height: auto;
    }
    .padding-more{
        padding: 30px 0;
    }
</style>
