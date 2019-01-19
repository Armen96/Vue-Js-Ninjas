<template>
    <div class="container">
        <div class="row">
            <div class="col-md-6 img">
                <img src="https://i.ytimg.com/vi/uhZnk5x0yFI/maxresdefault.jpg" width="400" alt="" class="img-rounded">
            </div>
            <div class="col-md-6 details">
                <blockquote>
                    <h5>{{getUser.name}}</h5>
                    <small><cite title="Source Title">Chicago, United States of America  <i class="icon-map-marker"></i></cite></small>
                </blockquote>
                <p>
                    {{getUser.email}} <br>
                    www.bootsnipp.com <br>
                    June 18, 1990
                </p>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    export default {
        name: "Profile",
        data(){
            return {

            }
        },
        methods:{

        },
        computed:{
            ...mapGetters([
                'getUser'
            ])
        }
    }
</script>

<style scoped>
    .container{
        padding:5%;
    }
    .container .img{
        text-align:center;
    }
    .container .details{
        border-left:3px solid #ded4da;
    }
    .container .details p{
        font-size:15px;
        font-weight:bold;
    }
</style>
