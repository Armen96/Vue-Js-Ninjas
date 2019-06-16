<template>
    <div class="container">
        <div class="row">
            <div class="col-md-6 img">
                <img :src="image" width="400" alt="" class="img-rounded">
            </div>
            <div class="col-md-6 details">
                <blockquote>
                    <h5> ** {{getUser.name}}</h5>
                    <small><cite title="Source Title">Chicago, United States of America  <i class="icon-map-marker"></i></cite></small>
                </blockquote>
                <p>
                    {{getUser.email}} <br>
                    www.bootsnipp.com <br>
                    June 18, 1990
                </p>
            </div>
            <div class="col-md-6">
                <article id="main-content" role="main">
                    <section class="container">
                        <div class="row">
                            <div class="col-md-4">
                                <header>
                                    <h2 class="text-info">Upload Image</h2>
                                </header>
                            </div>
                            <div class="col-md-8">

                                <span class="control-fileupload">
                                  <label for="file">Choose a file :</label>
                                  <input type="file" id="file" ref="file" v-on:change="handleImage()">
                                </span>

                                <br>
                                <button class="btn btn-primary" v-on:click="submitFile()">Submit</button>

                            </div>
                        </div>
                    </section>
                </article>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    import axios from 'axios'
    export default {
        name: "Profile",
        data(){
            return {
                file: '',
                image: "https://i.ytimg.com/vi/uhZnk5x0yFI/maxresdefault.jpg"
            }
        },
        // http://ninjas-api.ec/storage/avatars/wbLy57tN3lf93yzAUjklMWMIKjUnlMiDxLjGtfWk.jpeg

        methods:{
            ...mapGetters([
                'getUser','getToken'
            ]),
            handleImage(){
                this.file = this.$refs.file.files[0];
                console.log(this.file);
            },
            submitFile(){
                let token = this.getToken();
                let formData = new FormData();
                formData.append('file',this.file);
                formData.append('token',token);

                this.$store.dispatch('UPLOAD_IMAGE',formData).then((res) => {
                    this.image = ' http://ninjas-api.ec/storage/'+ res.data.data
                });

            },
        },
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

    /*basic settings */

    a:focus {
        outline: none !important;
        outline-offset: none !important;
    }

    body {
        background: #f5f6f5;
        color: #333;
    }

    /* helper classses */

    .margin-top-20 {
        margin-top: 20px;
    }

    .margin-bottom-20 {
        margin-top: 20px;
    }

    .no-margin {
        margin: 0px;
    }

    /* box component */

    .box {
        border-color: #e6e6e6;
        background: #FFF;
        border-radius: 6px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
        padding: 10px;
        margin-bottom: 40px;
    }

    .box-center {
        margin: 20px auto;
    }


    input[type=file] {
        display: block !important;
        right: 1px;
        top: 1px;
        height: 34px;
        opacity: 0;
        width: 100%;
        background: none;
        position: absolute;
        overflow: hidden;
        z-index: 2;
    }

    .control-fileupload {
        display: block;
        border: 1px solid #d6d7d6;
        background: #FFF;
        border-radius: 4px;
        width: 100%;
        height: 36px;
        line-height: 36px;
        padding: 0px 10px 2px 10px;
        overflow: hidden;
        position: relative;
    }

    label {
        line-height: 24px;
        color: #999999;
        font-size: 14px;
        font-weight: normal;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        position: relative;
        z-index: 1;
        margin-right: 90px;
        margin-bottom: 0px;
        cursor: text;
    }

</style>
