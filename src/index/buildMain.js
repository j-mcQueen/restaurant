import githubCat from "../../../../logos/github/github-mark/github-mark-white.png";
import instagram from "../../../../logos/instagram/instagram.svg";
import { addLinks } from "../index/addLinks";

const buildMain = () => {
    const content = document.getElementById("content");
    const main = document.createElement("main");
    content.appendChild(main);

    const addLogo = (elem, social, identifier) => {
        const logo = new Image();
        logo.src = social;
        logo.id = identifier;
        elem.appendChild(logo);
    };

    const addBlock = (val, elem) => {
        elem.id = val;
        main.appendChild(elem);
    };

    const addHeading = (elem, heading, identifier, text) => {
        let tag = document.createElement(heading);
        tag.id = identifier;
        tag.textContent = text;
        elem.appendChild(tag);
    };

    for (let i = 0; i < 4; i++) {
        let div = document.createElement("div");
        switch (i) {
            case 0:
                addLogo(div, githubCat, "github");
                addLogo(div, instagram, "instagram");
                addBlock("socials", div);
                continue;
            case 1:
                addHeading(div, "h1", "first", "s w + r d");
                addBlock("title", div);
                continue;
            case 2:
                addHeading(div, "h2", "second", "BRUTALIST RESTAURANT");
                addBlock("type", div);
                break;
            case 3:
                addBlock("links", div);
                addLinks(div);
                break;
        };
    };
};

export { buildMain };