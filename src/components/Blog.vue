<template>
    <div class="row col-md-12">
        <div class="col-md-4">
            <h1>Blog</h1>

            <div id="add-blog">
                <form>
                    <label>Blog Title</label>
                    <input type="text" class="form-control" placeholder="Title" v-model.lazy="blog.title">

                    <label>Blog Title</label>
                    <input type="text" class="form-control" placeholder="Description" v-model.lazy="blog.description">

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
        name: "Blog",
        data(){
            return {
                url:'http://laravel-jwt-react.ec/api',
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
            this.axios.get(this.url+'/posts').then((data) => {
                this.posts = data.data.posts.data
            })
        },
        methods: {
            submitForm(){
                this.axios.post(this.url+'/posts',{
                    "userId": this.blog.author,
                    "title": this.blog.title,
                    "body": this.blog.description
                }).then(function(data){
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