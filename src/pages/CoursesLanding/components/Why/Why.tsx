import scss from './Why.module.scss'
import img from './assets/Image Ratio.svg'

function Why() {
    return (
        <div className='container'>
            <div className={scss.wrapper}>
                <p className={scss.text}>Nullam accumsan lorem in dui.</p>
                <div className={scss.wrap}>
                    <img src={img} alt="" />
                    <div className={scss.wrap__right}>
                        <div className={scss.wrap__top}>
                            <h3>Phasellus gravida semper nisi. Vestibulum rutrum, mi </h3>
                            <p className='secondary_mid_text'>Curabitur a felis in nunc fringilla tristique. Fusce egestas elit eget lorem. Etiam vitae tortor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos.</p>
                        </div>
                        <div className={scss.wrap__bottom}>
                            <div>
                                <hr />
                                <p className='secondary_text'>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis </p>
                            </div>
                            <div>
                                <hr />
                                <p className='secondary_text'>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Why
