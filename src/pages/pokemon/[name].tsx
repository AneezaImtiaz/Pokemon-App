import React, { useState, useEffect } from 'react';
import { usePokemonsDetail } from '../../hooks';
import { useRouter } from 'next/router';
import { Container } from '../../styles/globals';
import { Loader, MessageDialog } from '../../components';
import { ERROR_DIALOG, TRY_AGAIN, CLOSE } from '../../utils/Constants';

const Pokemon : React.FC = () => {
  const router = useRouter();
  const pokemon = router.query.name as string; // Type assertion

  const { data, error, isLoading, refetch } = usePokemonsDetail(pokemon);
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
    </Container>
  );


};

export default Pokemon;