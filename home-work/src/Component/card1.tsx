import style from '../ComponentsCss/card1.module.css'

function Card1() {
    return(
    <div className={style.div}>

    <div className={style.box}>
    <button>Booking</button>
    <button>Facilities</button>
    <button>About Us</button>
    <button>Location</button>
    <button>Contact</button>
    </div>

    <button className={style.btn}>
    Login
    </button>

    </div>
    )
}

export default Card1;