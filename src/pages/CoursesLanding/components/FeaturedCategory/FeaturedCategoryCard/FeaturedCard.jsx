import { useTranslation } from 'react-i18next'
import scss from './FeaturedCard.module.scss'


function FeaturedCard({ title, desc}) {
  const { t } = useTranslation()

  return (
    <a href="/Blog/details/:id">
    <div className={scss.cardWrap}>
      <h6>{t(title)}</h6>
      <p className='secondary_text'>{t(desc)} {t("feature.student")}</p>
    </div>
    </a>
  )
}

export default FeaturedCard
