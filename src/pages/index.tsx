import React, { useState, useEffect } from 'react';
import { usePokemonTypes } from '../hooks';
import { Container } from '../styles/globals';
import { PokemonList, Loader, MessageDialog } from '../components';
import { ERROR_DIALOG, TRY_AGAIN, CLOSE } from '../utils/Constants';

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
        <PokemonList
          pokemonCategories={pokemonCategories}
        />
      }
    </Container>
  );
}

export default Home;
