import { buildBtns } from "../buildBtns";
const buildBlurbs = () => {
    const blurbs = document.getElementById("blurbs");
    const createElems = (cntr, sub, blrb, cta, color) => {
        let div = document.createElement("div");
        let subtitle = document.createElement("h3");
        let para = document.createElement("p");

        div.id = cntr;
        subtitle.textContent = sub;
        para.textContent = blrb;

        let info = [subtitle, para];
        for (let i = 0; i < info.length; i++) {
            div.appendChild(info[i]);
        };
        blurbs.appendChild(div);
        buildBtns(div, cta);
    };
    createElems("pink", "WHO WE ARE", "short paragraph about the company", "about us");
    createElems("green", "OUR FOOD", "short paragraph about the type of menu/ cuisine", "menus");
};

export { buildBlurbs };