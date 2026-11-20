import style from '../ComponentsCss/card6.module.css';
import userImg from '../assets/Mask Group (2).png';

function Card6() {
    return (
        <div className={style.container}>
            <div className={style.cardBox}>
                <button className={style.prevBtn}>\/</button>

                <div className={style.contentBox}>
                    <span className={style.quoteLeft}>“</span>
                    <p className={style.description}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                    <span className={style.quoteRight}>”</span>

                    <h3 className={style.userName}>Alexandr Ivchenko</h3>
                    <p className={style.userRole}>Businessman</p>
                </div>

                <div className={style.imgBox}>
                    <img src={userImg} alt="" />
                    <div className={style.iconBox}></div>
                </div>

                <button className={style.nextBtn}>\/</button>
            </div>
        </div>
    );
}

export default Card6;