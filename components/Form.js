// import { useRouter } from 'next/router';
// import { useState } from 'react';
// import { useForm } from 'react-hook-form';
// import { yupResolver } from '@hookform/resolvers/yup';
// import * as Yup from 'yup'

import React, { Component } from 'react';

import formStyles from '../styles/Form.module.css';
class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            lat: '',
            long: '',
            ip1: '',
            ip2: '',
            ip3: '',
            ip4: '',
        };
        this.handleChangeId = this.handleChangeId.bind(this);
        this.handleChangeLat = this.handleChangeLat.bind(this);
        this.handleChangeLong = this.handleChangeLong.bind(this);
        this.handleChangeIp1 = this.handleChangeIp1.bind(this);
        this.handleChangeIp2 = this.handleChangeIp2.bind(this);
        this.handleChangeIp3 = this.handleChangeIp3.bind(this);
        this.handleChangeIp4 = this.handleChangeIp4.bind(this);
    }

    handleChangeId(event) {
        this.setState({
            id: event.target.value.replace(/\D.\D/, ''),
        });
        event.preventDefault();
    }

    handleChangeLat(event) {
        this.setState({
            lat: event.target.value.replace(/\D.\D/, ''),
        });
        event.preventDefault();
    }

    handleChangeLong(event) {
        this.setState({
            long: event.target.value.replace(/\D.\D/, ''),
        });
        event.preventDefault();
    }

    handleChangeIp1(event) {
        this.setState({
            ip1: event.target.value.replace(/\D.\D/, ''),
        });
        event.preventDefault();
    }

    handleChangeIp2(event) {
        this.setState({
            ip2: event.target.value.replace(/\D/, ''),
        });
        event.preventDefault();
    }

    handleChangeIp3(event) {
        this.setState({
            ip3: event.target.value.replace(/\D/, ''),
        });
        event.preventDefault();
    }

    handleChangeIp4(event) {
        this.setState({
            ip4: event.target.value.replace(/\D/, ''),
        });
        event.preventDefault();
    }

    render() {
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
                                    onInput={this.handleChangeId}
                                    value={this.state.id}
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
                                    onInput={this.handleChangeLat}
                                    value={this.state.lat}
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
                                    onInput={this.handleChangeLong}
                                    value={this.state.long}
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
                                    onInput={this.handleChangeIp1}
                                    value={this.state.ip1}
                                    maxLength={2}
                                    required
                                />
                                <input
                                    type="text"
                                    name="ip"
                                    className={formStyles.seperate}
                                    pattern="[0-9]*"
                                    onInput={this.handleChangeIp2}
                                    value={this.state.ip2}
                                    maxLength={2}
                                    required
                                />
                                <input
                                    type="text"
                                    name="ip"
                                    className={formStyles.seperate}
                                    pattern="[0-9]*"
                                    onInput={this.handleChangeIp3}
                                    value={this.state.ip3}
                                    maxLength={2}
                                    required
                                />
                                <input
                                    type="text"
                                    name="ip"
                                    className={formStyles.seperate}
                                    pattern="[0-9]*"
                                    onInput={this.handleChangeIp4}
                                    value={this.state.ip4}
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
                                <button type="button">TABLE</button>
                                <button type="submit">ADD</button>
                            </div>
                        </fieldset>
                    </form>
                </div>
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
            </div>
        );
    }
}

export default Form;
