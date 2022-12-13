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

        blurbs.setAttribute("style", `display: flex; justify-content: center; gap: 20px; margin-bottom: 10%;`);
        div.setAttribute("style", `display: flex; flex-direction: column; justify-content: space-between; align-items: center; gap: 50px;
                                 border: 1px solid var(--black); border-radius: 10px; 
                                 background-color: ${color}; padding: 5% 4%;`);
        subtitle.setAttribute("style", `font-size: 22px; letter-spacing: -2px; margin: 0; color: var(--black);`);
        para.setAttribute("style", `text-align: center; letter-spacing: -0.75px; margin: 0; padding: 0 5%`);

        let info = [subtitle, para];
        for (let i = 0; i < info.length; i++) {
            div.appendChild(info[i]);
        };
        blurbs.appendChild(div);
        buildBtns(div, cta);
    };
    createElems("pink", "WHO WE ARE", "short paragraph about the company", "about us", "var(--pink)");
    createElems("green", "OUR FOOD", "short paragraph about the cuisine", "menus", "var(--green)");
};

export { buildBlurbs };