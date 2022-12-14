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
    };

    const addListItem = (a, val, text) => {
        let listItem = document.createElement("li");
        links.appendChild(listItem);
        a.id = val;
        a.textContent = text;
        listItem.appendChild(a);
    };
    // create divs + anchors + list items
    for (let i = 0; i < 4; i++) {
        let div = document.createElement("div");
        let anchor = document.createElement("a");

        switch (i) {
            case 0:
                appendElems(div, "logo", anchor);
                anchor.id = "home";
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
};

export { buildHeader, };