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
import PortImage from '../../assets/img/capa.jpg'
import PugMike from '../../assets/img/Pug_Mike.png'

// Components:
import CardProjects from '../../assets/Components/CardProject/CardProject';

// SVGs
import BootstrapImg from '../../assets/img/bootstrap.svg'
import ReactImg from '../../assets/img/react.svg'
import Button from '../../assets/Components/Button/Button';


const Projects = () => {

  const [busca, setBusca] = useState('');
  const [showBusca, setShowBusca] = useState('');


  const Projetos = [
    {
      id: 1,
      tech: 'React',
      Titulo: "Portfólio",
      Description: 'Meu portfolio,',
      LinkRepositorio: 'https://github.com/LeandroMoniz/portfolio',
      LinkSite: 'https://pug-mike.netlify.app/',
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
  ]

  const buscaProjeto = Projetos.filter((projeto) => projeto.tech.includes(busca));

    return ( 
        <ProjectStyle id='projects'>
            <SectionTitle subTitle={"Meus trabalhos"} Title={"Projetos"}/>
            
            <Button
              className="buscador"
              onPress={() => setShowBusca('active')}>Buscar</Button>
            <div className={`busca ${showBusca}`}>
              <span>
                <img
                  onClick={() => {setBusca('React'); setShowBusca('')}}
                  className='busca_button'
                  src={ReactImg}
                  alt="" />
                <img
                  onClick={() => {setBusca('Vue'); setShowBusca('')}}
                  className='busca_button'
                  src={BootstrapImg}
                  alt="" />
                <Button onPress={() => {setBusca(''); setShowBusca('')}}>Limpar</Button>
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
                loopFillGroupWithBlank={true}
                pagination={{clickable: true}}
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