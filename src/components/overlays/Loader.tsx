import React from 'react';
import { LoaderContainer, LoaderContent } from '../../styles/LoaderStyles';

type LoaderProps = {
  isVisible: boolean;
};

const Loader: React.FC<LoaderProps> = ({ isVisible = true }) => {
  if (!isVisible) return null;
  return (
    <LoaderContainer>
      <LoaderContent data-testid="loader"/>
    </LoaderContainer>
  );
};

export default Loader;
