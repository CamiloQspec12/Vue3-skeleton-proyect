<template>
    <div
    ref="baseModal"
    class="modal fade"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
    >
        <div
        class="modal-dialog modal-dialog-centered"
        :class="tamano ? tamano : ''"
        role="document"
        >
            <div class="modal-content">
                <div class="modal-header mb-1">
                    <div class="col-auto f-20 f-600">
                        {{ titulo }}
                    </div>
                    <div class="btn-close-modal ml-auto my-auto d-middle-center rounded-circle" style="width:22px;height:22px;" data-bs-dismiss="modal" aria-label="Close">
                        <i class="icon-close f-20 cr-pointer text-gr-general" />
                    </div>
                </div>
                <div class="modal-body overflow-auto custom-scroll" style="max-height:70vh;">
                    <slot />
                </div>
                <div class="modal-footer">
                    <button
                    v-if="!noCerrar" 
                    type="button"
                    class="btn-grey f-14"
                    @click="cerrar"
                    v-text="textosBotones.cerrar"
                    />
                    <button
                    v-loading="cargando"
                    type="button"
                    class="btn-general f-14"
                    @click="actionEliminar"
                    v-text="textosBotones.aceptar"
                    />
                    <!-- <button
                    v-if="!guardar"
                    type="button"
                    class="btn-general f-14"
                    @click="guardar"
                    v-text="textosBotones.guardar"
                    /> -->
                    <button
                    v-if="adicional !== ''"
                    v-loading="cargando"
                    :disabled="desactivarGuardar"
                    type="button"
                    class="btn-general f-14"
                    @click="onAdicional"
                    v-text="adicional"
                    />
                    <button
                    v-for="btn in btns"
                    v-show="btns.length"
                    :key="btn.texto"
                    type="button"
                    class="btn mx-2"
                    :class="btn.color"
                    @click="$emit('accion', btn.accion)"
                    v-text="btn.texto"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { Modal } from 'bootstrap'
export default {
    props: {
        titulo: {
            type: String,
            required: true
        },
        tamano: {
            type: String,
            default: 'modal-md'
        },
        desactivarGuardar: {
            type: Boolean,
            default: false
        },
        noCerrar:{
            type: Boolean,
            default: false
        },
        adicional: {
            type: String,
            default: ''
        },
        btns: {
            type: Array,
            default: () => { return [] }
        },
        cargando: {
            type: Boolean,
            default: false
        },
    },
    data(){
        return {
            textosBotones: {
                aceptar: 'Aceptar',
                cancelar: 'Cancelar',
                guardar: 'Guardar',
                cerrar: 'Cerrar',
            },
            modal: null,
        }
    },
    mounted(){
        this.modal = new Modal(this.$refs.baseModal)
    },
    methods: {
        toggle(){
            this.modal.show()
        },
        cerrarModal(){
            this.modal.hide()
        },
        guardar(){
            this.$emit('guardar')
        },
        onAdicional(){
            this.$emit('adicional')
        },
        cerrar(){
            this.$emit('cancelar')
            this.cerrarModal()
        }
    }
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/main.scss';

.modal-content{
    border: none;
    border-radius: 4px;

    .modal-header{
        padding: 0px 15px !important;
        height: 48px;
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
        border-bottom: none;
        background-size: cover;
        color: #000000 !important;

        .btn-close-modal{
            transition: background .3s ease-in;
            &:hover{
                background-color: #DBDBDB;
            }
        }
    }
    .modal-title{
        color: #000000;
        font-weight: normal;
    }
    .modal-footer{
        border-top: 0px;
        height: 51px !important;
        padding: 0px !important;
    }
}
</style>
