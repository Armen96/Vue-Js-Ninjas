<template>
    <div>
        <FormHelper title="Login">
            <div slot="form-header"></div>
            <div slot="form-content">
                <div class="form-group">
                    <input type="email" class="form-control" placeholder="Email">
                    <br>
                    <input type="password" class="form-control" placeholder="Password">
                    <br>
                    <button class="btn form-control btn-success">Login</button>
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
        components: {
            FormHelper
        },
        methods:{
            redirectTo(path){
                this.$emit('redirectToEmit',path)
            }
        }

    }
</script>

<style scoped>

</style>