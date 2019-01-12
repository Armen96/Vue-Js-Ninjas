<template>

    <nav class="navbar navbar-expand-md navbar-dark" style="background-color: #0c1a1e;">
        <div class="container">
        <div class="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <router-link to="/" exact>Home</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/persons" exact>Persons</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/about" exact>About</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/contact" exact>Contact Us</router-link>
                </li>
            </ul>
        </div>
        <div class="mx-auto order-0">

        </div>
        <div class="navbar-collapse collapse w-100 order-3 dual-collapse2">
            <ul class="navbar-nav ml-auto">
                <li v-if="!isLogged" class="nav-item active">
                    <router-link to="/login" exact>Sign In</router-link>
                </li>
                <li v-if="!isLogged" class="nav-item">
                    <router-link to="/persons" exact>Sign Up</router-link>
                </li>
                <li v-if="isLogged" class="nav-item">
                    <span>User Name</span>
                </li>
                <li v-if="isLogged" class="nav-item">
                    <button class="btn btn-warning" @click="logout">Sign Out</button>
                </li>
            </ul>
        </div>
        </div>
    </nav>
</template>

<script>
    import { mapGetters } from 'vuex'
    export default {
        name: "Header",
        props: {
            company: {
                type: String
            }
        },
        methods:{
            logout(){
                this.$store.dispatch('LOGOUT').then(function(){
                    alert("logout")
                })
            }
        },
        computed:{
            ...mapGetters([
                'isLogged'
            ])
        }
    }
</script>

<style scoped>
    .nav-item{
        margin-right: 15px;
        padding: 10px 0;
    }
    .router-link-exact-active{
        color: #fff;
    }
    .is-active{
        color: #fff !important;
    }
    .nav-item a{
        font-size: 16px;
        font-weight: 700;
        color: #758aa0;
        margin-bottom: 22px;
        text-decoration: none;
    }
    .nav-item a:hover{
        color: #fff;
    }
</style>
