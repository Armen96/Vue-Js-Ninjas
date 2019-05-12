<template>
    <div class="padding-more">
        <section class="bg-light" id="portfolio">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 text-center">
                        <h2 class="section-heading text-uppercase">Main</h2>
                    </div>
                </div>

                <div class="row">
                    <!--<div v-for="(book,index) in books" :key="index" class="col-md-3 col-sm-4 portfolio-item">-->
                        <!--<a class="portfolio-link" data-toggle="modal" href="#portfolioModal6">-->
                            <!--<img class="img-fluid img-fluid-books" :src="book.image" alt="">-->
                        <!--</a>-->
                        <!--<div class="portfolio-caption">-->
                            <!--<h4>{{book.title }}</h4>-->
                        <!--</div>-->
                    <!--</div>-->
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    import { mapGetters,mapState } from 'vuex';
    // import gql from 'graphql-tag'

    export default {
        name: 'Home',
        data(){
            return {
                books: null
                // usersall: []
            }
        },
        methods:{
            ...mapGetters([
                'getClans','getClanTitle','getAllBooksDispatch'
            ])
        },
        computed:{
            ...mapState({
                'booksState': 'books'
            }),
        },

        async created() {
            // this.books = this.getAllBooksDispatch();
            //
            // if (!this.books){
            //     await this.$store.dispatch('GET_BOOKS');
            //     this.books = this.getAllBooksDispatch();
            // }
        },
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
    .btn-product{
        width: 100%;
    }
    .img-responsive{
        width: 100%;
        height: auto;
    }
    .padding-more{
        padding: 30px 0;
    }
    .img-fluid-books{
        width: 100%;
        height: 350px;
    }
</style>
