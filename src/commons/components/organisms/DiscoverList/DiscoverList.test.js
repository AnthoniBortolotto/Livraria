import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import DiscoverList from "./index";

describe("Test DiscoverList", () => {
  it("Tests if the DiscoverList is rendered correctly", () => {
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
