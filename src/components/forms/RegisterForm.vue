<template>
    <div>
        <FormHelper title="Register">
            <div slot="form-header"></div>
            <div slot="form-content">
                <div class="form-group">
                    <input type="text" class="form-control" placeholder="Name">
                    <br>
                    <input type="email" class="form-control" placeholder="Email">
                    <br>
                    <input type="password" class="form-control" placeholder="Password">
                    <br>
                    <input type="password" class="form-control" placeholder="Confirm Password">
                    <br>
                    <button class="btn form-control btn-success">Register</button>
                </div>
            </div>
            <div slot="form-footer">
                <p v-on:click="redirectTo('LoginForm')">Sign In</p>
            </div>
        </FormHelper>
    </div>
</template>

<script>
    import FormHelper from '../FormHelper.vue';
    export default {
        name: "RegisterForm",
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