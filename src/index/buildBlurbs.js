const buildBlurbs = () => {
    const blurbs = document.getElementById("blurbs");
    const createElems = (cntr, sub, blrb) => {
        let div = document.createElement("div");
        let subtitle = document.createElement("h3");
        let para = document.createElement("p");

        div.id = cntr;
        subtitle.textContent = sub;
        para.textContent = blrb;
    };
    createElems("pink", "WHO WE ARE", "short paragraph about the company");
    createDiv("green", "OUR FOOD", "short paragraph about the type of menu/ cuisine");
};

export { buildBlurbs };