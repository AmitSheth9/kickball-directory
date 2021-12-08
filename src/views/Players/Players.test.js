import { screen, render } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router';
import Players from './Players'

it ('should render the Players list', async () => {
    render(
        <MemoryRouter >
            <Route component={Players}/>

        </MemoryRouter>
    );

    screen.getByText('Loading...')
    const player = await screen.findByText('Bud E. Guy', {exact: false})
    expect(player).toBeInTheDocument();
});