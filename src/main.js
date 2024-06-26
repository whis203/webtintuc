import "./assets/main.css";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { library } from "@fortawesome/fontawesome-svg-core";
import store from "./store";
/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import {
  faCaretDown,
  faGamepad,
  faSearch,
  faUser,
  faDice,
  faCode,
  faNairaSign,
  faXmark,
  faComputerMouse,
  faTicket,
  faTv,
  faBook,
  faRecordVinyl,
  faClipboard,
  faMobile,
  faCircleDown,
  faEnvelope,
  faComment,
  faKey,
  faUpload,
  faPen,
  faTrash,
  faSignOut,
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faCaretDown,
  faUser,
  faSearch,
  faGamepad,
  faDice,
  faCode,
  faNairaSign,
  faXmark,
  faComputerMouse,
  faTicket,
  faTv,
  faBook,
  faClipboard,
  faMobile,
  faCircleDown,
  faEnvelope,
  faComment,
  faKey,
  faUpload,
  faPen,
  faTrash,
  faSignOut
);
const app = createApp(App);
app.component("font-awesome-icon", FontAwesomeIcon);
app.use(router);
app.use(store);
app.mount("#app");
