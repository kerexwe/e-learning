import Button from '../../../../components/Button/Button'
import scss from './FeaturedCategory.module.scss'
import { FeaturedConst } from '../../../../constants/FeaturedConst'
import FeaturedCard from './FeaturedCategoryCard/FeaturedCard'
import { useTranslation } from 'react-i18next'
import { useState,useEffect} from 'react'


function FeaturedCategory() {
    const { t } = useTranslation()

    const [windowSize, setWindowSize] = useState<{ width: number }>({
        width: 0
      });
      
      useEffect(() => {
        const handleResize = () => {
          setWindowSize({
            width: window.innerWidth
          });
        };
      
        handleResize();
      
        window.addEventListener('resize', handleResize);
      
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);
      
      const index = windowSize.width < 576 ? 1 : 0;
    
    return (
        <div className={scss.container}>
            <div className={scss.wrapper}>
                <div className={scss.wrapper__left}>
                    <div className={scss.wrapper__text}>
                        <h2>{t("feature.title")}</h2>
                        <p className='secondary_mid_text'>{t("feature.desc")}</p>
                    </div>
                    <a href="/Blog"><Button type='orange' text={`${t("feature.button")}`}/></a>
                </div>
                <div className={scss.wrapper__right}>
                    {
                        FeaturedConst.slice(index).map((item) => <FeaturedCard key={item.id} {...item} />)
                    }
                </div>
            </div>
        </div>
    )
}

export default FeaturedCategory
