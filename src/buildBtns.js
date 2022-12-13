const buildBtns = (appendTo, text) => {
    const btn = document.createElement("button");
    btn.textContent = text;
    btn.setAttribute("style", `font-family: "Inter"; font-size: 20px; font-style: italic;
                                letter-spacing: -1.25px; margin-top: 5px; padding: 15px;
                                background-color: var(--blue); border: 1px solid var(--black); color: var(--white);
                                border-radius: 10px; box-shadow: 0 0 3px 1px var(--black); cursor: pointer;`);
    btn.onmouseenter = () => {
        btn.style.transform = "translateY(-2px)";
        btn.style.transition = "0.3s ease";
        btn.style.backfaceVisibility = "hidden";
    };
    btn.onmouseleave = () => btn.style.transform = "translateY(2px)";

    appendTo.appendChild(btn);
};

export { buildBtns };