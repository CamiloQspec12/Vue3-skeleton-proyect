<template>
    <div class="default-layout">
        <navbar-layout />
        <div class="d-flex">
            <menu-lateral />
            <div class="position-relative app-wrapper">
                <router-view />
            </div>
        </div>
    </div>
</template>

<script>
import '~/assets/scss/main.scss'
export default {
    name: 'MainLayout',
}
</script>
<style lang="scss">
.default-layout{
    height: 100vh;
    .app-wrapper{
        top: 1px;
        left: -1px;
        height: calc(100vh - 57px);
        width: calc(100vw - 60px);
    }
}
</style>