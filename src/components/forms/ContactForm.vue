<template>
    <div>
        <FormHelper title="Contact Us">
            <div slot="form-header">
                <p>Contact Us Page</p>
            </div>
            <div slot="form-content">
                <div class="form-group">
                    <input type="email" class="form-control" placeholder="Email">
                    <br>
                    <input type="text" class="form-control" placeholder="Message">
                    <br>
                    <button class="btn form-control btn-success">Send</button>
                </div>
            </div>
            <div slot="form-footer">
                <p>Thanks in advance</p>
            </div>
        </FormHelper>
    </div>
</template>

<script>
    import FormHelper from '../FormHelper.vue';

    export default {
        name: "ContactForm",
        components: {
            FormHelper
        }
    }
</script>

<style scoped>

</style>