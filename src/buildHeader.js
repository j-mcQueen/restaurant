const create = () => {
    // -- build uniques
    const header = document.createElement("header");
    const nav = document.createElement("nav");
    const links = document.createElement("ul");
    // create divs + anchors + list items
    for (let i = 0; i < 4; i++) {
        let div = document.createElement("div");
        let anchor = document.createElement("a");
        if (i > 0) {
            let listItem = document.createElement("li");
        };
    };
};

export { create };