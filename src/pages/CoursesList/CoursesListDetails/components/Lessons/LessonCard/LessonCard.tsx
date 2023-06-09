import { useState } from 'react'
import scss from './LessonCard.module.scss'
import play from './assets/ic_play.svg'
import down from './assets/ic_chevron_down.svg'
import right from './assets/ic_chevron_right.svg'

function LessonCard() { 
    const [active, setActive] = useState(false)
    return (
        <div className={scss.card} onClick={() => setActive(!active)}>
            <div className={!active ? scss.card__head : scss.card__headActive}>
                <div>
                    <img src={play} alt="" />
                    <h6>Lesson 1</h6>
                </div>
                <div>
                    <p className='secondary_text'>02:23</p>
                    {!active ? <img src={right} alt='' /> : <img src={down} alt='' />}
                </div>
            </div>
            {active && <div className={scss.card__body}>
                <p className='secondary_text'>Curabitur nisi. Phasellus blandit leo ut odio. Donec posuere vulputate arcu. Donec mi odio, faucibus at, scelerisque quis, convallis in,</p>
            </div>}
        </div>

    )
}

export default LessonCard


{/* <div className={css.card} onClick={()=> setActive(!active)}>
<div className={css.top}>
<h1>{title}</h1>
<div>
        {!active ? <img src={plus} alt='' /> : <img src={minus} alt=''/>}
    </div>
</div>
{active && <p>{discription}</p>}
</div> */}
