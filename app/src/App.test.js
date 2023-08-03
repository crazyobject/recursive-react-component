import { render, screen } from '@testing-library/react';
import App from './App';

describe("FilterDate", () => {

it('should render app successfully', () => {
  render(<App />);
  const linkElement = screen.getByText(/Project Explorer/i);
  expect(linkElement).toBeInTheDocument();
});

it("app should match the snappshot",()=>{
  const fragment = render(<App/>);
  expect(fragment).toMatchSnapshot();
})

});