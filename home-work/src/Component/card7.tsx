import style from '../ComponentsCss/card7.module.css';
import mapBgImg from '../assets/map (1).png';

function Card7() {
    return (
        <div className={style.container}>
            <div className={style.mapBox}>
                <img src={mapBgImg} alt="" className={style.bgImg} />
                
                <div className={style.cardOverlay}>
                    <div className={style.leftContent}>
                        <h2 className={style.title}>
                            Location of our Hotelos
                        </h2>
                        <p className={style.description}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                        </p>
                    </div>

                    <div className={style.rightForm}>
                        <input 
                            type="email" 
                            placeholder="Enter your email" 
                            className={style.emailInput} 
                        />
                        <button className={style.contactBtn}>
                            Contact
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card7;