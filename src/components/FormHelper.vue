<template>
    <section class="text-center my-5">
        <h2 class="h1-responsive h1-custom-class font-weight-bold my-5">{{title}}</h2>

        <div id="form-header">
            <slot name="form-header"></slot>
        </div>

        <div id="form-content">
            <slot name="form-content"></slot>
        </div>

        <div id="form-footer">
            <slot name="form-footer"></slot>
        </div>

    </section>
</template>

<script>
    export default {
        name: "FormHelper",
        props:{
          title: String
        }
    }
</script>

<style scoped>

</style>