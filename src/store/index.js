import app from '~/app'

import { createStore } from "vuex";

const requireContext = require.context('./modules', true, /.*\.js$/)

const modules = requireContext.keys()
.map(file =>
    [file.replace(/(^.\/)|(\.js$)/g, ''), requireContext(file)]
)
.reduce((modules, [name, module]) => {
    // module.namespaced = true
    if (module.namespaced === undefined){
        module.namespaced = true
    }

    return { ...modules, [name]: module }
}, {})

const store = createStore({
  modules
});

app.use(store);

