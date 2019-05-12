<template>
    <section class="text-center my-5">
        <div class="about-section paddingTB60 gray-bg">
            <div class="container">
                <div class="row margin-auto">
                    <div class="margin-auto">
                        <div class="col-md-8 offset-md-2">
                            <div class="about-title clearfix">
                                <h1>About <span> Reportiks</span></h1>
                                <br>
                                <p class="about-paddingB">
                                    reportiks.am is the first and largest online bookstore in Armenia.
                                    It presents the whole range of "Bookami" bookstores network on the online platform and considers the distribution of Armenian and foreign language in Armenia and beyond its borders.
                                </p>
                                <p>
                                    Establishment:
                                    "Bookami" bookstore was founded in 1932.
                                    1997 Specialized Bookcovering Bookshop №26 has been transformed by Buccinim LLC Khachik Vardanyan. In a short period of time the company has become the leader in import and sales of educational, scientific and other literature in Armenia.
                                    It cooperates with the leading publishing houses of the Republic of Armenia, the United States of America, France, Great Britain, Lebanon, Ukraine, Belarus and Poland.
                                </p>
                                <p>
                                    Assortment
                                    The "Bookami" bookstores network publishes and publishes in Armenia all the books available in the Armenian market, as well as translated and original, in foreign, Armenian, Russian, English and other languages.
                                    There are also original, old books, stationery, developing games, didactic materials, postcards, maps, and more.
                                </p>

                                <p>
                                    Publications:
                                    In addition to being a bookshop, "Bukinist" company also carries out publishing activities.
                                    She has published more than 500 titles of books, joint publishing projects with the UK, Belgium and Russia, leading Polish publishing houses.
                                </p>
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
