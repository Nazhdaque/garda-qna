import "/css/main.css";
import "/js/importHTML.js";
import { slideHeader } from "./slideHeader.js";

slideHeader("main-header", "-slide-up");

// --
const imgs = document.querySelectorAll("img");
imgs.forEach(item => item.getAttribute("src"));
