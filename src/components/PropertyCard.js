import React from 'react';
import '../styles/PropertyCard.css';
import PropTypes from 'prop-types';

function PropertyCard(props) {
    const { title, type, bathrooms, bedrooms, price, city, email } = props;

    return (
        <div className='property-card'>
            {title}
            <br />
            {type} - {city}
            <br />
            {Number(bedrooms)}
            <br />
            {Number(bathrooms)}
            <br />
            {Number(price)} bells
            <br />
            {email}
            <br />
        </div>
    );
};

PropertyCard.propTypes = {
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    bedrooms: PropTypes.number,
    bathrooms: PropTypes.number,
    price: PropTypes.number,
    email: PropTypes.string.isRequired,
};

PropertyCard.defaultProps = {
    bedrooms: 0,
    bathrooms: 0,
    price: 0,
};

export default PropertyCard;
