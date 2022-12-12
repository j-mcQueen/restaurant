const buildHero = () => {
    const hero = document.getElementById("hero");
    const div = document.createElement("div");
    const primary = document.createElement("h1");
    const secondary = document.createElement("h2");
    const btn = document.createElement("button");

    div.id = "titles";
    primary.textContent = "CATCHY HEADLINE";
    secondary.textContent = "catchy subtext";
    btn.textContent = "book a table";

    hero.setAttribute("style", `display: flex; flex-direction: column; justify-content: center; 
                                align-items: center; margin: 15% 0; color: var(--black); text-align: center;`);
    div.setAttribute("style", `border: 1.5px solid var(--black); border-radius: 10px; font-size: 32px;
                                letter-spacing: -5px; padding: 2% 7%; background-color: var(--blue);`);
    primary.setAttribute("style", "margin: 0;");
    secondary.setAttribute("style", `font-weight: 400; font-style: italic; font-size: 24px;
                                     letter-spacing: -2px; margin: 5px 0;`);
    btn.setAttribute("style", `font-family: "Inter"; font-size: 20px; font-style: italic;
                                letter-spacing: -1.25px; margin-top: 5px; padding: 15px;
                                background-color: var(--yellow); border: 1px solid var(--black); 
                                border-radius: 10px; box-shadow: 0 0 3px 1px #2B2B2B; cursor: pointer;`);
    btn.onmouseenter = () => {
        btn.style.backgroundColor = "var(--strongYellow)";
        btn.style.transition = "0.4s ease";
    };
    btn.onmouseleave = () => btn.style.backgroundColor = "var(--yellow)";

    div.appendChild(primary);
    div.appendChild(secondary);
    hero.appendChild(div);
    hero.appendChild(btn);
};

export { buildHero };