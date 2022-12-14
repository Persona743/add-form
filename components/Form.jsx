import formStyles from '../styles/Form.module.css';

const Form = () => {
    return (
        <>
            <div>
                <form action="http://localhost:3008/" method="post">
                    <h5>ADD B</h5>
                    <br />
                    <fieldset>
                        <div className={formStyles.group}>
                            <label>A Name</label>
                            <input type="text" name="a-name" required />
                        </div>
                        <div className={formStyles.group}>
                            <label>Code</label>
                            <input type="text" name="code" required />
                        </div>
                        <div className={formStyles.group}>
                            <label>ID</label>
                            <input type="text" name="id" required />
                        </div>
                        <div className={formStyles.group}>
                            <label>Population</label>
                            <input type="text" name="Population" required />
                        </div>
                        <div className={formStyles.group}>
                            <label>Type</label>
                            <select name="type">
                                <option disabled selected value>
                                    Unknown
                                </option>
                                <option value="1">ITEM 01</option>
                                <option value="2">ITEM 02</option>
                                <option value="3">ITEM 03</option>
                                <option value="4">ITEM 04</option>
                                <option value="5">ITEM 05</option>
                            </select>
                        </div>

                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />

                        <div className={formStyles.group}>
                            <button type="button">TABLE</button>
                            <button type="submit">ADD</button>
                        </div>
                    </fieldset>
                </form>
            </div>
            <div>
                <form action="http://localhost:3008/" method="post">
                    <h5>ADD C</h5>
                    <br />
                    <fieldset>
                        <div className={formStyles.group}>
                            <label>A Name</label>
                            <input type="text" name="a-name" required />
                        </div>
                        <div className={formStyles.group}>
                            <label>Code</label>
                            <input type="text" name="code" required />
                        </div>
                        <div className={formStyles.group}>
                            <label>ID</label>
                            <input type="text" name="id" required />
                        </div>
                        <div className={formStyles.group}>
                            <label>Linked Itel</label>
                            <input
                                type="text"
                                name="linked-item"
                                placeholder="A 023"
                                required
                            />
                        </div>
                        <div className={formStyles.group}>
                            <label>Country</label>
                            <select name="type">
                                <option disabled selected value>
                                    Select Country
                                </option>
                                <option value="1">Iran</option>
                                <option value="2">canada</option>
                                <option value="3">Germany</option>
                                <option value="4">Belgium</option>
                                <option value="5">U.S</option>
                            </select>
                        </div>
                        <div className={formStyles.group1}>
                            <label>City</label>
                            <select name="type">
                                <option disabled selected value>
                                    Select City
                                </option>
                                <option value="1">ITEM 01</option>
                                <option value="2">ITEM 02</option>
                                <option value="3">ITEM 03</option>
                                <option value="4">ITEM 04</option>
                                <option value="5">ITEM 05</option>
                            </select>
                        </div>
                        <div className={formStyles.group1}>
                            <label>Region</label>
                            <select name="type">
                                <option disabled selected value>
                                    Select Region
                                </option>
                                <option value="1">ITEM 01</option>
                                <option value="2">ITEM 02</option>
                                <option value="3">ITEM 03</option>
                                <option value="4">ITEM 04</option>
                                <option value="5">ITEM 05</option>
                            </select>
                        </div>

                        <br />
                        <br />
                        <br />
                        <br />
                        <br />

                        <div className={formStyles.group}>
                            <button type="button">TABLE</button>
                            <button type="submit">ADD</button>
                        </div>
                    </fieldset>
                </form>
            </div>
        </>
    );
};

export default Form;
