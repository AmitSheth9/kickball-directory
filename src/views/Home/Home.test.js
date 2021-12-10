import { render, screen } from "@testing-library/react";
import Home from "./Home";

it('should render Home', () => {
    const {container} = render(<Home />)

    expect(container).toMatchSnapshot();
});