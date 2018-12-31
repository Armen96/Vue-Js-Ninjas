<template>
    <footer class="page-footer margin-auto font-small teal pt-4">
        <div class="footer-copyright text-center py-3">{{copyright}} - {{ company }}</div>
    </footer>
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
.margin-auto{
    margin: auto;
}
    .teal-footer{
        background: teal;
    }
    .footer-copyright{
        color: #fff;
    }
</style>