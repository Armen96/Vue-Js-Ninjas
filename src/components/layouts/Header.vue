<template>

    <nav class="navbar navbar-expand-md navbar-dark" style="background-color: #0c1a1e;">
        <div class="container">
        <div class="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <router-link to="/" exact>Reportiks</router-link>
                </li>
                <!--<li class="nav-item">-->
                    <!--<router-link v-if="isLogged" to="/profile" exact>Profile</router-link>-->
                <!--</li>-->
                <li class="nav-item">
                    <router-link v-if="isLogged" to="/dashboard" exact>Dashboard</router-link>
                </li>
                <li class="nav-item">
                  <router-link v-if="isLogged" to="/company">Company</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/about" exact>*About</router-link>
                </li>
                <li class="nav-item">
                    
                    <router-link v-if="isLogged" to="/contact" exact>Contact Us</router-link>
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
                <li v-if="!isLogged" class="btn-create-workspaces nav-item">
                    <router-link to="/register" class="btn-create-workspaces-a" exact>Create workspace</router-link>
                </li>
                <li v-if="isLogged" class="nav-item margin-top-8">
                    <span>{{getUser.name}}</span>
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
            async logout(){
                await this.$store.dispatch('LOGOUT');
                this.$router.go('/');
            }
        },
        computed:{
            ...mapGetters([
                'isLogged','getUser'
            ])
        }
    }
</script>

<style scoped>
    .margin-top-8{
        margin-top: 8px;
    }
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
    .btn-create-workspaces{
        background: #ecb22e;
        border-radius: 4px;
        padding: 10px;
    }
</style>
