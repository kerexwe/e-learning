import React from 'react'
import scss from './ReviewCard.module.scss'
import star from './assets/ic_star_fill.svg'
import users from './assets/ic_users_group.svg'
import file from './assets/ic_book.svg'


interface ReviewCard {
    ava: string,
    name: string,
    category: string,
    reviews: string,
    rating: number,
    students: string,
    courses: number
}

function ReviewCard({ ava, name, category, reviews, rating, students, courses }: ReviewCard) {
    return (
        <a href="">
            <div className={scss.card}>
                <img src={ava} alt="" />
                <div className={scss.card__desc}>
                    <div className={scss.card__title}>
                        <h6>{name}</h6>
                        <p>{category}</p>
                    </div>
                    <div className={scss.card__rating}>
                        <img src={star} alt="" />
                        <h6>({rating} ratings)</h6>
                        <p className='secondary_text'>{reviews}</p>
                    </div>
                    <div className={scss.card__students}>
                        <img src={users} alt="" />
                        <p>{students} students</p>
                    </div>
                    <div className={scss.card__students}>
                        <img src={file} alt="" />
                        <p>{courses} courses</p>
                    </div>
                </div>
            </div>
        </a>
    )
}

export default ReviewCard
