import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import PrevArrow from "./index";

describe("Test PrevArrow", () => {
  it("Tests if the PrevArrow is rendered correctly", () => {
    const onClickTest = () => {};
    const styleTest = {};
    const classNameTest = "test";
    const { getByText, getByRole, getAllByTestId } = render(
      <PrevArrow
        className={classNameTest}
        style={styleTest}
        onClick={onClickTest}
      />
    );
  });
});
