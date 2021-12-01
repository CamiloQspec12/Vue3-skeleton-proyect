<template>
    <section class="menu-lateral scroll-none overflow-auto pt-4">
        <!-- <div v-for="(item, idx) in menus" :key="idx" class="row mx-0 my-3 j-center">
            <el-tooltip class="item" effect="light" :content="item.titulo" placement="top-start">
                <router-link
                v-slot="{ navigate, isActive }"
                :data-xd="item.ruta"
                :to="{ name: `${item.ruta}`, params: item.params || {} }"
                :class="{'router-link-active': subIsActive(item.active)}"
                >
                    <a
                    class="d-middle-center position-relative rounded-circle cr-pointer"
                    :class="{'router-link-exact-active router-link-active': isActive}"
                    @click="navigate"
                    >
                        <div v-show="item.cant>0" class="badge">
                            {{ item.cant }}
                        </div>
                        <i class="f-25 text-white" :class="item.icon" />
                    </a>
                </router-link>
            </el-tooltip>
        </div> -->
    </section>
</template>

<script>
export default {
    data(){
        return {
            rutaActiva: '',
            menus: [
                { titulo: 'Taxis', ruta: 'taxis', icon: 'icon-flag', cant: 0 },
            ]
        }
    },
    methods: {
        isActive(){
            return this.$route.name
        },
        subIsActive(input){
            const paths = Array.isArray(input) ? input : [input]
            return paths.some(path => {
                return this.$route.path.indexOf(path) === 0 || this.$route.path.indexOf(path) === 1 || this.$route.name === path
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.menu-lateral{
    width: 60px;
    position: relative;
    left: 1px;
    height: calc(100vh - 57px);
    box-shadow: 1px 0px 2px #00000029;
}
</style>