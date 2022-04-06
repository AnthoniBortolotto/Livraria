import React from "react";
import Link from "next/link";

function Logo() {
  return (
    <div>
      <Link href="/" passHref>
        <img
          src="https://cdn.icon-icons.com/icons2/2622/PNG/512/book_icon_158035.png"
          alt="logo"
          width={50}
          height={50}
        />
      </Link>
    </div>
  );
}

export default Logo;