<template>
    <div class="row col-md-12">
        <div class="col-md-6 text-center">
            <h1>Blog {{ blogId }}</h1>

            <div id="add-blog">
                <form>
                    <label>Person Name</label>
                    <input type="text" class="form-control" placeholder="Title" v-model.lazy="blog.title">

                    <label>Person Description</label>
                    <textarea type="text" class="form-control" placeholder="Description" v-model.lazy="blog.description"></textarea>

                    <div>
                        <label>Author</label>
                        <select class="form-control" v-model="blog.author">
                            <option value="" selected></option>
                            <option v-for="(author,index) in authors" :key="index" :value="author.id">
                                {{author.name}}
                            </option>
                        </select>
                    </div>
                    <br>
                    <p v-if="submitted">Thanks to you</p>
                    <button type="submit" class="btn form-control btn-success" v-on:click.prevent="submitForm">Save</button>
                    <hr>
                </form>
            </div>

        </div>

        <div class="col-md-8">

            <div class="row">
                <div v-for="(post,index) in posts" :key="index" class="col-md-6">
                    <h5 class="font-weight-bold my-4" v-rainbow>{{post.title | to-uppercase }}</h5>
                    <p class="grey-text mb-md-0 mb-5">
                        {{post.description}}
                    </p>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import rainbow from '../mixin/directives';
    export default {
        name: "Persons",
        data(){
            return {
                url:'http://laravel-jwt-react.ec/api',
                firebase: 'https://vue-js-practice-2019.firebaseio.com/',
                blogId: this.$route.params.id,
                blog: {
                    title: '',
                    description: '',
                    author: 1
                },
                authors: [
                    {name: 'Me',id: 1},
                    {name: 'Developer',id: 2},
                    {name: 'Ninja',id: 3},
                ],
                submitted: false,
                posts: []
            }
        },
        created(){
            this.axios.get(this.firebase+'/posts.json').then((data) => {
                console.log("ddd", data.data);
                this.posts = data.data
            })
        },
        methods: {
            submitForm(){
                this.axios.post(this.firebase+'/posts.json',this.blog).then(function(data){
                    this.submitted = true;
                })
            }
        },
        mixins: [rainbow]
    }
</script>

<style scoped>
    #add-blog{
        text-align: left;
    }
    #checkbox input{
        display: inline-block;
        margin-right: 10px;
    }
</style>