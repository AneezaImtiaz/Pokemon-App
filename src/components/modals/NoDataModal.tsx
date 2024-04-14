import React from 'react';
import { ModalContainer, ModalContent, Title, Description } from '../../styles/NoDataModalStyles';

type NoDataModalProps = {
    title: string;
    description: string;
};

const NoDataModal: React.FC<NoDataModalProps> = ({ title, description }) => {
    return (
        <ModalContainer>
            <ModalContent>
                <Title>{title}</Title>
                <Description>{description}</Description>
            </ModalContent>
        </ModalContainer>
    );
};

export default NoDataModal;
