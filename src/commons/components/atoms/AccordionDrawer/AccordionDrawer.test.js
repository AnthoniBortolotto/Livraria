import { render } from "@testing-library/react";
import '@testing-library/jest-dom';
import AccordionDrawer from ".";

describe("Test AccordionDrawer", () => {
  it("Tests if the accordion is rendered correctly", () => {
    const testText = "Oi tudo bem?";
    const testTitle = "Oi titulo de teste";
    const { getByText } = render(
      <AccordionDrawer title={testTitle}>
        <p>{testText}</p>
      </AccordionDrawer>
    );

    const titulo = getByText(testTitle);
    const texto = getByText(testText);
    
   
    expect(titulo).toBeInTheDocument();
    expect(texto).toBeInTheDocument();
 
  });
});
