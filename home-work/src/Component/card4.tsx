import style from '../ComponentsCss/card4.module.css';
import img1 from '../assets/Group (7).png';
import img2 from '../assets/parking-area (1) 1.png';
import img3 from '../assets/cappuccino 1.png';
import img4 from '../assets/wifi (2) 1.png';
import img5 from '../assets/flash (1) 1.png';
import img6 from '../assets/swimmer 1.png';
import img7 from '../assets/dumbell 1 (1).png';
import img8 from '../assets/ellipsis 1.png';

function Facilities() {
    return (
        <div className={style.container}>
            <div className={style.leftBox}>
                <h2 className={style.title}>
                    We do our best facilities provide you
                </h2>
                <p className={style.description}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                </p>
                <button className={style.contactBtn}>
                    Contact Now
                </button>
            </div>

            <div className={style.rightGrid}>
                <div className={style.card}>
                    <img src={img1} alt="" />
                    <div className={style.iconBox}></div>
                    <h4 className={style.cardTitle}>Private Workspace</h4>
                </div>

                <div className={style.card}>
                    <img src={img2} alt="" />
                    <div className={style.iconBox}></div>
                    <h4 className={style.cardTitle}>Parking Area</h4>
                </div>

                <div className={style.card}>
                    <img src={img3} alt="" />
                    <div className={style.iconBox}></div>
                    <h4 className={style.cardTitle}>Breakfast</h4>
                </div>

                <div className={style.card}>
                    <img src={img4} alt="" />
                    <div className={style.iconBox}></div>
                    <h4 className={style.cardTitle}>Free Wifi</h4>
                </div>

                <div className={style.card}>
                    <img src={img5} alt="" />
                    <div className={style.iconBox}></div>
                    <h4 className={style.cardTitle}>Free Electricity</h4>
                </div>

                <div className={style.card}>
                    <img src={img6} alt="" />
                    <div className={style.iconBox}></div>
                    <h4 className={style.cardTitle}>Swimming Pool</h4>
                </div>

                <div className={style.card}>
                    <img src={img7} alt="" />
                    <div className={style.iconBox}></div>
                    <h4 className={style.cardTitle}>Exercise Space</h4>
                </div>

                <div className={style.card}>
                    <img src={img8} alt="" />
                    <div className={style.iconBox}></div>
                    <h4 className={style.cardTitle}>Other Service</h4>
                </div>
            </div>
        </div>
    );
}

export default Facilities;