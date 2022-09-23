import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Logo from "./index";

describe("Test Logo", () => {
  it("Tests if the Logo is rendered correctly", () => {
    const { getByText, getByRole, getAllByTestId } = render(<Logo />);
  });
});
