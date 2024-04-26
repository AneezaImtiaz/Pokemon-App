import React, { useState, useEffect } from 'react';
import { usePokemonTypes } from '../hooks';
import { Container } from '../styles/globals';
import { Loader, MessageDialog, CardList, Search } from '../components';
import { ERROR_DIALOG, TRY_AGAIN, CLOSE, TYPE_OF_POCEMONS, SEARCH } from '../utils/Constants';

const Home: React.FC = () => {
  const { data: pokemonCategories, error, isLoading, refetch } = usePokemonTypes();
  const [showErrorDialog, setShowErrorDialog] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState('');

  const renderErrorConnectionDialog = () => {
    return (
      <MessageDialog
        isVisible={showErrorDialog && !isLoading}
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

  const handleSearch = (term: string) => {
    setSearchTerm(term.toLowerCase());
  };

  const filteredData = pokemonCategories?.filter(category => 
    category.name.toLowerCase().includes(searchTerm)
  ) || [];

  return (
    <Container>
      <Loader isVisible={isLoading} />
      {renderErrorConnectionDialog()} 
      <Search buttonClick={handleSearch} placeholder={`${SEARCH} type here...`} /> 
      {filteredData.length &&  
       <CardList title={TYPE_OF_POCEMONS} list={filteredData} link={'category'} />
       }
    </Container>
  );
}

export default Home;
