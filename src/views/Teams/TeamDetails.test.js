import { screen, render } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router';
import TeamDetails from './TeamDetails'

it ('should render the Acme USA team', async () => {
    render(
        <MemoryRouter initialEntries={['/teams/10']}>
            <Route path='/teams/:id' component={TeamDetails}/>

        </MemoryRouter>
    );
    screen.getByText('Loading team...')
    const team = await screen.findByText('Acme USA', { exact: false })
    expect(team).toBeInTheDocument();
});