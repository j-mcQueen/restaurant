const buildHeader = () => {
    const content = document.getElementById("content");
    content.innerHTML = `
                        <header>
                            <nav>
                                <div id="logo"></div>
                                <div id="wrapper"></div>
                            </nav>
                        </header>
                        `;
    const logo = document.getElementById("logo");
    logo.innerHTML = `
                    <a id = "home">
                        <p>s w + r d</p>
                    </a>
                    `;
    const wrapper = document.getElementById("wrapper");
    wrapper.innerHTML = `
                        <ul>
                            <li>
                                <a id="about">about</a>
                            </li>

                            <li>
                                <a id="menus">menus</a>
                            </li>

                            <li>
                                <a id="contact">contact</a>
                            </li>

                            <li>
                                <a id="reserve">reserve</a>
                            </li>
                        </ul>
                        `;
};

export { buildHeader };