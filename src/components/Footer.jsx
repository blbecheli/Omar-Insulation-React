import style from './Footer.module.css'
const Footer = () => {
  return (
    <footer className={style.container}>
      <div className={style.footer}>
        <div className={style.footer__info}>
          <p>Adress:
            <span>
              1234 Main St. Anywhere, ST 00000
            </span>
          </p>
          <p>Phone:
            <span>
            <a href="tel:+1234567890">1234567890</a>
            </span>
          </p>
          <p>Email:
            <span>
              <a href="mailto:omar@omar.com">omar@omar.com</a>
            </span>
          </p>
          <img src="./img/logo3.png" alt="logo" className={style.footer__logo} />
        </div>
        <div className={style.footer__social}>
          <p>Social</p>
          <div>
            <a href=""><img src="./img/facebook.svg" alt="facebook" /></a>
            <a href="https://www.instagram.com/blancoinsulation/" target="blank"><img src="./img/instagram.svg" alt="instagram" /></a>
            <a href="#"><img src="./img/whatsapp.svg" alt="whatsapp" /></a>
          </div>
        </div>
      </div>
      <div className={style.company}>
        <p> Blanco Insulation © 2023. All Rights Reserved </p>
      </div>
    </footer>
  )
}
export default Footer