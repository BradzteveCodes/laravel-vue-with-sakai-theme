import { createApp } from "vue";
import router from "./router";
import PrimeVue from "primevue/config";
import Aura from "@primeuix/themes/aura";
import Button from "primevue/button";
const App = {
    data() {
        return {
            message: "Hello Vue + Laravel🚀",
            message1: "Hello Vue + Laravel1🚀",
        };
    }
};
const app = createApp(App);
app.use(PrimeVue, { theme: { preset: Aura } });
app.component("Button", Button);
app.use(router);
app.mount("#app");
