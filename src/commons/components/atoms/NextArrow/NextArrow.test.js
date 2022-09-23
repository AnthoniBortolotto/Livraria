import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import NextArrow from "./index";

describe("Test NextArrow", () => {
  it("Tests if the NextArrow is rendered correctly", () => {
    const onClickTest = () => {};
    const styleTest = {};
    const classNameTest = "test";
    const { getByText, getByRole, getAllByTestId } = render(
      <NextArrow
        className={classNameTest}
        style={styleTest}
        onClick={onClickTest}
      />
    );
  });
});
