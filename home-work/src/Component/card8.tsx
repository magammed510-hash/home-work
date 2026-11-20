import style from '../ComponentsCss/card8.module.css';

function Card8() {
    return (
        <footer className={style.footer}>
            <div className={style.container}>
                <div className={style.leftCol}>
                    <p className={style.description}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                    <div className={style.socialIcons}>
                        <button className={style.iconBtn}>f</button>
                        <button className={style.iconBtn}>ig</button>
                        <button className={style.iconBtn}>G</button>
                    </div>
                </div>

                <div className={style.col}>
                    <h4 className={style.colTitle}>Home</h4>
                    <div className={style.linkBox}>
                        <p className={style.linkText}>Booking</p>
                        <p className={style.linkText}>Facilities</p>
                        <p className={style.linkText}>Location</p>
                        <p className={style.linkText}>Contact</p>
                    </div>
                </div>

                <div className={style.col}>
                    <h4 className={style.colTitle}>Help</h4>
                    <div className={style.linkBox}>
                        <p className={style.linkText}>About Us</p>
                        <p className={style.linkText}>Help center</p>
                        <p className={style.linkText}>Privacy policy</p>
                        <p className={style.linkText}>FAQs</p>
                    </div>
                </div>

                <div className={style.col}>
                    <h4 className={style.colTitle}>Get the app</h4>
                    <div className={style.linkBox}>
                        <p className={style.linkText}>iOS app</p>
                        <p className={style.linkText}>Android app</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Card8;