import { buildBtns } from "../buildBtns";
const buildQuestion = () => {
    const question = document.getElementById("question");
    const createElems = (title, text, contact) => {
        let subtitle = document.createElement("h3");
        let para = document.createElement("p");

        subtitle.textContent = title;
        para.textContent = text;

        question.setAttribute("style", `display: flex; flex-direction: column; justify-content: center; align-items: 
                                        center; gap: 30px; margin-bottom: 10%;`);
        subtitle.setAttribute("style", `background-color: var(--white); border: 1px solid var(--black); border-radius: 10px; color: var(--black); font-size: 30px; letter-spacing: -1.75px; margin: 0; padding: 5px 15px;`);
        para.setAttribute("style", `background-color: var(--white); color: var(--black); font-size: 20px; letter-spacing: -1px; margin: 0; padding: 5px 15px; border: 1px solid var(--black); border-radius: 10px;`);

        question.appendChild(subtitle);
        question.appendChild(para);
        buildBtns(question, contact);
    };
    createElems("have a question?", "short paragraph about how easy it is to get in touch", "contact us");
};

export { buildQuestion };