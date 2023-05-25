import Button from '../../../../components/Button/Button'
import scss from './FeaturedCategory.module.scss'
import { FeaturedConst } from '../../../../constants/FeaturedConst'
import FeaturedCard from './FeaturedCategoryCard/FeaturedCard'
import { useTranslation } from 'react-i18next'


function FeaturedCategory() {
    const { t } = useTranslation()
    return (
        <div className={scss.container}>
            <div className={scss.wrapper}>
                <div className={scss.left}>
                    <div className={scss.left__text}>
                        <h2>{t("feature.title")}</h2>
                        <p className='secondary_mid_text'>{t("feature.desc")}</p>
                    </div>
                    <a href="/Blog"><Button type='orange' text={`${t("feature.button")}`}/></a>
                </div>
                <div className={scss.right}>
                    {
                        FeaturedConst.map((item) => <FeaturedCard key={item.id} {...item} />)
                    }
                </div>
            </div>
        </div>
    )
}

export default FeaturedCategory
