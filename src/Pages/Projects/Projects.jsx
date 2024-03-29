import React, { useState } from 'react';

import { ProjectStyle } from './ProjectsStyle';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

// SectionTitle criado para o reaproveitamento de código.
import SectionTitle from '../../assets/Components/SectionTitle/SectionTitle';

// Imagens dos cards
import PortImage from '../../assets/img/portfolio.png'
import PugMike from '../../assets/img/Pug_Mike.png'
import Construction from '../../assets/img/emConstrucao.png'
import Ampla from '../../assets/img/ampla.png'

// Components:
import CardProjects from '../../assets/Components/CardProject/CardProject';

// SVGs
import BootstrapImg from '../../assets/img/bootstrap.svg'
import ReactImg from '../../assets/img/react.svg'
import NodeImg from '../../assets/img/node.svg'
import Button from '../../assets/Components/Button/Button';


const Projects = () => {

  const [busca, setBusca] = useState('');
  const [showBusca, setShowBusca] = useState('');


  const Projetos = [
    {
      id: 1,
      tech: 'React',
      Titulo: "Portfólio",
      Description: 'Meu portfolio.',
      LinkRepositorio: 'https://github.com/LeandroMoniz/portfolio',
      LinkSite: 'https://leandromoniz.netlify.app/',
      TechIcon: ReactImg,
      Image: PortImage

    },
    {
      id: 2,
      tech: 'Bootstrap',
      Titulo: "Pug Mike",
      Description: 'WebSite do pug mike',
      LinkRepositorio: 'https://github.com/LeandroMoniz/projeto_site_pug',
      LinkSite: 'https://pug-mike.netlify.app/',
      TechIcon: BootstrapImg,
      Image: PugMike

    },
    {
      id: 3,
      tech: 'Node.js',
      Titulo: "Controle de Manutenção",
      Description: 'Programa para controle de manutenção',
      LinkRepositorio: 'https://github.com/LeandroMoniz/projeto_manutencao',
      LinkSite: '',
      TechIcon: NodeImg,
      Image: Construction

    },
    {
      id: 4,
      tech: 'React',
      Titulo: "Ampla",
      Description: 'Website de empresa Ampla ergonomia',
      LinkRepositorio: 'https://github.com/LeandroMoniz/Ampla',
      LinkSite: 'https://amplaergonomia.com.br/',
      TechIcon: ReactImg,
      Image: Ampla

    },
  ]

  const buscaProjeto = Projetos.filter((projeto) => projeto.tech.includes(busca));

  return (
    <ProjectStyle id='projects'>
      <SectionTitle subTitle={"Meus trabalhos e Projetos"} Title={"Projetos"} />

      <Button
        className="buscador"
        onPress={() => setShowBusca('active')}>Buscar</Button>
      <div className={`busca ${showBusca}`}>
        <span>
          <img
            onClick={() => { setBusca('React'); setShowBusca('') }}
            className='busca_button'
            src={ReactImg}
            alt="" />
          <img
            onClick={() => { setBusca('Bootstrap'); setShowBusca('') }}
            className='busca_button'
            src={BootstrapImg}
            alt="" />
          <img
            onClick={() => { setBusca('Node.js'); setShowBusca('') }}
            className='busca_button'
            src={NodeImg}
            alt="" />
          <Button onPress={() => { setBusca(''); setShowBusca('') }}>Limpar</Button>
        </span>
      </div>

      <div className='cards'>
        <h1>{busca ? `${busca}` : 'Todos os projetos'}</h1>

        <Swiper
          // slidesPerView={buscaProjeto.length > 1 ? 2 : 1}
          // slidesPerView={buscaProjeto.length > 2 ? 'auto' : (buscaProjeto.length > 1 ? 2 : 1)}
          slidesPerView={'auto'}
          spaceBetween={0}
          loop={true}
          loopfillgroupwithblank="true"
          pagination={{ clickable: true }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {
            buscaProjeto.map((projeto) => (
              <SwiperSlide key={projeto.id}>
                <CardProjects
                  tech={projeto.tech}
                  Titulo={projeto.Titulo}
                  Description={projeto.Description}
                  LinkRepositorio={projeto.LinkRepositorio}
                  LinkSite={projeto.LinkSite}
                  TechIcon={projeto.TechIcon}
                  Image={projeto.Image}
                />
              </SwiperSlide>
            ))
          }
        </Swiper>

      </div>

    </ProjectStyle>
  );
}

export default Projects;