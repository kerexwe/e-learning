import { useState } from 'react'
import scss from './Reviews.module.scss'
import CardR from './CardR/CardR'
import { ConstReview2 } from '../../../../../constants/ConstReview2'
import rating from './CardR/assets/Rating.svg'
import img from './assets/iconbase.svg'
import star from './assets/ic_star.svg'
import progress from './assets/Progress.svg'


function Reviews() {

  return (
    <div className='container'>
      <div className={scss.wrapper}>
        <div className={scss.header}></div>
        <div className={scss.footer}>
          <div className={scss.footer__reviews}>
            {
              ConstReview2.map((item: any) => <CardR key={item.id} {...item} />)
            }

          </div>
          <div className={scss.sideBar}>
            <div className={scss.sideBar__rating}>
              <h1>4.6</h1>
              <div>
                <img src={rating} alt="" />
                <p className='secondary_text'>2.32k Reviews</p>
              </div>
            </div>
            <div className={scss.sideBar__stars}>
              <div>
                <div>
                  <img src={star} alt="" />
                  <h5>5</h5>
                </div>
                <img src={progress} alt="" />
                <p className='secondary_text'>421</p>
              </div>
              <div>
                <div>
                  <img src={star} alt="" />
                  <h5>5</h5>
                </div>
                <img src={progress} alt="" />
                <p className='secondary_text'>421</p>
              </div>
              <div>
                <div>
                  <img src={star} alt="" />
                  <h5>4</h5>
                </div>
                <img src={progress} alt="" />
                <p className='secondary_text'>421</p>
              </div>
              <div>
                <div>
                  <img src={star} alt="" />
                  <h5>3</h5>
                </div>
                <img src={progress} alt="" />
                <p className='secondary_text'>421</p>
              </div>
              <div>
                <div>
                  <img src={star} alt="" />
                  <h5>4</h5>
                </div>
                <img src={progress} alt="" />
                <p className='secondary_text'>421</p>
              </div>

            </div>
            <button>
              <img src={img} alt="" />
              <h6>Write a Review</h6>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Reviews
