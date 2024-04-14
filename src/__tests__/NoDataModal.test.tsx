import { render, screen } from '@testing-library/react';
import { NoDataModal } from '../components';

describe('NoDataModal', () => {
  it('renders the title and description', () => {
    const title = 'No Data Available';
    const description = 'There is no data to display at this moment.';

    render(<NoDataModal title={title} description={description} />);

    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByText(description)).toBeInTheDocument();
  });
});
