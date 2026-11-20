import style from '../ComponentsCss/card5.module.css';
import historyImg from '../assets/image (70).png';

function Card5() {
    return (
        <div className={style.container}>
            <div className={style.cardBox}>
                <div className={style.imgBox}>
                    <img src={historyImg} alt="" />
                    <div className={style.iconBox}></div>
                </div>

                <div className={style.contentBox}>
                    <h2 className={style.title}>
                        Discover our History
                    </h2>
                    <p className={style.description}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                    </p>
                    <p className={style.description}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                    <button className={style.exploreBtn}>
                        Explore More
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Card5;