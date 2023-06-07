import React from 'react'
import scss from './ListCard.module.scss'
import star from './assets/star.svg'
import level1 from './assets/ic_skill_level_advanced.svg'
import duration from './assets/duration.svg'

type CardProps = {
  image: string,
  category: string,
  name: string,
  avatar: string,
  title: string,
  level: string,
  teachers: string,
  raiting: string
}

function ListCard({ name, image, category, avatar, title, level, teachers, raiting }: CardProps) {
  return (
    <a href='/Courses/list/details/:id'>
    <div className={scss.card}>
      <div className={scss.card__image}>
        <label htmlFor="" className={scss.card__label}>BEST SELLER</label>
        <img src={image} alt="" />
      </div>

      <div className={scss.card__description}>

        <div className={scss.header}>
          <div className={scss.header__desc}>
            <p className={scss.header__category}>{category}</p>
            <div className={scss.header__price}>
              <h5 className={scss.header__item_line}>$99 </h5>
              <h5 className={scss.header__item}>$59</h5>
            </div>
          </div>
          <h6>{title}</h6>
          <p id={scss.p} className='secondary_text'>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere.</p>
        </div>

        <div className={scss.raiting}>
          <div className={scss.raiting__reviews}>
            <img src={star} alt="star" />
            <p>{raiting}</p>
            <p className='secondary_text'>(10,35k reviews)</p>
          </div>
          <hr className={scss.raiting__divider} />
          <div className={scss.raiting__studentsCount}>
            <p>180</p>
            <p className='secondary_text'>students</p>
          </div>
        </div>

        <div className={scss.teachers}>
          <div className={scss.teachers__ava}>
          <img src={avatar} alt="avatar" />
          </div>
          <div className={scss.teachers__name}>
            <p className='secondary_text'>{name}</p>
            <p id={scss.p2} className='secondary_text'>+{teachers} teachers</p>
          </div>
        </div>

        <div className={scss.footer}>
          <div>
            <img src={duration} alt="lg" />
            <p className='secondary_text'>100 hours</p>
          </div>
          <div>
            <img src={level1} alt="ims" />
            <p className='secondary_text'>{level}</p>
          </div>
        </div>

      </div>

    </div>
    </a>
  )
}

export default ListCard
