<template>
    <div class="row mx-0 tabs">
        <el-tooltip
            v-for="(item,index) in tabs" 
            :key="index"
            class="item"
            effect="light"
            :disabled="($route.name == item.ruta)"
            :content="item.titulo"
            placement="bottom"
        >
            <router-link :to="{ name: `${item.ruta}`, params: item.params || {} }" class="col-auto d-middle justify-content-around position-relative pt-1">
                <i v-if="item.icono" :class="`${item.icono}`" class="f-20" />
                <p v-if="$route.name == item.ruta" class="nombre-tab pb-0">{{ item.titulo }}</p>
                <div style="width:8px;" />
                <div class="item-num br-20">
                    {{ item.num }}
                </div>
            </router-link>
        </el-tooltip>
        <slot />
        <!-- <router-link
        v-for="(item,index) in tabs" 
        :key="index"
        :data-xd="item.ruta"
        :to="{ name: `${item.ruta}`, params: item.params || {} }"
        :class="{'router-link-active': subIsActive(item.active)}"
        class="d-middle position-relative tab-inner"
        >
            <el-tooltip :disabled="item.component_name==$route.ruta" class="item" effect="light" :content="item.titulo" placement="top">
                <i v-if="item.icono" :class="`${item.icono}`" class="mdi f-20" />
            </el-tooltip>
            <p class="nombre-tab">{{ item.titulo }}</p>
            <div v-if="item.num !== undefined" class="ml-2">
                ({{ item.num }})
            </div>
        </router-link> -->
    </div>
</template>

<script>
export default {
    props: {
        tabs: {
            type: Array,
            default: () => []
        }
    },
    computed: {
        isActive() {
            return this.$route.name
        }
    },
    methods: {
        subIsActive(input) {
            const paths = Array.isArray(input) ? input : [input]
            return paths.some(path => {
                return this.$route.path.indexOf(path) === 0 || this.$route.path.indexOf(path) === 1 || this.$route.name === path
            })
        }
    }
}
</script>

<style lang="scss" scoped>

.tabs{
    a{
        text-decoration: none;
        height: 40px;
        color: #868686;
        font-size: 14px;
        border-bottom: 2px solid transparent !important;
        
        .item-num{
            min-width: 27px;
            height: 17px;
            font-size: 12px;
            background-color: #F5F5F5;
            color: #868686;
        }
        
        &.router-link-active{
            border-bottom: 3px solid #000000 !important;
            color: #000000 !important;
            .nombre-tab{
                display: inline-block;
            }
            .item-num{
                background-color: #000000;
                color: white;
            }
        }
        &:hover{
            text-decoration: none !important;
        }
    }
}
</style>