<template>
    <section class="text-center my-5 ">
        <div class="about-section paddingTB60 gray-bg">
            <div class="container">
                <div class="row margin-auto">
                    <div class="margin-auto">
                        <div class="col-md-8 offset-md-2">
                            <div class="about-title clearfix">
                                <h1>About <span>Appmom</span></h1>
                                <h3>Lorem ipsum dolor sit amet </h3>
                                <p class="about-paddingB">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquet dolor libero, eget venenatis mauris finibus dictum. Vestibulum quis elit eget neque porttitor congue non sit amet dolor. Proin pretium purus a lorem ornare </p>
                                <p>sed lobortis pulvinar. Integer laoreet mi id eros porta euismod. Suspendisse potenti. Nulla eros mauris, convallis et sem tempus, viverra hendrerit sapien</p>
                                <div class="about-icons"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import rainbow from '../../mixin/directives'
    export default {
        name: "About",
        data(){
            return {
                title: "About Page",
                description: 'About page some Information'
            }
        },
        mixins: [rainbow]
    }
</script>

<style scoped>
    .paddingTB60 {padding:60px 0px 60px 0px;}
    .gray-bg {background: #F1F1F1 !important;}
    .about-title {}
    .about-title h1 {color: #535353; font-size:45px;font-weight:600;}
    .about-title span {color: #AF0808; font-size:45px;font-weight:700;}
    .about-title h3 {color: #535353; font-size:23px;margin-bottom:24px;}
    .about-title p {color: #7a7a7a;line-height: 1.8;margin: 0 0 15px;}
    .about-paddingB {padding-bottom: 12px;}
    .about-img {padding-left: 57px;}

    /* Social Icons */
    .about-icons {margin:48px 0px 48px 0px ;}
    .about-icons i{margin-right: 10px;padding: 0px; font-size:35px;color:#323232;box-shadow: 0 0 3px rgba(0, 0, 0, .2);}
    .about-icons li {margin:0px;padding:0;display:inline-block;}
    #social-fb:hover {color: #3B5998;transition:all .001s;}
    #social-tw:hover {color: #4099FF;transition:all .001s;}
    #social-gp:hover {color: #d34836;transition:all .001s;}
    #social-em:hover {color: #f39c12;transition:all .001s;}
    .margin-auto{
        margin: auto;
    }
</style>
