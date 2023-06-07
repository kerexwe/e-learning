import React from 'react'
import scss from './Hero.module.scss'
import poster1 from './assets/Image Ratio Overlay.svg'
import clocks from './assets/ic_clock.svg'
import level from './assets/ic_skill_level_advanced.svg'
import file from './assets/ic_file.svg'
import lang from './assets/ic_global.svg'
import question from './assets/ic_question.svg'
import ava from './assets/ava.svg'
import star from '../../../CoursesList/components/List/ListCard/assets/star.svg'
import { DefaultPlayer as Video } from 'react-html5video'
import video from './assets/videos/stock-video.mp4'
import 'react-html5video/dist/styles.css'



function Hero() {
    return (
        <div className='container'>
            <div className={scss.top}>
                <ul className={scss.breadcrumb}>
                    <li className={scss.breadcrumb__breadcrumbsItem}>
                        <a className={scss.breadcrumb__breadcrumbsLink} href="/">Design</a>
                    </li>
                    <li className={scss.breadcrumb__breadcrumbsItem}>
                        <a className={scss.breadcrumb__breadcrumbsLink} href='/Courses/list'>Graphic Design & Illustration</a>
                    </li>
                    <li className={scss.breadcrumb__breadcrumbsItem}>
                        <a className={scss.breadcrumb__breadcrumbsLink} href="/Courses/list/details/:id">The Complete Digital Marketing Course - 12 Courses in 1</a>
                    </li>
                </ul>
            </div>
            <div className={scss.footer}>
                <div className={scss.footer__desc}>
                    <div className={scss.footer__title}>
                        <label htmlFor=""><p className='secondary_small_text'>BEST SELLER</p></label>
                        <h3>The Complete Digital Marketing Course - 12 Courses in 1</h3>
                        <p id={scss.design} className='secondary_small_text'>DESIGN</p>
                        <p className='secondary_mid_text'>Master Digital Marketing Strategy, Social Media Marketing, SEO, YouTube, Email, Facebook Marketing, Analytics & More!</p>
                    </div>
                    <div className={scss.footer__raiting}>
                        <div className={scss.footer__reviews}>
                            <img src={star} alt="" />
                            <h5>4.8</h5>
                            <p className='secondary_text'>(10,355 reviews)</p>
                        </div>
                        <hr className={scss.footer__divider} />
                        <div className={scss.footer__students}>
                            <p>180k</p>
                            <p className='secondary_text'> students</p>
                        </div>
                    </div>
                    <div className={scss.footer__teachers}>
                        <img src={ava} alt="ava" />
                        <div>
                            <p className='secondary_text'>Kristin Watson</p>
                            <p id={scss.teach} className='secondary_text'>+10 teachers</p>
                        </div>
                    </div>
                    <hr id={scss.divider1} />
                    <div className={scss.footer__options}>
                        <div className={scss.footer__options_top}>
                            <div>
                                <img src={clocks} alt="icon" />
                                <p className='secondary_text'>100 hours</p>
                            </div>
                            <div>
                                <img src={level} alt="icon" />
                                <p className='secondary_text'>All Levels</p>
                            </div>
                            <div>
                                <img src={file} alt="icon" />
                                <p className='secondary_text'>89 Lessons</p>
                            </div>
                        </div>
                        <div className={scss.footer__options_bottom}>
                            <div>
                                <img src={lang} alt="icon" />
                                <p className='secondary_text'>English</p>
                            </div>
                            <div>
                                <img src={question} alt="icon" />
                                <p className='secondary_text'>89 Quizzes</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={scss.footer__video}>
                    <Video width="320px" height="240px" autoPlay loop
                        poster={poster1}>
                        <source src={video} type='video/webm' />
                    </Video>
                </div>
            </div>
        </div>
    )
}

export default Hero
