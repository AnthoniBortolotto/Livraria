/* eslint-disable react/jsx-no-useless-fragment */
import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useRouter } from "next/router";
import Caroussel from "../../atoms/Caroussel";

const items = [
  {
    img: "campeoes_venda",
    alt: "Clique aqui para acessar as ofertas dos campeões de venda",
    link: "https://www.saraiva.com.br/",
  },
  {
    img: "desconto",
    alt: "Clique aqui para acessar os descontos",
    link: "https://www.saraiva.com.br/",
  },
  {
    img: "dia_mundial_livro",
    alt: "Clique aqui para acessar as ofertas do dia mundial do livro",
    link: "https://www.saraiva.com.br/",
  },
];

function CarousselHomeDisplay() {
  const { push } = useRouter();
  const isMobile = useMediaQuery("(max-width:600px)");
  return (
    <>
      {isMobile ? (
        <Caroussel>
          {items.map(({ alt, link, img }) => (
            <div key={alt} onClick={() => push(link)}>
              <img src={`${img}-Mob.png`} alt={alt} />
            </div>
          ))}
        </Caroussel>
      ) : (
        <Caroussel>
          {items.map(({ alt, link, img }) => (
            <div key={alt} onClick={() => push(link)}>
              <img src={`${img}.png`} alt={alt} />
            </div>
          ))}
        </Caroussel>
      )}
    </>
  );
}

export default CarousselHomeDisplay;
