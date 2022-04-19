import React from "react";
import { useRouter } from "next/router";
import Caroussel from "../../atoms/Caroussel";

const items = [
  {
    img: "campeoes_venda.png",
    alt: "Clique aqui para acessar as ofertas dos campeões de venda",
    link: "https://www.saraiva.com.br/",
  },
  {
    img: "desconto.png",
    alt: "Clique aqui para acessar os descontos",
    link: "https://www.saraiva.com.br/",
  },
  {
    img: "dia_mundial_livro.png",
    alt: "Clique aqui para acessar as ofertas do dia mundial do livro",
    link: "https://www.saraiva.com.br/",
  },
];

function CarousselHomeDisplay() {
  const { push } = useRouter();
  return (
    <Caroussel>
      {items.map(({ alt, link, img }) => (
        <div key={alt} onClick={() => push(link)}>
          <img src={img} alt={alt} />
        </div>
      ))}
    </Caroussel>
  );
}

export default CarousselHomeDisplay;
