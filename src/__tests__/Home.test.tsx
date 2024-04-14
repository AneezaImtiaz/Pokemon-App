import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Home from '../pages/index';
import { usePokemonTypes } from '../hooks/usePokemonTypes';
import { ERROR_DIALOG, TYPE_OF_POCEMONS, SEARCH } from '../utils/Constants';

// Mock the hook
jest.mock('../hooks/usePokemonTypes', () => ({
  usePokemonTypes: jest.fn(),
}));

const mockPokemonTypesData = [
  { name: 'Fire', url: '/api/v2/type/10/' },
  { name: 'Water', url: '/api/v2/type/11/' },
];

beforeEach(() => {
  (usePokemonTypes as jest.Mock).mockReturnValue({
    data: mockPokemonTypesData,
    error: null,
    isLoading: false,
    refetch: jest.fn(),
  });
});

test('renders the loader when data is loading', () => {
  (usePokemonTypes as jest.Mock).mockReturnValue({
    isLoading: true,
  });
  render(<Home />);
  expect(screen.getByTestId('loader')).toBeInTheDocument();
});

test('renders error dialog when there is an error', async () => {
  (usePokemonTypes as jest.Mock).mockReturnValue({
    error: new Error('Network error'),
    isLoading: false,
    data: null,
    refetch: jest.fn(),
  });
  render(<Home />);
  await waitFor(() => screen.getByText(ERROR_DIALOG.description));
  expect(screen.getByText(ERROR_DIALOG.description)).toBeInTheDocument();
});

test('renders Search and CardList components when data is successfully fetched', () => {
  render(<Home />);
  expect(screen.getByPlaceholderText(`${SEARCH} type here...`)).toBeInTheDocument();
  expect(screen.getByText(TYPE_OF_POCEMONS)).toBeInTheDocument();
  expect(screen.getByText('Fire')).toBeInTheDocument();
  expect(screen.getByText('Water')).toBeInTheDocument();
});

test('filters the CardList based on the search term', async () => {
  render(<Home />);
  fireEvent.change(screen.getByPlaceholderText(`${SEARCH} type here...`), {
    target: { value: 'Fire' },
  });
  fireEvent.click(screen.getByRole('button', { name: 'Search' }));

  await waitFor(() => {
    expect(screen.getByText('Fire')).toBeInTheDocument();
    expect(screen.queryByText('Water')).not.toBeInTheDocument();
  });
});
