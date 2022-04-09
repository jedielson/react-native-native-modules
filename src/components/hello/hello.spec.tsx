import React from 'react';
import { render } from '@testing-library/react-native';
import { Hello } from '.';

describe('Hello Component', () => {
    it('renders the correct button', () => {
        const { queryByText } = render(<Hello />);
        expect(queryByText('Click Me')).not.toBeNull();
    });
});