import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faHouse,
  faEnvelope,
  faUserLarge,
  faBars,
} from "@fortawesome/free-solid-svg-icons";

library.add(fab);
library.add(faHouse);
library.add(faEnvelope);
library.add(faUserLarge);
library.add(faBars);

createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(router)
  .mount("#app");
