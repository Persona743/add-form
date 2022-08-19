import React, { useState } from 'react';
import Link from 'next/dist/client/link';
import formStyles from '../styles/Form.module.css';
import Form from './Form';

const AddForm = () => {
    const [inputId, setInputId] = useState();
    const [inputLat, setInputLat] = useState();
    const [inputLong, setInputLong] = useState();
    const [inputIp1, setInputIp1] = useState();
    const [inputIp2, setInputIp2] = useState();
    const [inputIp3, setInputIp3] = useState();
    const [inputIp4, setInputIp4] = useState();

    const handleChangeId = (e) => {
        setInputId(e.target.value.replace(/^\D*\.?\D*$/, ''));
    };
    const handleChangeLat = (e) => {
        setInputLat(e.target.value.replace(/^\D*\.?\D*$/, ''));
    };
    const handleChangeLong = (e) => {
        setInputLong(e.target.value.replace(/^\D*\.?\D*$/, ''));
    };
    const handleChangeIp1 = (e) => {
        setInputIp1(e.target.value.replace(/^\D*\.?\D*$/, ''));
    };
    const handleChangeIp2 = (e) => {
        setInputIp2(e.target.value.replace(/^\D*\.?\D*$/, ''));
    };
    const handleChangeIp3 = (e) => {
        setInputIp3(e.target.value.replace(/^\D*\.?\D*$/, ''));
    };
    const handleChangeIp4 = (e) => {
        setInputIp4(e.target.value.replace(/^\D*\.?\D*$/, ''));
    };

    return (
        <div className={formStyles.container}>
            <div>
                <form action="http://localhost:3008/" method="post">
                    <h5>ADD A</h5>
                    <br />
                    <fieldset>
                        <div className={formStyles.group}>
                            <label>A Name</label>
                            <input type="text" name="a-name" required />
                        </div>
                        <div className={formStyles.group}>
                            <label>A ID</label>
                            <input
                                type="text"
                                name="id"
                                pattern="[0-9]*"
                                onInput={handleChangeId}
                                value={inputId}
                                maxLength={5}
                                required
                            />
                        </div>
                        <div className={formStyles.group}>
                            <label>Latitude</label>
                            <input
                                type="text"
                                name="latitude"
                                pattern="[0-9]*"
                                onInput={handleChangeLat}
                                value={inputLat}
                                maxLength={5}
                                required
                            />
                        </div>

                        <div className={formStyles.group}>
                            <label>Longitude</label>
                            <input
                                type="text"
                                name="Longitude"
                                pattern="[0-9]*"
                                onInput={handleChangeLong}
                                value={inputLong}
                                maxLength={5}
                                required
                            />
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
                                pattern="[0-9]*"
                                onInput={handleChangeIp1}
                                value={inputIp1}
                                maxLength={2}
                                required
                            />
                            <input
                                type="text"
                                name="ip"
                                className={formStyles.seperate}
                                pattern="[0-9]*"
                                onInput={handleChangeIp2}
                                value={inputIp2}
                                maxLength={2}
                                required
                            />
                            <input
                                type="text"
                                name="ip"
                                className={formStyles.seperate}
                                pattern="[0-9]*"
                                onInput={handleChangeIp3}
                                value={inputIp3}
                                maxLength={2}
                                required
                            />
                            <input
                                type="text"
                                name="ip"
                                className={formStyles.seperate}
                                pattern="[0-9]*"
                                onInput={handleChangeIp4}
                                value={inputIp4}
                                maxLength={2}
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

                        <div className={formStyles.group}>
                            <Link href="/table">
                                <button type="button">TABLE</button>
                            </Link>
                            <button type="submit">ADD</button>
                        </div>
                    </fieldset>
                </form>
            </div>
            <Form />
        </div>
    );
};

export default AddForm;
