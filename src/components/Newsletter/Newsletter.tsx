import { useTranslation } from 'react-i18next';
import Button from '../Button/Button';
import scss from './Newsletter.module.scss'
import img from './assets/Asset 1 2.svg'


function Newsletter() {
    const { t } = useTranslation();

    return (
        <div className={scss.container}>
            <div className={scss.wrapper}>
                <div className={scss.box}>
                    <img src={img} alt="" className={scss.box__mImg} />
                    <div className={scss.box__left}>
                        <div className={scss.box__top}>
                            <h3> {t('news.h3')} </h3>
                            <p className="secondary_mid_text">{t("news.p")}</p>
                        </div>
                        <div className={scss.box__bottom}>
                            <input type="text" placeholder="Enter your email" />
                            <Button className={scss.button} type='orange' text={`${t("news.register")}`} />
                        </div>
                    </div>
                    <img src={img} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Newsletter
