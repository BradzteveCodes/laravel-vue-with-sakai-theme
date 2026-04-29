import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import vue from "@vitejs/plugin-vue";
import tailwindcss from "@tailwindcss/vite";
import Components from "unplugin-vue-components/vite";
import { PrimeVueResolver } from "@primevue/auto-import-resolver";

export default defineConfig({
    plugins: [
        laravel({
            input: ["resources/js/main.js"], // ✅ Changed to main.js only
            refresh: true,
        }),
        vue(),
        tailwindcss(),
        Components({
            resolvers: [PrimeVueResolver()],
        }),
    ],
    resolve: {
        alias: {
            "@": "/resources/js",
              '/demo': '/public/demo',  // ✅ add this
            vue: "vue/dist/vue.esm-bundler.js",
        },
    },
});
