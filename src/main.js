import app from './app'
import router from "./router";
import BaseComponents from "./components/index"
import "./store";
import './library';
import './plugins';


app.use(router);
BaseComponents.register(app);
app.mount("#app");
//createApp(App).use(store).use(router).mount("#app");
