import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import FilterDrawer from "./index";

describe("Test CardCaroussel", () => {
  it("Tests if the card is rendered correctly", () => {
    const itemTest = [
      {
        genres: "algo",
      },
    ];
    const setItem = (item) => {};
    const { getByText, getByRole, getAllByTestId } = render(
      <FilterDrawer items={itemTest} setItems={setItem} />
    );
  });
});
