import slide0 from "../html/slide-0.html?raw";
import slide1 from "../html/slide-1.html?raw";
import slide2 from "../html/slide-2.html?raw";
import slide3 from "../html/slide-3.html?raw";
import slide4 from "../html/slide-4.html?raw";
import slideFinal from "../html/slide-final.html?raw";

const mainContent = document.querySelector(".main-content");
mainContent.insertAdjacentHTML("beforeend", slide0);
mainContent.insertAdjacentHTML("beforeend", slide1);
mainContent.insertAdjacentHTML("beforeend", slide2);
mainContent.insertAdjacentHTML("beforeend", slide3);
mainContent.insertAdjacentHTML("beforeend", slide4);
// mainContent.insertAdjacentHTML("beforeend", slideFinal);
