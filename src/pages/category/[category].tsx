import React, { useState, useEffect } from 'react';
import { usePokemons } from '../../hooks';
import { useRouter } from 'next/router';
import { Container } from '../../styles/globals';
import { Loader, MessageDialog, CardList, Search } from '../../components';
import { ERROR_DIALOG, TRY_AGAIN, CLOSE, SEARCH } from '../../utils/Constants';

const Category: React.FC = () => {
  const router = useRouter();
  const category = router.query.category as string;
  const { data: pokemons, error, isLoading, refetch } = usePokemons(category);
  const [showErrorDialog, setShowErrorDialog] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState('');

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

  const handleSearch = (term: string) => {
    setSearchTerm(term.toLowerCase());
  };

  const filteredData = pokemons?.filter(pokemon => 
    pokemon.name.toLowerCase().includes(searchTerm)
  ) || [];

  return (
    <Container>
      <Loader isVisible={isLoading} />
      {renderErrorConnectionDialog()}
      <Search buttonClick={handleSearch} placeholder={`${SEARCH} pokemon here...`} />
      {filteredData &&
        <CardList title={category} list={filteredData} link={'pokemon'} />
      }
    </Container>
  );


};

export default Category;