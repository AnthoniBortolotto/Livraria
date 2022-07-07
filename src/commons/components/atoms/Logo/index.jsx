import React from "react";
import Link from "next/link";

function Logo() {
  return (
    <div>
      <Link href="/">
        <a>
          <img src="/logo.png" alt="logo" width={50} height={50} />
        </a>
      </Link>
    </div>
  );
}

export default Logo;
