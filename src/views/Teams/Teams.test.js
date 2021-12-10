import { screen, render } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router';
import Teams from './Teams';

it ('should render the teams page', async () => {
    render(
        <MemoryRouter>
            <Route component={Teams} />

        </MemoryRouter>
    );
    screen.getByText('Loading...')
    const team = await screen.findByText('Alexandria Companions')
    expect(team).toBeInTheDocument();
})