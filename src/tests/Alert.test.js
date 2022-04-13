import React from 'react';
import { render, screen } from '@testing-library/react';
import Alert from '../components/Alert';

describe('Alert', () => {

    test('Displays an error message', () => {
        render(<Alert message='Error!' />);
        const errorMessage = screen.getByText('Error!');

        expect(errorMessage).toBeInTheDocument();
    });

    test('Desplays a success message', () => {
        render(<Alert message='Success!!!' success />);
        const successMessage = screen.getByText('Success!!!');

        expect(successMessage).toBeInTheDocument();
    });

    test("does not render an error or a success message if message props is empty", () => {
        const { asFragment } = render(<Alert message="" />);
        const alert = asFragment();
      
        expect(alert).toMatchSnapshot();
    });

    test("renders an error message if server fails", () => {
        const { asFragment } = render(<Alert message="Error!" />);
      
        expect(asFragment()).toMatchSnapshot();
    });
})
