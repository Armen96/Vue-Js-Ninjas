<template>
    <div>
    <footer>
        <div class="container">
            <div class="row">
                <div class="col-md-4 col-sm-6 footerleft ">
                    <div class="logofooter">
                        <img src="../../assets/reporteriks/logo.png" width="200" alt="">
                    </div>
                </div>
                <div class="col-md-4 col-sm-6 paddingtop-bottom">
                    <h6 class="heading7">GENERAL INFO</h6>
                    <ul class="footer-ul">
                        <p><i class="fa fa-map-pin"></i> 149 Gridor Zograp ,Armenia Yerevan</p>
                        <p><i class="fa fa-phone"></i> Phone (Armenia) : +374 98 51 23</p>
                        <p><i class="fa fa-envelope"></i> E-mail : barsegyan96armen@gmail.com</p>
                    </ul>
                </div>
                <div class="col-md-4 col-sm-6 paddingtop-bottom">
                    <div class="fb-page" data-href="https://www.facebook.com/facebook" data-tabs="timeline" data-height="300" data-small-header="false" style="margin-bottom:15px;" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true">
                        <div class="fb-xfbml-parse-ignore">
                            <blockquote cite="https://www.facebook.com/facebook"><a>Facebook</a></blockquote>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    </footer>
    <!--footer start from here-->
    <div class="copyright">
        <div class="container">
            <div class="row">

                <div class="col-md-6">
                    <p>© 2019 - All Rights with Webenlance</p>
                </div>
                <div class="col-md-6">
                    <ul class="bottom_ul">
                        <!--<li><a href="">Home</a></li>-->
                        <!--<li><a href="">About us</a></li>-->
                        <!--<li><a href="">Blog</a></li>-->
                        <!--<li><a href="">Faq's</a></li>-->
                        <!--<li><a href="">Contact us</a></li>-->
                        <!--<li><a href="">Site Map</a></li>-->
                    </ul>
                </div>

            </div>
        </div>
    </div>

    </div>

</template>

<script>
    export default {
        name:'Footer',
        props:{
            company: String
        },
        data(){
            return {
                copyright: "© 2018 Copyright"
            }
        }
    }
</script>

<style>
    @import url(https://fonts.googleapis.com/css?family=Open+Sans:400,700,300);
    footer { background-color:#0c1a1e; min-height:350px; font-family: 'Open Sans', sans-serif; }
    .footerleft { margin-top:50px; padding:0 36px; }
    .logofooter { margin-bottom:10px; font-size:25px; color:#fff; font-weight:700;}

    .footerleft p { color:#fff; font-size:12px !important; font-family: 'Open Sans', sans-serif; margin-bottom:15px;}
    .footerleft p i { width:20px; color:#999;}


    .paddingtop-bottom {  margin-top:50px;}
    .footer-ul { list-style-type:none;  padding-left:0px; margin-left:2px;}
    .footer-ul li { line-height:29px; font-size:12px;}
    .footer-ul li a { color:#a0a3a4; transition: color 0.2s linear 0s, background 0.2s linear 0s; }
    .footer-ul i { margin-right:10px;}
    .footer-ul li a:hover {transition: color 0.2s linear 0s, background 0.2s linear 0s; color:#ff670f; }

    .social:hover {
        -webkit-transform: scale(1.1);
        -moz-transform: scale(1.1);
        -o-transform: scale(1.1);
    }




    .icon-ul { list-style-type:none !important; margin:0px; padding:0px;}
    .icon-ul li { line-height:75px; width:100%; float:left;}
    .icon { float:left; margin-right:5px;}


    .copyright { min-height:40px; background-color:#000000;}
    .copyright p { text-align:left; color:#FFF; padding:10px 0; margin-bottom:0px;}
    .heading7 { font-size:21px; font-weight:700; color:#d9d6d6; margin-bottom:22px;}
    .post p { font-size:12px; color:#FFF; line-height:20px;}
    .post p span { display:block; color:#8f8f8f;}
    .bottom_ul { list-style-type:none; float:right; margin-bottom:0px;}
    .bottom_ul li { float:left; line-height:40px;}
    .bottom_ul li:after { content:"/"; color:#FFF; margin-right:8px; margin-left:8px;}
    .bottom_ul li a { color:#FFF;  font-size:12px;}
</style>
