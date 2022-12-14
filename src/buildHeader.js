const buildHeader = () => {
    // -- build uniques
    const content = document.getElementById("content");
    const header = document.createElement("header");
    const nav = document.createElement("nav");
    const para = document.createElement("p");
    const links = document.createElement("ul");
    links.id = "links";

    header.appendChild(nav);
    content.appendChild(header);

    const appendElems = (d, val, elem) => {
        nav.appendChild(d);
        d.id = val;
        d.appendChild(elem);
    };

    const addListItem = (a, val, text) => {
        let listItem = document.createElement("li");
        links.appendChild(listItem);
        a.id = val;
        a.textContent = text;
        listItem.appendChild(a);
    };
    // create divs + anchors + list items
    for (let i = 0; i < 5; i++) {
        let div = document.createElement("div");
        let anchor = document.createElement("a");

        switch (i) {
            case 0:
                appendElems(div, "logo", anchor);
                anchor.id = "home";
                continue;
            case 1:
                addListItem(anchor, "about", "about");
                continue;
            case 2:
                appendElems(div, "wrapper", links);
                addListItem(anchor, "menus", "menus");
                continue;
            case 3:
                addListItem(anchor, "contact", "contact");
                continue;
            case 4:
                addListItem(anchor, "book", "book");
                break;
        };
    };

    let home = document.getElementById("home");
    para.textContent = "s w + r d";
    home.appendChild(para);
};

export { buildHeader, };