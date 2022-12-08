const buildHeader = () => {
    // -- build uniques
    const content = document.getElementById("content");
    const header = document.createElement("header");
    const nav = document.createElement("nav");
    const links = document.createElement("ul");
    links.id = "links";

    content.appendChild(header);
    header.appendChild(nav);

    const appendElems = (d, val, elem) => {
        nav.appendChild(d);
        d.id = val;
        d.appendChild(elem);
    };

    const addLogo = (d, val, text, num) => {
        let home = document.getElementById("home");
        home.appendChild(d);
        d.id = val;
        d.textContent = text;
        d.setAttribute("style", `font-size: 28px; font-weight: 700; letter-spacing: -1.25px;
                                 margin: -1.5px; color: var(--blue); transform: rotate(${num});`);
    };

    const addListItem = (a, val, text) => {
        let listItem = document.createElement("li");
        listItem.setAttribute("style", "list-style-type: none;");
        links.appendChild(listItem);
        a.id = val;
        a.textContent = text;
        listItem.appendChild(a);
        a.onmouseover = () => a.style.textDecoration = "underline";
        a.onmouseleave = () => a.style.textDecoration = "none";
    };
    // create divs + anchors + list items
    for (let i = 0; i < 4; i++) {
        let div = document.createElement("div");
        let anchor = document.createElement("a");
        anchor.setAttribute("style", "cursor: pointer; color: var(--blue);");

        switch (i) {
            case 0:
                appendElems(div, "logo", anchor);
                anchor.id = "home";
                anchor.setAttribute("style", "display: flex; cursor: pointer;");
                continue;
            case 1:
                addLogo(div, "lo", "LO", "-45deg");
                addListItem(anchor, "about", "ABOUT");
                continue;
            case 2:
                addLogo(div, "go", "GO", "45deg");
                addListItem(anchor, "menus", "MENUS");
                continue;
            case 3:
                appendElems(div, "wrapper", links);
                addListItem(anchor, "contact", "CONTACT");
                break;
        };
    };

    links.setAttribute("style", `display: flex; justify-content: space-evenly; width: 50vw;
                                 font-weight: bold; font-style: italic; letter-spacing: -1.25px;
                                 margin: 10px 0 10px 0;`);
    nav.setAttribute("style", "display: flex; justify-content: space-evenly; padding: 15px 0;");
};

export { buildHeader, };