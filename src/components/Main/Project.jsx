import React from 'react';
import '../../pages/Project/ProjectPage.css'
import { Link } from 'react-router-dom';
import { ButtomGet } from '../ButtomGet/ButtomGet';

/* Multi idioma */
import { FormattedMessage } from 'react-intl';

/* Swiper */
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";

/* Img */
const proyectImg = require.context('../../img', true);

const Project = () => {
    return (
        <section className="proyectos" id="proyectos">
            <h2 className="heading">
                <FormattedMessage
                    id='projects'
                    defaultMessage='Projects'
                />
            </h2>
            <div className="proyect-site" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                <Swiper
                    spaceBetween={30}
                    loop={true}
                    grabCursor={true}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination, Autoplay]}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                    }}
                    className='proyectos-slider mySwiper'
                >
                    <SwiperSlide className='caja'>
                        <img
                            src={proyectImg(`./proyecto-app-18.png`)}
                            alt='proyectos'

                        />
                 
                        <div className="content">
                            <h3>Fotosia</h3>
                            <p>
                                Social Media App
                            </p>
                            <p className="tecnologias">
                                Dart
                                <span> -</span> RestApi
                                <span> -</span> Git
                                <span> -</span> Block
                            </p>
                            <a href="https://github.com/RihamAhmed16/Fotosia.git" className="custom-btn btn-codigo" target="_blank" rel="noopener noreferrer">Repository</a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='caja'>
                        <img
                            src={proyectImg(`./proyecto-app-17.png`)}
                            alt='proyectos'

                        />
                        <div className="content">
                            <h3>Bookly</h3>
                            <p>
                                E-commerce Project
                            </p>
                            <p className="tecnologias">
                                Dart
                               
                                <span> -</span> MVVM
                                <span> -</span> Block
                                <span> -</span> RestApi
                                <span> -</span> git
                            </p>
                            <a href="https://github.com/RihamAhmed16/bookly.git" className="custom-btn btn-codigo" target="_blank" rel="noopener noreferrer">Repository</a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='caja'>
                        <img
                            src={proyectImg(`./proyecto-7.jpg`)}
                            alt='proyectos'
                        />
                        <div className="content">
                            <h3>Bloom-Market</h3>
                            <p>
                                 E-commerce Project
                            </p>
                            <p className="tecnologias">
                                Dart
                                <span> -</span> Cubit
                                <span> -</span> MvvM
                            </p>
                            <a href="https://github.com/RihamAhmed16/Bloom-Market.git" className="custom-btn btn-codigo" target="_blank" rel="noopener noreferrer">Repository</a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='caja'>
                        <img
                            src={proyectImg(`./proyecto-6.jpg`)}
                            alt='proyectos'
                        />
                        <div className="content">
                            <h3>tic_tac_toe</h3>
                            <p>
                               X-O Game
                            </p>
                            <p className="tecnologias">
                                Dart
                                <span> -</span> GetX
                                <span> -</span> RestApi
                                <span> -</span> Git
                            </p>
                            <a href="https://github.com/RihamAhmed16/tic_tac_toe.git" className="custom-btn btn-codigo" target="_blank" rel="noopener noreferrer">Repository</a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='caja'>
                        <img
                            src={proyectImg(`./proyecto-12.jpg`)}
                            alt='proyectos'
                        />
                        <div className="content">
                            <h3>moives_app</h3>
                            <p>
                               moives_app
                            </p>
                            <p className="tecnologias">
                                Dart
                                <span> -</span> block
                                <span> -</span> MVVM
                                <span> -</span> RestApi
                            </p>
                            <a href="https://github.com/RihamAhmed16/moives_app.git" className="custom-btn btn-codigo" target="_blank" rel="noopener noreferrer">Repository</a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='caja'>
                        <img
                            src={proyectImg(`./proyecto-5.jpg`)}
                            alt='proyectos'
                        />
                        <div className="content">
                            <h3>islami App</h3>
                            <p>
                            islami project
                            </p>
                            <p className="tecnologias">
                            Dart
                                <span> -</span> provider
                                <span> -</span> RestApi
                                <span> -</span> git
                            </p>
                            <a href="https://github.com/RihamAhmed16/islami_c6_sat.git" className="custom-btn btn-codigo" target="_blank" rel="noopener noreferrer">Repository</a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='caja'>
                        <img
                            src={proyectImg(`./proyecto-8.jpg`)}
                            alt='proyectos'
                        />
                        <div className="content">
                            <h3>todo-app</h3>
                            <p>
                                Storage Info
                            </p>
                            <p className="tecnologias">
                            Dart
                                <span> -</span> git
                                <span> -</span> SQfLite
                            </p>
                            <a href="https://github.com/RihamAhmed16/flutter-todo-app.git" className="custom-btn btn-codigo" target="_blank" rel="noopener noreferrer">Repository</a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='caja'>
                        <img
                            src={proyectImg(`./proyecto-10.jpg`)}
                            alt='proyectos'
                        />
                        <div className="content">
                            <h3>News_App</h3>
                            <p>
                                News project
                            </p>
                            <p className="tecnologias">
                            Dart
                                <span> -</span> RestApi
                                <span> -</span> Provider
                            </p>
                            <a href="https://github.com/RihamAhmed16/News_API.git" className="custom-btn btn-codigo" target="_blank" rel="noopener noreferrer">Repository</a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='caja'>
                        <img
                            src={proyectImg(`./proyecto-9.jpg`)}
                            alt='proyectos'
                        />
                        <div className="content">
                            <h3>Delicious App</h3>
                            <p>
                                Fast Food
                            </p>
                            <p className="tecnologias">
                                Java
                                <span> -</span> SQL DP
                                <span> -</span> Xml
                            </p>
                            <a href="https://github.com/RihamAhmed16/Delicious.git" className="custom-btn btn-codigo" target="_blank" rel="noopener noreferrer">Repository</a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='caja'>
                        <img
                            src={proyectImg(`./proyecto-11.jpg`)}
                            alt='proyectos'
                        />
                        <div className="content">
                            <h3>El7a2ny-App</h3>
                            <p>
                            El7a2ny project
                            </p>
                            <p className="tecnologias">
                            Java
                                <span> -</span> SQL dp
                                <span> -</span> xml
                            </p>
                            <a href="https://github.com/RihamAhmed16/El7a2ny-App.git" className="custom-btn btn-codigo" target="_blank" rel="noopener noreferrer">Repository</a>
                        </div>
                    </SwiperSlide>
                </Swiper>
                <div className="swiper-pagination"></div>
            </div>
            {/* <Link className="custom-btn btn-codigo portafolio-btn" to="/project">
                <FormattedMessage
                    id='btn-more-projects'
                    defaultMessage='More projects'
                />
            </Link> */}
            <div className='portafolio-btn'>
                <Link to="/project">
                    <ButtomGet/>
                </Link>
            </div>
        </section>

    )
};
export default React.memo(Project);