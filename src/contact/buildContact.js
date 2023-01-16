import { buildHeader } from "../buildHeader";
buildHeader();

const buildContact = () => {
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
};
export { buildContact };