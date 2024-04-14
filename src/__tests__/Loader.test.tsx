import React from 'react';
import { render, screen } from '@testing-library/react';
import { Loader } from '../components';

describe('Loader Component', () => {
    it('renders when isVisible is true', () => {
        render(<Loader isVisible={true} />);
        expect(screen.getByTestId('loader')).toBeInTheDocument();
    });

    it('does not render when isVisible is false', () => {
        const { container } = render(<Loader isVisible={false} />);
        expect(container.firstChild).toBeNull();
    });
});
