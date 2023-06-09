import { useTranslation } from 'react-i18next'
import scss from './TeamCard.module.scss'
import shapeDark from './assets/SHAPEdark.svg'
import shapeLight from './assets/SHAPE.svg'
import { AppSelector } from '../../../../../redux'

function TeamCard({ job, name, image }) {
  const { t } = useTranslation()
  const themeDark = AppSelector((state) => state.themeDark);


  return (
    <div className={scss.card} >
      <div className={scss.card__text}>
        <h6>{t(name)}</h6>
        <p className='secondary_text'>{t(job)}</p>
      </div>
      <img className={scss.img} src={themeDark ? shapeDark : shapeLight} alt="" />
        <img className={scss.img1} src={image} alt="" />
      </div>
  )
}

export default TeamCard
