import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

import { userService,alertService } from 'services'

import React, { useState } from 'react';
import Link from 'next/dist/client/link';
import formStyles from '../../styles/Form.module.css';
import Form from '../Form';

export { AddForm };

const AddForm = (props) => {
    //input only accepts number
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

    ///!!!
    const user = props?.user;
    const isAddMode = !user;
    const router = useRouter();

    //form validation
    const validationSchema = Yup.object().shape({
        name: Yup.string().required('Name is required'),
        id: Yup.string().required('ID is required'),
        latitude: Yup.string().required('Latitude is required'),
        longitude: Yup.string().required('Longitude is invalid'),
        type: Yup.string().required('Type is required'),
        ip: Yup.string().required('IP is required'),
    });
    const formOptions = { resolver: yupResolver(validationSchema) };

    // set default form values if in edit mode
    if (!isAddMode) {
        const { ...defaultValues } = user;
        formOptions.defaultValues = defaultValues;
    }

    // get functions to build form with useForm() hook
    const { register, handleSubmit, reset, formState } = useForm(formOptions);
    const { errors } = formState;

    function onSubmit(data) {
        return isAddMode ? createUser(data) : updateUser(user.id, data);
    }

    function createUser(data) {
        return userService
            .create(data)
            .then(() => {
                alertService.success('User added', {
                    keepAfterRouteChange: true,
                });
                router.push('.');
            })
            .catch(alertService.error);
    }

    function updateUser(id, data) {
        return userService
            .update(id, data)
            .then(() => {
                alertService.success('User updated', {
                    keepAfterRouteChange: true,
                });
                router.push('..');
            })
            .catch(alertService.error);
    }

    return (
        <div className={formStyles.container}>
            <div>
                <form
                    action="http://localhost:3008/"
                    method="post"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <h5>{isAddMode ? 'ADD A' : 'EDIT ADD A'}</h5>
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
                            <Link href="/users">
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
