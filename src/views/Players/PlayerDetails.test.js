import { screen, render } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router';
import PlayerDetails from './PlayerDetails'


it ('should render the Players list', async () => {
    render(
        <MemoryRouter initialEntries={['/players/1']}>
            <Route path='/players/:id' component={PlayerDetails}/>

        </MemoryRouter>
    );

    screen.getByText('Loading Player...')
    const player = await screen.findByText('Ben E. Jetts', {exact: false})
    expect(player).toBeInTheDocument();
});