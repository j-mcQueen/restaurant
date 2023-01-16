import { buildHeader } from "../buildHeader";
buildHeader();

const buildContact = () => {
    const content = document.getElementById("content");
    const main = document.createElement("main");
    const grid = document.createElement("div");
    grid.id = "grid";
    main.appendChild(grid);
    content.appendChild(main);
};
export { buildContact };