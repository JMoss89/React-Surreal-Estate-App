import React from 'react';
import { render, screen } from '@testing-library/react';
import PropertyCard from '../components/PropertyCard';

describe('PropertyCard', () => {
    
    test('should have a class name called property-card', () => {
        const { container } = render(<PropertyCard />);
    
        expect(container.firstChild).toHaveClass('property-card');
    });

    test('renders correctly', () => {
        const validInfo = {
            title: 'test title',
            type: 'test type',
            city: 'test city',
            bedrooms: '4',
            bathrooms: '2',
            price: '400000',
            email: 'test@test.com',
        };
        const { asFragment } = render(
            <PropertyCard 
                title={validInfo.title}
                type={validInfo.type}
                city={validInfo.city}
                bedrooms={validInfo.bedrooms}
                bathrooms={validInfo.bathrooms}
                price={validInfo.price}
                email={validInfo.email}
            />
        );
        expect (asFragment()).toMatchSnapshot();
    });
})