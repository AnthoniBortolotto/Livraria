import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import FilterDrawer from "./index";
import DiscoverList from "./index";

describe("Test CardCaroussel", () => {
  it("Tests if the card is rendered correctly", () => {
    const itemTest = [
      {
        title: "algo",
        imgUrl: "",
        link: "https://www.google.com",
        genres: "algo",
        creator: "algo",
        rank: 5,
      },
    ];
    const { getByText, getByRole, getAllByTestId } = render(
      <DiscoverList items={itemTest} />
    );
  });
});
