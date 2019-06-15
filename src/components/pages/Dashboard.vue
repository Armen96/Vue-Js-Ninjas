<template>


    <div style="padding: 200px 0">

        <div class="">
                <ul class="list-group">
                    <li class="list-group-item">Users</li>
                    <li class="list-group-item">Reports</li>
                </ul>
        </div>

    </div>


</template>

<script>
    export default {
        name: "Dashboard"
    }
</script>

<style scoped>
    .wrapper {
        display: flex;
        width: 100%;
    }

    #sidebar {
        width: 250px;
        position: fixed;
        top: 0;
        left: 0;
        height: 100vh;
        z-index: 999;
        background: #7386D5;
        color: #fff;
        transition: all 0.3s;
    }
</style>
