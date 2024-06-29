import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import Reverb from "./plugins/reverb";

createApp(App)
  .use(Reverb, {
    key: import.meta.env.VITE_REVERB_APP_KEY,
    wsHost: import.meta.env.VITE_REVERB_HOST,
    wsPort: import.meta.env.VITE_REVERB_PORT,
    wssPort: import.meta.env.VITE_REVERB_PORT,
    forceTLS: (import.meta.env.VITE_REVERB_SCHEME ?? "https") === "https",
    enabledTransports: ["ws", "wss"],
  })
  .mount("#app");
