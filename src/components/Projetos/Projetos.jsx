import * as C from './styled';
import * as P from '../../pages/styled';
import React from 'react';
import { Link } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './styles.css';
import { Pagination, Navigation } from 'swiper/modules';
import { register } from 'swiper/element/bundle';

import { projetos } from '../../data/ExpProfissional';

import iconGithub from '../../assets/image/icons/githubXP.png';
import iconLink from '../../assets/image/icons/link.png';

export const Projetos = () => {
    register();
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
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                {projetos.map(x => (
                    <SwiperSlide>
                        <C.LeftContainer urlImage={x.imgF} />
                        <C.RightContainer>
                            <P.InfoTitulo>
                                {x.nome}
                            </P.InfoTitulo>
                            {x.imgB.map(x => (
                                <>
                                    <C.Descricao>
                                        <p>{x.descricao}</p>
                                        <C.LinkIcons>
                                            <Link to={x.urlGithub} target="_blank">
                                                page
                                                <C.IconGitHub src={iconLink}  icon='link'/>
                                            </Link>
                                            <Link to={x.urlGithub} target="_blank">
                                                <C.IconGitHub src={iconGithub} icon="github"/>
                                            </Link>
                                        </C.LinkIcons>
                                    </C.Descricao>
                                    <P.ExpSkill>
                                        {x.skills.map(x => (<P.ItemT>{x}</P.ItemT>))}
                                    </P.ExpSkill>
                                </>
                            ))}
                        </C.RightContainer>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    )
}
export default Projetos;