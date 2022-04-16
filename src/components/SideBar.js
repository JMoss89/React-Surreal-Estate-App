import React from 'react';
import '../styles/SideBar.css';
import { Link, useLocation } from "react-router-dom";
import qs from 'qs';

function SideBar() {

    const buildQueryString = (operation, valueObj) => {
        
        const { search } = useLocation;
        const currentQueryParams = qs.parse(search, { ignoreQueryPrefix: true });
        const newQueryParams = {
            ...currentQueryParams,
            [operation]: JSON.stringify(valueObj)
        };
        return qs.stringify(newQueryParams, { addQueryPrefix: true, encode: false });
    }

    return (
        <div>
        <Link to={buildQueryString('query', { city: 'Exeter' })}>Exeter</Link>
        <Link to={buildQueryString('sort', { price: -1 })}>Price Descending</Link>
        </div>
    )
};

export default SideBar;
