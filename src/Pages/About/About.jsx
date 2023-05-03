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
            Profissional com vasta experiência em Manutenção e Automação
            Industrial, onde atuei por 17 anos. Durante esse período, desenvolvi
            habilidades em gerenciamento de projetos, resolução de problemas e
            trabalho em equipe. <br />
            Em busca de novos desafios e motivado pela paixão pela tecnologia,
            fiz uma transição de carreira para a área de Desenvolvimento Web. <br />
            Atualmente, possuo 10 meses de experiência em desenvolvimento de
            software em Back End “Node.js, Typescript, Javascript, Nest e PHP
            Laravel”, Front End , <span>React</span> e angular ", Cloud "AWS”, Teste de
            software e estou em constante aprimoramento. Se você estiver
            procurando por alguém com uma sólida experiência resolução de
            problema e trabalho em equipe, combinada com habilidades de
            desenvolvimento de software, estou disponível para conversar e
            discutir como podemos trabalhar juntos para atingir seus objetivos
            de negócios.
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
