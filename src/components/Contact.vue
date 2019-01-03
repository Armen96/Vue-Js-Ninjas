<template>
    <div class="text-center col-md-12">
        <h2 class="h1-responsive h1-custom-class font-weight-bold my-5" v-rainbow>{{title}}</h2>

        <p class="lead grey-text w-responsive mx-auto mb-5">
            {{description}}
        </p>

        <div class="row">
            <div class="col-md-12">
                <h3>{{title}}</h3>
                <div id="add-blog">
                    <form>
                        <label>Email</label>
                        <input type="email" class="form-control" placeholder="Email">
                        <br>
                        <label>Message</label>
                        <input type="text" class="form-control" placeholder="Message">
                        <br>
                        <button class="btn form-control btn-success">Send</button>
                        <hr>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import rainbow from '../mixin/directives'
    export default {
        name: "Contact",
        data(){
            return {
                title: "Contact Us",
                description: 'Contact Us'
            }
        },
        mixins: [rainbow]
    }
</script>

<style scoped>

</style>