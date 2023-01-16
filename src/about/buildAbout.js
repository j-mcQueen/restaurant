import { buildHeader } from "../buildHeader";

buildHeader();

const buildAbout = () => {
    const content = document.getElementById("content");
    const main = document.createElement("main");
    const grid = document.createElement("div");
    grid.id = "grid";
    main.appendChild(grid);
    content.appendChild(main);

    const appendElem = (cntr, tag, text, identifier, external) => {
        const elem = document.createElement(tag);
        elem.textContent = text;
        elem.id = identifier;
        cntr.appendChild(elem);

        if (external == true) grid.appendChild(cntr);
    };

    for (let i = 0; i < 3; i++) {
        const div = document.createElement("div");
        switch (i) {
            case 0:
                div.id = "about-title";
                appendElem(div, "h1", "history, ethos", "first", true);
                continue;
            case 1:
                div.id = "cta";
                appendElem(div, "button", "reserve", "reserve-cta", true);
                continue;
            case 2:
                div.id = "info";
                appendElem(div, "div", "PICTURE", "picture", true);
                appendElem(div, "div", "BLURB", "blurb", false);
                break;
        };
    };
};

export { buildAbout };