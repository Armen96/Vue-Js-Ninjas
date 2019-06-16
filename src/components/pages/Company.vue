<template>
    <div style="padding: 200px 0">

        <div class="">
            <ul class="list-group">
                <li class="list-group-item">{{this.company.name}}</li>
            </ul>
        </div>

    </div>
</template>

<script>
    import { mapGetters } from 'vuex';

    export default {
        name: "Company",

        data(){
            return {
                company: {},
                user: {}
            }
        },

        methods: {
            ...mapGetters([
                'getUser','getToken'
            ]),
        },

        mounted() {
            this.company = this.getUser().company;
        }
    }
</script>

<style scoped>

</style>
