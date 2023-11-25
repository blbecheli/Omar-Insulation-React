import style from './Footer.module.css'
const Footer = () => {
  return (
    <footer className={style.container}>
      <div className={style.footer}>
        <div className={style.footer__info}>
          {/* <p>Adress:
            <span>
              1234 Main St. Anywhere, ST 00000
            </span>
          </p> */}
          <p>Phone:
            <span>
            <a href="tel:+12369995790">+1 (236) 999-5790</a>
            </span>
          </p>
          <p>Email:
            <span>
              <a href="mailto:omblanco.contracting@gmail.com">omblanco.contracting@gmail.com</a>
            </span>
          </p>
          <img src="./img/logo3.png" alt="logo" className={style.footer__logo} />
        </div>
        <div className={style.footer__social}>
          <p>Social</p>
          <div>            
            <a href={screen.width >= 1024 ? "https://web.whatsapp.com/send?phone=12369995790" : "https://api.whatsapp.com/send?phone=12369995790"} target="_blank" rel="noreferrer"><img src="./img/instagram.svg" alt="instagram" /></a>
            <a href="https://web.whatsapp.com/send?phone=+12369995790" target="_blank" rel="noreferrer"><img src="./img/whatsapp.svg" alt="whatsapp" /></a>
          </div>
        </div>
      </div>
      <div className={style.company}>
        <p> Blanco Insulation © 2023. All Rights Reserved - Developed by BLB </p>
      </div>
    </footer>
  )
}
export default Footer

