import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Search from "./search";

test("renders search component", () => {
  const { getByText, getByRole } = render(<Search />);
  const input = getByRole("textbox");
  const button = getByText("Search");

  // number of test cases
  fireEvent.change(input, {
    target: { value: "Guardians of the Galaxy Vol. 2" }
  });
  fireEvent.click(button);

  // writing the assertions based on expected behavior
  expect(input.value).toBe("Guardians of the Galaxy Vol. 2");
});
