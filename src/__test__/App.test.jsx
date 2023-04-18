import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import App from '../App';
import { createTestServer } from "../shared/func-test";

const server = createTestServer([]);

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

test('App Component', async () => {
  render(<App />)
  expect(await screen.findByRole("document")).toBeInTheDocument();  
});
