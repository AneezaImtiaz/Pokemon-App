import React, { useState, useEffect } from 'react';
import { usePokemons } from '../../hooks';
import { useRouter } from 'next/router';
import { Container } from '../../styles/globals';
import { Loader, MessageDialog, CardList } from '../../components';
import { ERROR_DIALOG, TRY_AGAIN, CLOSE } from '../../utils/Constants';

const Category: React.FC = () => {
  const router = useRouter();
  const category = router.query.category as string;
  const { data: pokemons, error, isLoading, refetch } = usePokemons(category);
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
      {pokemons &&
        <CardList title={category} list={pokemons} link={'pokemon'} />
      }
    </Container>
  );


};

export default Category;