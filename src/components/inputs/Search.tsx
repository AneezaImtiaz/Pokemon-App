import React, { useState } from 'react';
import { SEARCH, EMPTY_SEARCH_DIALOG, CLOSE } from '../../utils/Constants';
import { MessageDialog } from '../../components';
import { SearchContainer, SearchContent, SearchInput } from '../../styles/SearchStyles';

export type SearchProps = {
  buttonClick: ((value: string) => void);
  placeholder?: string;
};

const Search: React.FC<SearchProps> = ({ buttonClick = () => null, placeholder = `${SEARCH}...` }) => {
  const [text, setText] = useState('');
  const [showEmptyDialog, setShowEmptyDialog] = useState(false);

  const renderEmptyFieldDialog = () => {
    return (
      <MessageDialog
        isVisible={showEmptyDialog}
        title={EMPTY_SEARCH_DIALOG.title}
        description={EMPTY_SEARCH_DIALOG.description}
        button={CLOSE}
        onButtonClick={() => { setShowEmptyDialog(false); buttonClick('') }}
      />
    );
  };

  return (
    <SearchContainer>
      {renderEmptyFieldDialog()}
      <SearchContent>
        <SearchInput type="text" placeholder={placeholder} value={text} onChange={(e) => setText(e.target.value)} />
        <button onClick={() => !text ? setShowEmptyDialog(true) : buttonClick(text)}>{SEARCH}</button>
      </SearchContent>
    </SearchContainer>
  );
};
export default Search;
