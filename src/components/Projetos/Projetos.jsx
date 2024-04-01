import * as C from './styled';
import * as P from '../../pages/styled';
import React from 'react';
import { Link } from 'react-router-dom';

import { projetos } from '../../data/ExpProfissional';

import iconGithub from '../../assets/image/icons/githubXP.png';
import iconLink from '../../assets/image/icons/link.png';


import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './styles.css';


export const Projetos = () => {

    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 7000,
                    disableOnInteraction: false,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper sessaoScroll"
            >
                {projetos.map(x => (
                    <SwiperSlide>
                        <C.LeftContainer urlimage={x.img} href={x.page !== '' ? x.page : '/#expProjetos'} />
                        <C.RightContainer>
                            <P.InfoTitulo>
                                {x.nome}
                            </P.InfoTitulo>
                            <C.Descricao>
                                <p>{x.descricao}</p>
                                <C.LinkIcons>
                                    {
                                        x.urlGithub &&
                                        <Link to={x.urlGithub} target="_blank">
                                            <C.Balao>GitHub</C.Balao>
                                            <C.IconProjeto src={iconGithub} icon="github" />
                                        </Link>
                                    }
                                    {
                                        x.page &&
                                        <Link to={x.page} target="_blank">
                                            <C.Balao>Pagina</C.Balao>
                                            <C.IconProjeto src={iconLink} icon='link' />
                                        </Link>
                                    }
                                </C.LinkIcons>
                            </C.Descricao>
                            <P.ExpSkill>
                                {x.skills.map(x => (<P.ItemT>{x}</P.ItemT>))}
                            </P.ExpSkill>
                        </C.RightContainer>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    )
}
export default Projetos;