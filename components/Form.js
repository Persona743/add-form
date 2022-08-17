// import { useRouter } from 'next/router';
// import { useState } from 'react';
// import { useForm } from 'react-hook-form';
// import { yupResolver } from '@hookform/resolvers/yup';
// import * as Yup from 'yup'

import formStyles from '../styles/Form.module.css';

const Form = () => {
    return (
        <div className={formStyles.container}>
            <div>
                <form action="http://localhost:3008/" method="post">
                    <h5>ADD A</h5>
                    <fieldset>
                        <div className={formStyles.group}>
                            <label>A Name</label>
                            <input type="text" name="a-name" required />
                        </div>
                        <div className={formStyles.group}>
                            <label>A ID</label>
                            <input type="text" name="id" required />
                        </div>
                        <div className={formStyles.group}>
                            <label>Latitude</label>
                            <input type="text" name="latitude" required />
                        </div>
                        <div className={formStyles.group}>
                            <label>Longitude</label>
                            <input type="text" name="Longitude" required />
                        </div>
                        <div className={formStyles.group}>
                            <label>A type</label>
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
                        <div className={formStyles.group}>
                            <label>A IP</label>
                            <input
                                type="text"
                                name="ip"
                                className={formStyles.seperate}
                                required
                            />
                            <input
                                type="text"
                                name="ip"
                                className={formStyles.seperate}
                                required
                            />
                            <input
                                type="text"
                                name="ip"
                                className={formStyles.seperate}
                                required
                            />
                            <input
                                type="text"
                                name="ip"
                                className={formStyles.seperate}
                                required
                            />
                        </div>
                        <div className={formStyles.group}>
                            <label>
                                <input
                                    type="radio"
                                    name="option"
                                    className={formStyles.inline}
                                />
                                Option1
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="option"
                                    className={formStyles.inline}
                                />
                                Option2
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="option"
                                    className={formStyles.inline}
                                />
                                Option3
                            </label>
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
            <div>
                <form action="http://localhost:3008/" method="post">
                    <h5>ADD B</h5>
                    <fieldset>
                        <div className={formStyles.group}>
                            <label>A Name</label>
                            <input type="text" name="a-name" required />
                        </div>
                        <div className={formStyles.group}>
                            <label>A ID</label>
                            <input type="text" name="id" required />
                        </div>
                        <div className={formStyles.group}>
                            <label>Latitude</label>
                            <input type="text" name="latitude" required />
                        </div>
                        <div className={formStyles.group}>
                            <label>Longitude</label>
                            <input type="text" name="Longitude" required />
                        </div>
                        <div className={formStyles.group}>
                            <label>A type</label>
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
                        <div className={formStyles.group}>
                            <label>A IP</label>
                            <input
                                type="text"
                                name="ip"
                                className={formStyles.seperate}
                                required
                            />
                            <input
                                type="text"
                                name="ip"
                                className={formStyles.seperate}
                                required
                            />
                            <input
                                type="text"
                                name="ip"
                                className={formStyles.seperate}
                                required
                            />
                            <input
                                type="text"
                                name="ip"
                                className={formStyles.seperate}
                                required
                            />
                        </div>
                        <div className={formStyles.group}>
                            <label>
                                <input
                                    type="radio"
                                    name="option"
                                    className={formStyles.inline}
                                />
                                Option1
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="option"
                                    className={formStyles.inline}
                                />
                                Option2
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="option"
                                    className={formStyles.inline}
                                />
                                Option3
                            </label>
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
            <div>
                <form action="http://localhost:3008/" method="post">
                    <h5>ADD C</h5>
                    <fieldset>
                        <div className={formStyles.group}>
                            <label>A Name</label>
                            <input type="text" name="a-name" required />
                        </div>
                        <div className={formStyles.group}>
                            <label>A ID</label>
                            <input type="text" name="id" required />
                        </div>
                        <div className={formStyles.group}>
                            <label>Latitude</label>
                            <input type="text" name="latitude" required />
                        </div>
                        <div className={formStyles.group}>
                            <label>Longitude</label>
                            <input type="text" name="Longitude" required />
                        </div>
                        <div className={formStyles.group}>
                            <label>A type</label>
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
                        <div className={formStyles.group}>
                            <label>A IP</label>
                            <input
                                type="text"
                                name="ip"
                                className={formStyles.seperate}
                                required
                            />
                            <input
                                type="text"
                                name="ip"
                                className={formStyles.seperate}
                                required
                            />
                            <input
                                type="text"
                                name="ip"
                                className={formStyles.seperate}
                                required
                            />
                            <input
                                type="text"
                                name="ip"
                                className={formStyles.seperate}
                                required
                            />
                        </div>
                        <div className={formStyles.group}>
                            <label>
                                <input
                                    type="radio"
                                    name="option"
                                    className={formStyles.inline}
                                />
                                Option1
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="option"
                                    className={formStyles.inline}
                                />
                                Option2
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="option"
                                    className={formStyles.inline}
                                />
                                Option3
                            </label>
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
        </div>
    );
};

export default Form;
