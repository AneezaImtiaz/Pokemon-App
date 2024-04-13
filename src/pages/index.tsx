import React, { useState, useEffect } from 'react';
import { usePokemonTypes } from '../hooks';
import { Container } from '../styles/globals';
import { Loader, MessageDialog, CardList } from '../components';
import { ERROR_DIALOG, TRY_AGAIN, CLOSE, TYPE_OF_POCEMONS } from '../utils/Constants';

const Home: React.FC = () => {
  const { data: pokemonCategories, error, isLoading, refetch } = usePokemonTypes();
  const [showErrorDialog, setShowErrorDialog] = useState<boolean>(false);

  const renderErrorConnectionDialog = () => {
    return (
      <MessageDialog
        isVisible={showErrorDialog}
        title={ERROR_DIALOG.title}
        description={ERROR_DIALOG.description}
        button={TRY_AGAIN}
        closeButton={CLOSE}
        onCloseButtonClick={() => setShowErrorDialog(false)}
        onButtonClick={() => { setShowErrorDialog(false); refetch(); }}
      />
    );
  };

  useEffect(() => {
    if (error) {
      setShowErrorDialog(true);
    }
  }, [error]);

  return (
    <Container>
      <Loader isVisible={isLoading} />
      {renderErrorConnectionDialog()}  
      {pokemonCategories &&  
       <CardList title={TYPE_OF_POCEMONS} list={pokemonCategories} link={'category'} />
       }
    </Container>
  );
}

export default Home;
