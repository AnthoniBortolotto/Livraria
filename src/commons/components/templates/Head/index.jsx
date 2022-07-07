import React from "react";
import Head from "next/head";

function HeadHtml({title = "Home"}) {
  return (
    <Head>
      <title>{title}</title>
    </Head>
  );
}

export default HeadHtml;
