import { DefaultBodyType, MockedRequest, rest, RestHandler } from "msw"
import { SetupServer, setupServer } from 'msw/node';
import { fireEvent, screen } from "@testing-library/react";

export const createTestServer = (endpoints: RestHandler<MockedRequest<DefaultBodyType>>[]): SetupServer => {
  const handlers: RestHandler<MockedRequest<DefaultBodyType>>[] = [
    rest.get('http://localhost/', (_req, res, ctx) => {
      return res(
        ctx.json({}),
      )
    }),
  ];

  return setupServer(...handlers.concat(endpoints));
}

export const sleep = (timeout?: number): Promise<void> => {
  if (!timeout) timeout = 500;
  return new Promise(r => setTimeout(r, timeout));
}

export const setInputValue = (name: string, value: any) => {
  const input = screen.getByTestId(name);
  if (!input) return;
  try {
    fireEvent.change(input, {
      detail: {
        value
      },
      target: {
        value
      }
    });
  } catch (error) {
    console.error("setInputValue", {name, value, input, error});
  }
}
