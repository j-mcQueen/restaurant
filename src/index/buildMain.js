import githubCat from "../../../../logos/github/github-mark/github-mark-white.png";
import instagram from "../../../../logos/instagram/instagram.svg";

const buildMain = () => {
    const content = document.getElementById("content");
    const main = document.createElement("main");
    content.appendChild(main);

    const addLogo = (elem, social, identifier) => {
        const logo = new Image();
        logo.src = social;
        logo.id = identifier;
        elem.appendChild(logo);
    }

    const addBlock = (val, elem) => {
        elem.id = val;
        main.appendChild(elem);
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
                const heading = document.createElement("h1");
                heading.id = "heading";
                heading.textContent = "s w + r d";
                div.appendChild(heading);
                addBlock("title", div);
                continue;
            case 2:
                addBlock("type", div);
                break;
            case 3:
                addBlock("links", div);
                break;
        };
    };
};

export { buildMain };