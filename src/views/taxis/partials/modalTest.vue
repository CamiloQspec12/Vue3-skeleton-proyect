<template>
    <modal ref="modalTest" titulo="Ejemplo de modal">
        dadwadawd
    </modal>
</template>

<script>
export default {
    data(){
        return {

        }
    },
    methods: {
        toggle(){
            this.$refs.modalTest.toggle();
        },
    }
}
</script>