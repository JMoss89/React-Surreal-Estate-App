import React, { useState } from 'react';
import '../styles/AddProperty.css';
import axios from 'axios';

function AddProperty() {
    const initialState = {
        fields: {
            title: '',
            city: 'Manchester',
            type: '',
            bedrooms: '',
            bathrooms: '',
            price: '',
            email: ''
        },
        alert: {
            message: '',
            isSuccess: false
        }
    }
    const [fields, setFields] = useState(initialState.fields);
    
    const handleAddProperty = (event) => {
        event.preventDefault(); // ***
        axios
            .post('http://localhost:4000/api/v1/PropertyListing', {
                title: fields.title,
                type: fields.type,
                bedrooms: Number(fields.bedrooms),
                bathrooms: Number(fields.bathrooms),
                price: Number(fields.price),
                city: fields.city,
                email: fields.email,
            })
    }

    const handleFieldChange = (event) => {
        setFields({...fields, [event.target.name]: event.target.value});
    } 
    // onSubmit and onClick
    return (
        <div className='AddProperty'>
            <form onSubmit={handleAddProperty}> 

                <div>
                    <label htmlFor='title'>
                        <p>Title</p>
                        <input 
                            type='text'
                            id='title' 
                            name='title' 
                            value={fields.title} 
                            onChange={handleFieldChange} 
                            placeholder='Name'
                        />
                    </label>
                </div>

                <div>
                    <label htmlFor='type'>
                        <p> Type of Property </p>
                        <select
                        type='text'
                        id='type'
                        name='type'
                        value={fields.type}
                        onChange={handleFieldChange}
                        placeholder='Type'
                        >
                            <option> --Choose A Property Type-- </option>
                            <option value="Flat"> Flat </option>
                            <option value="Detached"> Detached </option>
                            <option value="Semi-Detached"> Semi-Detached </option>
                            <option value="Terraced"> Terraced </option>
                            <option value="End of Terrace"> End of Terrace </option>
                            <option value="Cottage"> Cottage </option>
                            <option value="Bungalow"> Bungalow </option>
                        </select>
                    </label>
                </div>

                <div>
                    <label htmlFor='bedrooms'>
                        <p> Number of Bedrooms </p>
                        <input
                            type='text'
                            id='bedrooms'
                            name='bedrooms'
                            value={fields.bedrooms}
                            onChange={handleFieldChange}
                            placeholder='Number of Bedrooms'
                        />
                    </label>
                </div>

                <div>
                    <label htmlFor='bathrooms'>
                        <p>Number of Bathrooms</p>
                        <input 
                            type='text'
                            id='bathrooms'
                            name='bathrooms'
                            value={fields.bathrooms}
                            onChange={handleFieldChange}
                            placeholder='Number of Bathrooms'
                        />
                    </label>
                </div>

                <div>
                    <label htmlFor='price'>
                        <p>Property Price</p>
                        <input 
                            type='text'
                            id='price'
                            name='price'
                            value={fields.price}
                            onChange={handleFieldChange}
                            placeholder='Property Price'
                        />
                    </label>
                </div>

                <div>
                    <label htmlFor='city'>
                        <p>Property Location</p>
                        <select type='text' id='city' name='city' value={fields.city} onChange={handleFieldChange} placeholder='Location'>
                            <option> --Choose a Location-- </option>
                            <option value='London'>London</option>
                            <option value='Leeds'>Leeds</option>
                            <option value='Sheffield'>Sheffield</option>
                            <option value='Liverpool'>Liverpool</option> 
                            <option value='Brighton'>Brighton</option>
                        </select>
                    </label>
                </div>

                <div>
                    <label htmlFor='email'>
                        <p>Email Address</p>
                        <input 
                            type='text'
                            id='email'
                            name='email'
                            value={fields.email}
                            onChange={handleFieldChange}
                            placeholder='Email Address'
                        />
                    </label>
                </div>

                <button type='submit' onClick={handleAddProperty}>Add Property</button>
            </form>
        </div>
    )
}

export default AddProperty;
