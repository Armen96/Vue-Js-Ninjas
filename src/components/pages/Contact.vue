<template>
    <div class="container contact-form">
        <div class="contact-image">
            <img src="https://image.ibb.co/kUagtU/rocket_contact.png" alt="rocket_contact"/>
        </div>
        <form>
            <h3>Drop Us a Message</h3>
            <div class="row">
                <div class="col-md-6">
                    <div class="form-group">
                        <input type="text" class="form-control" placeholder="Your Name *" v-model="message.name" />
                    </div>
                    <div class="form-group">
                        <input type="text" class="form-control" placeholder="Your Email *" v-model="message.email" />
                    </div>
                    <div class="form-group">
                        <input type="text" class="form-control" placeholder="Your Phone Number *" v-model="message.phone" />
                    </div>
                    <div class="form-group">
                        <input type="submit" class="btnContact" value="Send Message" v-on:click.prevent="contactUs"/>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-group">
                        <textarea name="txtMsg" class="form-control" placeholder="Your Message *" v-model="message.message" style="width: 100%; height: 150px;"></textarea>
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
    import rainbow from '../../mixin/directives'
    export default {
        name: "Contact",
        data(){
            return {
                title: "Contact Us",
                description: 'DirectionX',
                message: {
                    name: '',
                    email:'',
                    phone:'',
                    message: ''
                }
            }
        },
        methods:{
            contactUs(){
                this.$store.dispatch('CONTACT_US',this.message).then(() => {
                    alert('a');
                })
            }
        },
        mixins: [rainbow]
    }
</script>

<style scoped>
    body{
        background: -webkit-linear-gradient(left, #0072ff, #00c6ff);
    }
    .contact-form{
        background: #fff;
        margin-top: 10%;
        margin-bottom: 5%;
        width: 70%;
    }
    .contact-form .form-control{
        border-radius:1rem;
    }
    .contact-image{
        text-align: center;
    }
    .contact-image img{
        border-radius: 6rem;
        width: 11%;
        margin-top: -3%;
        transform: rotate(29deg);
    }
    .contact-form form{
        padding: 14%;
    }
    .contact-form form .row{
        margin-bottom: -7%;
    }
    .contact-form h3{
        margin-bottom: 8%;
        margin-top: -10%;
        text-align: center;
        color: #0062cc;
    }
    .contact-form .btnContact {
        width: 50%;
        border: none;
        border-radius: 1rem;
        padding: 1.5%;
        background: #dc3545;
        font-weight: 600;
        color: #fff;
        cursor: pointer;
    }
    .btnContactSubmit
    {
        width: 50%;
        border-radius: 1rem;
        padding: 1.5%;
        color: #fff;
        background-color: #0062cc;
        border: none;
        cursor: pointer;
    }
</style>
