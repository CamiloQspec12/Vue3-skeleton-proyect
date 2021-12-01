<template>
    <transition name="page" mode="out-in">
      <component :is="layout" v-if="layout" />
    </transition>
</template>

<script>
import layoutDefault from '~/layouts/default.vue'
export default {
  components: {
    layoutDefault,
  },
  watch: {
    $route(to){
      this.layout = _.get(to, 'matched[0].components.default.layout', 'layoutDefault');
    }
  },
  data(){
    return {
      layout: 'layoutDefault'
    }
  },
  methods: {
    setLayout(){
      alert('asdasd')
    }
  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
