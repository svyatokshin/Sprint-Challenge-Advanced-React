import React from 'react';
import { render, getByTestId } from '@testing-library/react';
import Cards from './Cards';

test(' Cards are being rendered on screen ', () => {
    const {getByTestId} = render(<Cards />);
    getByTestId(/card-render/i);
})