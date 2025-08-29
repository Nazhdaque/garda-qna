import slide00 from "../html/slide-00.html?raw";
import slide01 from "../html/slide-01.html?raw";
import slide02 from "../html/slide-02.html?raw";
import slide03 from "../html/slide-03.html?raw";
import slideFinal from "../html/slide-final.html?raw";

const mainContent = document.querySelector(".main-content");
mainContent.insertAdjacentHTML("beforeend", slide00);
mainContent.insertAdjacentHTML("beforeend", slide01);
mainContent.insertAdjacentHTML("beforeend", slide02);
mainContent.insertAdjacentHTML("beforeend", slide03);
mainContent.insertAdjacentHTML("beforeend", slideFinal);
