import React from 'react';
import { AlertOverlay, AlertContent, Title, AlertButtonContainer, Button } from '../../styles/MessageDialogStyles';

type MessageDialogProps = {
    title: string;
    button: string;
    isVisible: boolean;
    onButtonClick: (() => void);
    description: string;
    closeButton?: string;
    onCloseButtonClick?: (() => void);
};

const MessageDialog: React.FC<MessageDialogProps> = ({ title, description, button, isVisible = true, closeButton, onCloseButtonClick = () => null, onButtonClick = () => null, }) => {
    if (!isVisible) return null;
    return (
        <AlertOverlay>
            <AlertContent>
                <Title>{title}</Title>
                <p>{description}</p>
                <AlertButtonContainer>
                    {closeButton && <Button onClick={onCloseButtonClick}>{closeButton}</Button>}
                    <Button onClick={onButtonClick}>{button}</Button>
                </AlertButtonContainer>
            </AlertContent>
        </AlertOverlay>
    );
}

export default MessageDialog;
