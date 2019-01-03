<template>
    <div>
        <FormHelper title="Login">
            <div slot="form-header"></div>
            <div slot="form-content">
                <div class="form-group">
                    <input type="email" class="form-control" v-model="user.email" placeholder="Email">
                    <br>
                    <input type="password" class="form-control" v-model="user.password" placeholder="Password">
                    <br>
                    <button class="btn form-control btn-success" v-on:click.prevent="login">Login</button>
                </div>
            </div>
            <div slot="form-footer">
                <p v-on:click="redirectTo('RegisterForm')">Sign Up</p>
            </div>
        </FormHelper>
    </div>
</template>

<script>
    import FormHelper from '../FormHelper.vue';

    export default {
        name: "LoginForm",
        data(){
            return {
                url:'http://laravel-jwt-react.ec/api',
                user: {
                    email: '',
                    password: ''
                }
            }
        },
        components: {
            FormHelper
        },
        methods:{

            redirectTo(path){
                this.$emit('redirectToEmit',path)
            },

            login(){
                this.axios.post(this.url+'/login',{
                    "email": this.user.email,
                    "password": this.user.password,
                }).then(function(data){
                    //console.log(data)
                })
            }
        }

    }
</script>

<style scoped>

</style>