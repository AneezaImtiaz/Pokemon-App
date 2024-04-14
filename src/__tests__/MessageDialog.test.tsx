import { render, fireEvent, screen } from '@testing-library/react';
import { MessageDialog } from '../components';

describe('MessageDialog', () => {
    it('renders the dialog with the correct content when visible', () => {
        render(
            <MessageDialog
                title="Test Title"
                description="Test Description"
                button="Confirm"
                isVisible
                onButtonClick={() => { }}
            />
        );

        expect(screen.getByText('Test Title')).toBeInTheDocument();
        expect(screen.getByText('Test Description')).toBeInTheDocument();
        expect(screen.getByRole('button', { name: 'Confirm' })).toBeInTheDocument();
    });

    it('does not render the dialog when not visible', () => {
        const { container } = render(
            <MessageDialog
                title="Test Title"
                description="Test Description"
                button="Confirm"
                isVisible={false}
                onButtonClick={() => { }}
            />
        );

        expect(container).toBeEmptyDOMElement();
    });

    it('calls the onButtonClick when the button is clicked', () => {
        const onButtonClickMock = jest.fn();
        render(
            <MessageDialog
                title="Test Title"
                description="Test Description"
                button="Confirm"
                isVisible
                onButtonClick={onButtonClickMock}
            />
        );

        fireEvent.click(screen.getByRole('button', { name: 'Confirm' }));
        expect(onButtonClickMock).toHaveBeenCalled();
    });

    it('renders the close button when provided and calls onCloseButtonClick when clicked', () => {
        const onCloseButtonClickMock = jest.fn();
        render(
            <MessageDialog
                title="Test Title"
                description="Test Description"
                button="Confirm"
                closeButton="Close"
                isVisible
                onButtonClick={() => { }}
                onCloseButtonClick={onCloseButtonClickMock}
            />
        );

        expect(screen.getByRole('button', { name: 'Close' })).toBeInTheDocument();
        fireEvent.click(screen.getByRole('button', { name: 'Close' }));
        expect(onCloseButtonClickMock).toHaveBeenCalled();
    });
});
