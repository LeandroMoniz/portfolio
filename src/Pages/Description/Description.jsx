import React, { useEffect, useState } from "react";

// Components:
import Button from "../../assets/Components/Button/Button";

// Style
import { DescriptionStyle } from "./DescriptionStyle";

// Icons:
import { FiLinkedin, FiGithub } from "react-icons/fi";

// Images:
import me from "../../assets/img/mike-capa2.png";
import mike from "../../assets/img/leandro.png";
import Success from "../../assets/Components/Alerts/SuccessAlert";

const Description = () => {
  const [showAlert, setShowAlert] = useState(false);

  const copyToClipboard = () => {
    const copiado = "leandromoniz55@gmail.com";
    navigator.clipboard.writeText(copiado);
    setShowAlert(true);
  };

  const setFalseAlert = () => {
    setShowAlert(false);
  };

  useEffect(() => {
    setShowAlert(showAlert);
    if (showAlert === true) setTimeout(setFalseAlert, 3000);
  }, [showAlert]);

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);


  return (
    <DescriptionStyle id="home">
      <Success
        showAlert={showAlert}
        message="Copiado para área de transferência!"
      ></Success>

      <svg className="home-blob" viewBox="0 0 200 200" >
        <mask id="mask0" mask-type="alpha">
          <path
            fill="#6E57E0"
            d="M56.8,-63.1C72.9,-54.2,84.6,-35.6,86.4,-16.5C88.3,2.6,80.3,22.1,67.9,35.1C55.5,48,38.8,54.4,23.5,56.5C8.2,58.5,-5.8,56.4,-23.2,54.2C-40.7,52,-61.7,49.9,-66.8,39.4C-71.8,28.9,-60.9,10,-53.2,-5.2C-45.5,-20.3,-41,-31.9,-32.6,-42.1C-24.3,-52.3,-12.1,-61.2,4.1,-66.1C20.4,-71,40.8,-72,56.8,-63.1Z"
            transform="translate(100 100)"
          />
        </mask>
        <g mask="url(#mask0)">
          <path
            d="M56.8,-63.1C72.9,-54.2,84.6,-35.6,86.4,-16.5C88.3,2.6,80.3,22.1,67.9,35.1C55.5,48,38.8,54.4,23.5,56.5C8.2,58.5,-5.8,56.4,-23.2,54.2C-40.7,52,-61.7,49.9,-66.8,39.4C-71.8,28.9,-60.9,10,-53.2,-5.2C-45.5,-20.3,-41,-31.9,-32.6,-42.1C-24.3,-52.3,-12.1,-61.2,4.1,-66.1C20.4,-71,40.8,-72,56.8,-63.1Z"
            transform="translate(100 100)"
          />
          <image
            className="home__blob-img"
            x="30"
            y="65"
            xlinkHref={isHovered ? me: mike }
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            alt="Minha foto."
          />
        </g>
      </svg>

      <div className="hello">
        <span>
          <h2>Olá! Sou </h2>
          <h1>
            <span>Leandro</span> Moniz
          </h1>
          <p>
            Sou um <span>desenvolvedor Full-Stack</span>, especializado em{" "}
            <span>Node.js e React</span>, capaz de criar soluções inovadoras e
            escaláveis, desde o back-end até o front-end utilizando sempre
            tecnicas de clean code.
          </p>
        </span>

        <Button className="email" onPress={copyToClipboard}>
          leandromoniz55@gmail.com
        </Button>

        <div className="social-content">
          <a
            className="social-media"
            href="https://www.linkedin.com/in/leandrogalhardomoniz/"
            target="_blank"
            rel="noreferrer"
          >
            <FiLinkedin />
          </a>

          <a
            className="social-media"
            href="https://github.com/LeandroMoniz"
            target="_blank"
            rel="noreferrer"
          >
            <FiGithub />
          </a>
        </div>
      </div>
    </DescriptionStyle>
  );
};

export default Description;
