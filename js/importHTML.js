import slide01 from "../html/slide-01.html?raw";
import slide02 from "../html/slide-02.html?raw";

const mainContent = document.querySelector(".main-content");
mainContent.insertAdjacentHTML("beforeend", slide01);
mainContent.insertAdjacentHTML("beforeend", slide02);
