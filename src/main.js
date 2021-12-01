import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import BaseComponents from "./components/index"

import './library';
// Used for component names globally
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'


const app = createApp(App);
app.use(store);
app.use(router);
BaseComponents.register(app);


app.mount("#app");
//createApp(App).use(store).use(router).mount("#app");
