const addLinks = (links) => {
    const heroLinks = document.createElement("ul");
    heroLinks.id = "hero-links";
    links.appendChild(heroLinks);

    const addListItem = (tag, val, text) => {
        let listItem = document.createElement("li");
        heroLinks.appendChild(listItem);
        tag.id = val;
        tag.textContent = text;
        listItem.appendChild(tag);
    };

    for (let i = 0; i < 4; i++) {
        let anchor = document.createElement("a");
        switch (i) {
            case 0:
                addListItem(anchor, "about", "about");
                continue;
            case 1:
                addListItem(anchor, "menus", "menus");
                continue;
            case 2:
                addListItem(anchor, "contact", "contact");
                continue;
            case 3:
                addListItem(anchor, "book", "book");
                break;
        };
    };
};

export { addLinks };