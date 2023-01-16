const buildBtns = (appendTo, text, label, identifier) => {
    const btn = document.createElement("button");
    btn.textContent = text;
    btn.type = label;
    btn.id = identifier;
    appendTo.appendChild(btn);
};

export { buildBtns };