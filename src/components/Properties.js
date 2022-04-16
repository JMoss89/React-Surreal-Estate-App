import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import PropertyCard from './PropertyCard';
import Alert from './Alert';


function Properties() {

  const initialState = {
    properties: [],
    alert: {
      message: "",
      isSuccess: false,
    }
  }

  const [properties, setProperties] = useState(initialState.properties);
  const [alert, setAlert] = useState(initialState.alert);

  useEffect(() => {
    async function getProperties () {
      await axios
      .get('http://localhost:4000/api/v1/PropertyListing/')
      .then(response => {
        setProperties(response.data);
      })
      .catch(() => {
        setAlert({
          message: "Oh no! It looks like your search failed! Try again later.",
          isSuccess: false
        });
      });
   }
  }, []);

  console.log(properties);

  const { search } = useLocation();

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/v1/PropertyListing/${search}`)
      .then(({ data }) => setProperties(data))
      .catch(err => console.error(err));
  }, [search]);

  return (
    <div>
      Properties Page

      <div className="alert-message">
          {alert.message && (
            <Alert
              className="properties-alert"
              message={alert.message}
              success={alert.isSuccess}
            />
          )}
      </div>

      <div className="properties-item">
          {properties.map((property) => (
            <div className="properties" key={property._id}>
              <PropertyCard
                key={property._id}
                title={property.title}
                type={property.type}
                city={property.city}
                bedrooms={Number(property.bedrooms)}
                bathrooms={Number(property.bathrooms)}
                price={Number(property.price)}
                email={property.email}
              />
            </div>
          ))}
        </div>
    </div>
  )
}

export default Properties;
