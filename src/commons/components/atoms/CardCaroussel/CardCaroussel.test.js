import { getAllByTestId, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import CardCaroussel from "./index";
import { treatTitle } from "../../../helpers/utils/functions";

describe("Test CardCaroussel", () => {
  it("Tests if the card is rendered correctly", () => {
    const testMediaTitle = "Titulo de teste";
    const testMediaLink =
      "https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmFuZG9tfGVufDB8fDB8fA%3D%3D&w=1000&q=80";
    const testContentTitle = "Titulo de teste do conteúdo";
    const testContentText = "Oi titulo de teste";
    const testLink = "https://www.google.com/";
    const testRank = 1;
    const { getByText, getByRole, getAllByTestId } = render(
      <CardCaroussel
        CardMediaTitle={testMediaTitle}
        CardMediaLink={testMediaLink}
        ContentTitle={testContentTitle}
        ContentText={testContentText}
        link={testLink}
        rank={testRank}
      />
    );

    const tituloMedia = getByText(testMediaTitle);
    const tituloConteudo = getByText(treatTitle(testContentTitle));
    const texto = getByText(testContentText);
    const link = getByRole("link");
    const rank = getAllByTestId("StarIcon")[0];

    expect(tituloMedia).toBeInTheDocument();
    expect(texto).toBeInTheDocument();
    expect(link).toHaveAttribute('href', testLink);
    expect(rank).toBeInTheDocument();
    expect(tituloConteudo).toBeInTheDocument();
  });
});
