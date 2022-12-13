import { buildBtns } from "../buildBtns";
const buildQuestion = () => {
    const question = document.getElementById("question");
    const createElems = (title, text, contact) => {
        let subtitle = document.createElement("h3");
        let para = document.createElement("p");

        subtitle.textContent = title;
        para.textContent = text;

        question.appendChild(subtitle);
        question.appendChild(para);
        buildBtns(question, contact);
    };
    createElems("have a question?", "short paragraph about how easy it is to get in touch", "contact us");
};

export { buildQuestion };