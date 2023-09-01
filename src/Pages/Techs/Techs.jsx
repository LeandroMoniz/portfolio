import React from "react";

import { TechStyle } from "./TechsSyle";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import SectionTitle from "../../assets/Components/SectionTitle/SectionTitle";

import { ImHtmlFive2, ImCss3, ImGit } from "react-icons/im";
import { IoLogoJavascript, IoLogoNpm } from "react-icons/io";
import { RiReactjsLine } from "react-icons/ri";
import {
  SiStyledcomponents,
  SiTailwindcss,
  SiAngular,
  SiTypescript,
  SiNestjs,
  SiAmazonaws,
} from "react-icons/si";
import { FaNode, FaBootstrap, FaJava } from "react-icons/fa";

const Techs = (BGImage) => {
  return (
    <TechStyle id="skills">
      <SectionTitle
        subTitle={"O que eu estudo e ando me aprimorando"}
        Title={"Tecnologias"}
      />

      <section>
        <span>
          <FaNode />
          <p>Node.js</p>
        </span>

        <span>
          <SiNestjs />
          <p>Nest.js</p>
        </span>

        <span>
          <IoLogoJavascript />
          <p>JavaScript</p>
        </span>

        <span>
          <FaJava />
          <p>Java</p>
        </span>

        <span>
          <SiTypescript />
          <p>TypeScript</p>
        </span>

        <span>
          <RiReactjsLine />
          <p>React</p>
        </span>

        <span>
          <SiAngular />
          <p>Angular</p>
        </span>

        <span>
          <SiStyledcomponents />
          <p>Styled</p>
          <p>Components</p>
        </span>

        <span>
          <SiTailwindcss />
          <p>Tailwind</p>
        </span>

        <span>
          <FaBootstrap />
          <p>Bootstrap</p>
        </span>

        <span>
          <IoLogoNpm />
          <p>NPM</p>
        </span>

        <span>
          <ImGit />
          <p>Git</p>
        </span>

        <span>
          <ImHtmlFive2 />
          <p>HTML</p>
        </span>

        <span>
          <ImCss3 />
          <p>CSS</p>
        </span>

        <span>
          <SiAmazonaws />
          <p>AWS</p>
        </span>

      </section>
    </TechStyle>
  );
};

export default Techs;
