import style from '../ComponentsCss/card2.module.css';
import img1 from '../assets/image (68).png'

function Card2() {
    return (
        <div className={style.container}>
            <div className={style.heroCard}>
                
                {/* Қисми чап: Матнҳо ва тугмаи Watch video */}
                <div className={style.leftSide}>
                    <h1 className={style.title}>
                        Find your perfect place to stay
                    </h1>
                    <p className={style.subtitle}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>

                    <div className={style.videoBox}>
                        <button className={style.playBtn}>
                            ▶
                        </button>
                        <span className={style.videoText}>Watch video</span>
                    </div>
                </div>

                {/* Қисми рост: Ҷойи сурати шумо */}
                <div className={style.rightSide}>
                    <img 
                        src={img1} 
                        alt="House" 
                        className={style.heroImg} 
                    />
                </div>

                {/* Панели ҷустуҷӯ дар поён (Search Bar) */}
                <div className={style.searchBar}>
                    <div className={style.searchItem}>
                        <span className={style.icon}>📍</span>
                        <div>
                            <p className={style.itemTitle}>Location</p>
                            <p className={style.itemSub}>United States</p>
                        </div>
                    </div>

                    <div className={style.line}></div>

                    <div className={style.searchItem}>
                        <span className={style.icon}>📅</span>
                        <div>
                            <p className={style.itemTitle}>Check in</p>
                            <p className={style.itemSub}>10 Jun 2021</p>
                        </div>
                    </div>

                    <div className={style.line}></div>

                    <div className={style.searchItem}>
                        <span className={style.icon}>📅</span>
                        <div>
                            <p className={style.itemTitle}>Check out</p>
                            <p className={style.itemSub}>15 Jun 2021</p>
                        </div>
                    </div>

                    <div className={style.line}></div>

                    <div className={style.searchItem}>
                        <span className={style.icon}>👤</span>
                        <div>
                            <p className={style.itemTitle}>Rooms for</p>
                            <p className={style.itemSub}>1 room, 2 guests</p>
                        </div>
                    </div>

                    <button className={style.searchBtn}>
                        🔍 Search...
                    </button>
                </div>

            </div>
        </div>
    );
}

export default Card2;