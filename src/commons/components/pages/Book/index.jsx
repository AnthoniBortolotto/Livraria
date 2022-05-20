import React, { useEffect } from "react";

export default function Book({ livro }) {
  useEffect(() => {
    console.log(livro);
  }, []);

  return <div>Book</div>;
}
