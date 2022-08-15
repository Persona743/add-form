// import { useRouter } from 'next/router';
// import { useState } from 'react';
// import { useForm } from 'react-hook-form';
// import { yupResolver } from '@hookform/resolvers/yup';
// import * as Yup from 'yup'

import formStyles from '../styles/Form.module.css';

const Form = () => {
    return (
        <div className={formStyles.container}>
            {/* <span>ADD A</span> */}
            <div>
                <form action="http://localhost:3008/">
                    <fieldset>
                        <label>A Name</label>
                        <input type="text" name="a-name" required />
                        <label>A ID</label>
                        <input type="text" name="id" required />
                        <label>Latitude</label>
                        <input type="text" name="latitude" />
                        <label>Longitude</label>
                        <input type="text" name="Longitude" />
                        <label>A type</label>
                        <select name="type">
                            <option value="">Unknown</option>
                            <option value="1">ITEM 01</option>
                            <option value="2">ITEM 02</option>
                            <option value="3">ITEM 03</option>
                            <option value="4">ITEM 04</option>
                            <option value="5">ITEM 05</option>
                        </select>
                        <label>A IP</label>
                        <input type="text" name="ip" />
                        <input type="text" name="ip" />
                        <input type="text" name="ip" />
                        <input type="text" name="ip" />
                        <label>
                            <input
                                type="checkbox"
                                name="option1"
                                className={formStyles.inline}
                            />
                            Option 1
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                name="option2"
                                className={formStyles.inline}
                            />
                            Option 2
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                name="option3"
                                className={formStyles.inline}
                            />
                            Option 3
                        </label>
                    </fieldset>
                    <input type="submit" value="Table" />
                    <input type="submit" value="ADD" />
                </form>
            </div>
            <div>
                <form action="http://localhost:3008/">
                    <fieldset>
                        <label>A Name</label>
                        <input type="text" name="a-name" required />
                        <label>A ID</label>
                        <input type="text" name="id" required />
                        <label>Latitude</label>
                        <input type="text" name="latitude" />
                        <label>Longitude</label>
                        <input type="text" name="Longitude" />
                        <label>A type</label>
                        <select name="type">
                            <option value="">Unknown</option>
                            <option value="1">ITEM 01</option>
                            <option value="2">ITEM 02</option>
                            <option value="3">ITEM 03</option>
                            <option value="4">ITEM 04</option>
                            <option value="5">ITEM 05</option>
                        </select>
                        <label>A IP</label>
                        <input type="text" name="ip" />
                        <input type="text" name="ip" />
                        <input type="text" name="ip" />
                        <input type="text" name="ip" />
                        <label>
                            <input
                                type="checkbox"
                                name="option1"
                                className={formStyles.inline}
                            />
                            Option 1
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                name="option2"
                                className={formStyles.inline}
                            />
                            Option 2
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                name="option3"
                                className={formStyles.inline}
                            />
                            Option 3
                        </label>
                    </fieldset>
                    <input type="submit" value="Table" />
                    <input type="submit" value="ADD" />
                </form>
            </div>
            <div>
                <form action="http://localhost:3008/">
                    <fieldset>
                        <label>A Name</label>
                        <input type="text" name="a-name" required />
                        <label>A ID</label>
                        <input type="text" name="id" required />
                        <label>Latitude</label>
                        <input type="text" name="latitude" />
                        <label>Longitude</label>
                        <input type="text" name="Longitude" />
                        <label>A type</label>
                        <select name="type">
                            <option value="">Unknown</option>
                            <option value="1">ITEM 01</option>
                            <option value="2">ITEM 02</option>
                            <option value="3">ITEM 03</option>
                            <option value="4">ITEM 04</option>
                            <option value="5">ITEM 05</option>
                        </select>
                        <label>A IP</label>
                        <input type="text" name="ip" />
                        <input type="text" name="ip" />
                        <input type="text" name="ip" />
                        <input type="text" name="ip" />
                        <label>
                            <input
                                type="checkbox"
                                name="option1"
                                className={formStyles.inline}
                            />
                            Option 1
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                name="option2"
                                className={formStyles.inline}
                            />
                            Option 2
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                name="option3"
                                className={formStyles.inline}
                            />
                            Option 3
                        </label>
                    </fieldset>
                    <input type="submit" value="Table" />
                    <input type="submit" value="ADD" />
                </form>
            </div>
        </div>
    );
};

export default Form;
