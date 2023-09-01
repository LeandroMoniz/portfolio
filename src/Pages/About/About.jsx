import React from "react";
import { AboutStyle } from "./AboutStyle";

import Button from "../../assets/Components/Button/Button";

import SectionTitle from "../../assets/Components/SectionTitle/SectionTitle";

import video from "../../assets/img/matrix.mp4";
import mask from "../../assets/img/mask_one.png";
import CV from "../../assets/LEANDRO_MONIZ.pdf";

const About = () => {
  return (
    <AboutStyle id="about">
      <SectionTitle subTitle={"Um pouco mais sobre mim"} Title={"Sobre"} />

      <section>
        <div className="video">
          <video
            src={video}
            autoPlay
            loop
            muted
            type="mp4"
            alt="video of hands developing a program"
          ></video>
          <img src={mask} alt="mask for the video" />
        </div>

        <div className="content">
          <h2>Um pouco da minha carreira?</h2>
          <p>
            Como desenvolvedor Full Stack meu foco é promover soluções criativas e inovadoras na área de
            desenvolvimento de sistemas.<br /> Formado em engenharia e cursando Pós-graduação em
            desenvolvimento Full Stack, trabalhei em várias empresas como desenvolvedor utilizando as
            melhores ferramentas do mercado, tais como Typescript, React.js, Node.js, Angular, Figma e
            muitas outras.<br /> Tenho facilidade em trabalhar em equipe e flexibilidade a me adaptar com as novas
            necessidades e demandas do mercado. <br /> Meu objetivo profissional é trabalhar em projetos de alta
            tecnologia contribuindo para o crescimento e desenvolvimento da empresa como um todo.
          </p>

          <a href={CV} target="_blank" rel="noreferrer">
            <Button>Download C.V</Button>
          </a>
        </div>
      </section>
    </AboutStyle>
  );
};

export default About;
