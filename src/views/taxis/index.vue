<template>
    <section>
        Prueba pagina de taxis
        <hello-world msg="Welcome to Your Vue.js App" />
        <div class="row mx-0 bg-danger">
            {{ test }}
            <el-input v-model="test" />
        </div>
    </section>
</template>

<script>
export default {
    data(){
        return {
            test: ''
        }
    }
}
</script>