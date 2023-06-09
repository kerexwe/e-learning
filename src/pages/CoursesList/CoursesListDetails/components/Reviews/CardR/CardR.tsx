import { useState } from 'react'
import scss from './CardR.module.scss'
import ava from './assets/ava1.svg'
import rating from './assets/Rating.svg'
import like from './assets/like.svg'
import reply from './assets/reply.svg'

interface Card {
    date: string,
    avatar: string,
    message: string,
    replyAva: string
}

function CardR({ date, avatar, message, replyAva }: Card) {
    const [active, setActive] = useState(false)
    return (
        <div className={scss.card}>
            <div className={scss.card__head}>
                <img src={avatar} alt="" />
                <div className={scss.card__desc}>
                    <div className={scss.card__title}>
                        <h6>Ralph Edwards</h6>
                        <img src={rating} alt="" />
                    </div>
                    <p className={scss.card__date}>{date}</p>
                    <p className='secondary_mid_text'>{message}</p>
                    <div className={scss.card__interactions}>
                        <button>
                            <img src={like} alt="" />
                            <p>Helpful (20)</p>
                        </button>
                        <div></div>
                        <button>
                            <img src={reply} alt="" />
                            <p>Reply</p>
                        </button>
                    </div>
                </div>
            </div>
            {!active ? <p onClick={() => setActive(!active)} className='secondary_mid_text' id={scss.p}>Open replies(2)</p> : <p onClick={() => setActive(!active)} className='secondary_mid_text' id={scss.p}>Close replies</p>}

            {active && <div className={scss.card__body}>
                <img src={replyAva} alt="" />
                <div className={scss.card__reply}>
                    <h6>Suraj Gregory</h6>
                    <p className={scss.card__date}>09 Mar 2020</p>
                    <p className='secondary_text'>So when your site is looked for on the search engine it will be very easy to come across as it  <br />
                        will come up as one of the first. This will bring many more people to your web site as <br />
                        well as increase your Google PageRank.</p>
                </div>
            </div>}
            {active && <div className={scss.card__body}>
                <img src={avatar} alt="" />
                <div className={scss.card__reply}>
                    <h6>Suraj Gregory</h6>
                    <p className={scss.card__date}>09 Mar 2020</p>
                    <p className='secondary_text'>So when your site is looked for on the search engine it will be very easy to come across as it  <br />
                        will come up as one of the first. This will bring many more people to your web site as <br />
                        well as increase your Google PageRank.</p>
                </div>
            </div>}


        </div>
    )
}

export default CardR
