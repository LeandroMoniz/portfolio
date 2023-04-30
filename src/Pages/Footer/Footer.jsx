import React from "react";

import { FooterStyle } from "./FooterStyle";

const Footer = () => {
  return (
    <FooterStyle>
      <p>
        Site desenvolvido por{" "}
        <a
          href="https://www.linkedin.com/in/leandrogalhardomoniz"
          target="_blank"
          rel="noreferrer"
        >
          Leandro Moniz
        </a>
      </p>
    </FooterStyle>
  );
};

export default Footer;
