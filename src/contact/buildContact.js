const buildContact = () => {
    const content = document.getElementById("content");
    content.insertAdjacentHTML("afterend", `
                                            <main>
                                                <div id="grid"></div>
                                            </main>
                                            `
                                            );
    const grid = document.getElementById("grid");
    grid.innerHTML = `
                    <div id="contact-title">
                        <h1>contact</h1>
                    </div>

                    <div id="action">
                        <button type="button" id="reserve">reserve</button>
                    </div>

                    <div id="information">
                        <div id="address"></div>

                        <div id="fields"></div>
                    </div>
                    `;
    const adrs = document.getElementById("address");
    adrs.innerHTML = `
                    <h2>our details</h2>

                    <address>
                        ADDRESS LINE 1<br>
                        ADDRESS LINE 2<br>
                        TOWN/CITY<br>
                        POSTCODE<br>
                        COUNTRY
                    </address>

                    <address>
                        CONTACT NUMBER<br>
                        EMAIL ADDRESS
                    </address>
                    `;
    const fields = document.getElementById("fields");
    fields.innerHTML = `
                        <h2>leave a message</h2>

                        <form>
                            <fieldset>
                                <div>
                                    <label>first name</label>
                                    <input type="text">
                                </div>

                                <div>
                                    <label>last name</label>
                                    <input type="text">
                                </div>
                            </fieldset>

                            <fieldset>
                                <div>
                                    <label>email</label>
                                    <input type="email">
                                </div>
                            </fieldset>

                            <fieldset>
                                <div>
                                    <label>message</label>
                                    <textarea></textarea>
                                </div>
                            </fieldset>

                            <div>
                                <button type="submit" id="">submit</button>
                            </div>
                        </form>
                       `;
};
export { buildContact };