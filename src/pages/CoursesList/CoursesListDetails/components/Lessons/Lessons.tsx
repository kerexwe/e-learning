import React from 'react'
import scss from './Lessons.module.scss'
import LessonCard from './LessonCard/LessonCard'
import fc from './assets/fc.svg'
import inst from './assets/inst.svg'
import inn from './assets/in.svg'
import tw from './assets/tw.svg'
import ReviewCard from './ReviewCard/ReviewCard'
import { ReviewConst } from '../../../../../constants/ReviewConst'
import file from './assets/ic_file.svg'
import note from './assets/ic_certificate.svg'
import desktop from './assets/ic_devices.svg'
import time from './assets/ic_data_accessor.svg'
import download from './assets/ic_document_download.svg'
import Button from '../../../../../components/Button/Button'




function Lessons() {
    return (
        <div className='container'>
            <div className={scss.wrapper}>
                <div className={scss.main}>
                    <div className={scss.main__lessons}>
                        <h4>Lessons</h4>
                        <div className={scss.main__lessons1}>
                            <LessonCard />
                            <div>
                                <LessonCard />

                            </div>
                        </div>
                    </div>
                    <div className={scss.main__checks}>
                        <h4>What You Will Learn</h4>
                        <ul>
                            <li className='secondary_mid_text'>Vulputate placerat amet pulvinar lorem nisl.</li>
                            <li className='secondary_mid_text'>Consequat feugiat habitant gravida quisque elit bibendum id adipiscing sed.</li>
                            <li className='secondary_mid_text'>Etiam duis lobortis in fames ultrices commodo nibh.</li>
                            <li className='secondary_mid_text'>Fusce neque. Nulla neque dolor, sagittis eget, iaculis quis, molestie non, velit.</li>
                            <li className='secondary_mid_text'>Curabitur a felis in nunc fringilla tristique. Praesent congue erat at massa.</li>
                        </ul>
                    </div>
                    <div className={scss.main__buttons}>
                        <h4>Skills You Will Gain</h4>
                        <div>
                            <button><a href="" className='secondary_text'>Photography</a></button>
                            <button><a href="" className='secondary_text'>Design</a></button>
                            <button><a href="" className='secondary_text'>Art</a></button>
                            <button><a href="" className='secondary_text'>History</a></button>
                            <button><a href="" className='secondary_text'>Museums</a></button>
                            <button><a href="" className='secondary_text'>Creativity</a></button>
                            <button><a href="" className='secondary_text'>Art History</a></button>
                        </div>
                    </div>
                    <div className={scss.main__reviews}>
                        <h4>Overview</h4>
                        <p className='secondary_mid_text'>Consentaneum aeternitate dignitati commoventur primisque cupit mea officia peccata parens egone dolorem minuis. Secundae neglegi sextilius conantur commodaita siti philosophi ioca tenere lorem apparet assentior pudoris sint leves neglegebat unde reliquisti simile. </p>
                    </div>
                    <div className={scss.main__sm}>
                        Share:
                        <div>
                            <button>
                                <img src={fc} alt="" />
                                Facebook
                            </button>
                            <button className={scss.inst}>
                                <img src={inst} alt="" />
                                Instagram
                            </button>
                            <button className={scss.in}>
                                <img src={inn} alt="" />
                                LinkedIn
                            </button>
                            <button className={scss.tw}>
                                <img src={tw} alt="" />
                                Twitter
                            </button>
                        </div>
                    </div>
                    <hr />
                    <h4>Instructors (4)</h4>
                    <div className={scss.main__cards}>
                        {
                            ReviewConst.map((item: any) => <ReviewCard key={item.id} {...item} />)
                        }

                    </div>

                </div>
                <div className={scss.sideBar}>
                    <div className={scss.sideBar__card}>
                        <div className={scss.sideBar__price}>
                            <h4>$99</h4>
                            <h3>$59</h3>
                        </div>
                        <div className={scss.sideBar__cards}>
                            <p className='secondary_mid_text'>This course includes:</p>
                            <div>
                                <img src={file} alt="" />
                                <p className='secondary_mid_text'>20 Lessons</p>
                            </div>
                            <div>
                                <img src={download} alt="" />
                                <p className='secondary_mid_text'>12 Downloadable resources</p>
                            </div>
                            <div>
                                <img src={time} alt="" />
                                <p className='secondary_mid_text'>Full lifetime access</p>
                            </div>
                            <div>
                                <img src={desktop} alt="" />
                                <p className='secondary_mid_text'>Access on desktops, tablets, mobile </p>
                            </div>
                            <div>
                                <img src={note} alt="" />
                                <p className='secondary_mid_text'>Certificate of completion</p>
                            </div>

                        </div>
                        <Button className={scss.sideBar__button} type='orange' text="Enrol Now"/>
                    </div>
                    <div></div>
                </div>
            </div>
        </div>
    )
}

export default Lessons
