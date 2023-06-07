import { useTranslation } from 'react-i18next'
import scss from './FeaturedCard.module.scss'

interface Card {
  title: string,
  desc: string
}

function FeaturedCard({ title, desc}: Card) {
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
