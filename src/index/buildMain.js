const buildMain = () => {
    const content = document.getElementById("content");
    const main = document.createElement("main");
    content.appendChild(main);

    const addSection = (val, elem) => {
        elem.id = val;
        main.appendChild(elem);
    };

    for (let i = 0; i < 3; i++) {
        let section = document.createElement("section");
        switch (i) {
            case 0:
                addSection("hero", section);
                continue;
            case 1:
                addSection("blurbs", section);
                continue;
            case 2:
                addSection("question", section);
                break;
        };
    };
};

export { buildMain };