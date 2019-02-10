<template>
    <section class="text-center my-5">
        <h2 class="h1-responsive h1-custom-class font-weight-bold my-5">{{clansState.clan_title}}</h2>
        <p class="lead grey-text w-responsive mx-auto mb-5">{{clansState.clan_description}}</p>

        <div class="row">
            <div v-for="(member,index) in members" v-bind:key="index" class="col-sm-4 col-md-3">
                <div class="thumbnail" >
                    {{member.name}}
                    <!--<img :src="clan.logo" class="img-responsive">-->
                    <!--<div class="caption">-->
                        <!--<div class="row"></div>-->
                        <!--<br>-->
                        <!--<div class="row">-->
                            <!--<div class="col-md-12">-->

                                <!--<router-link :to='clansPath+clan.id' class="btn btn-primary btn-product" exact><span class="glyphicon glyphicon-thumbs-up"></span> See {{clan.name}} Members</router-link>-->
                            <!--</div>-->
                        <!--</div>-->
                    <!--</div>-->
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import { mapGetters,mapState,mapMutations } from 'vuex'
    export default {
        name: "ClansChild",
        data(){
            return {
                members: {},
                clansPath: '/clans/'
            }
        },
        methods:{
            ...mapGetters([
                'getClans','getClanMembers'
            ]),
            ...mapMutations([
                'GET_CLAN_MEMBERS'
            ]),

        },
        created (){
             this.$store.dispatch('GET_CLAN_MEMBERS',this.$route.params.id).then((result) => {
                this.members = result.data.data;
            })
        },
        computed:{
            ...mapState({
                'clansState': 'clans',
            })
        },
    }
</script>

<style scoped>
    .h1-custom-class{
        color: darkgreen;
    }
    .btn-product{
        width: 100%;
    }
    .img-responsive{
        width: 100%;
        height: auto;
        max-height: 260px;
    }
</style>

