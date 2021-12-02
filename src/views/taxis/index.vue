<template>
    <section class="pt-3">
        <tabs :tabs="rutas" class="mx-5 border-bottom" />
        <div class="custom-scroll overflow-auto" style="height:calc(100vh - 117px)">
            <router-view />
        </div>
    </section>
</template>

<script>
export default {
    data(){
        return {
            rutas: [
                { titulo: 'Servicios', num: 30, ruta: 'taxis.servicios', icono: 'icon-map-marker-outline' },
                { titulo: 'Inconvenientes', num: 30, ruta: 'taxis.inconvenientes', icono: 'icon-flag' },
                { titulo: 'Soporte General', num: 30, ruta: 'taxis.soporte-general', icono: 'icon-burble-chat' }
            ]
        }
    }
}
</script>