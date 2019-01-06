<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand"><span class="h1-custom-class">{{company}}</span></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
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
                <li class="nav-item">
                    <router-link to="/vuex" exact>Vuex Tests</router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
    export default {
        name: "Header",
        props: {
            company: {
                type: String
            }
        },
        methods:{

        }
    }
</script>

<style scoped>
.nav-item{
    margin-right: 15px;
}
.router-link-exact-active{
    color: rgb(255, 68, 10);
}
</style>