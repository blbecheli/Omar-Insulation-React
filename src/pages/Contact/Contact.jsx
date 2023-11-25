import styles from './Contact.module.css'

const Contact = () => {
  return (
    <div className={styles.container}>
      <h1>It will be a pleasure to assist you</h1>
      <h4>Contact us via WhatsApp, Instagram, or email</h4>
      <div className={styles.contact}>

        <a href={screen.width >= 1024 ? "https://web.whatsapp.com/send?phone=12369995790" : "https://api.whatsapp.com/send?phone=12369995790"} target="_blank" rel="noreferrer">
          <img src="./img/whatsapp.svg" alt="whatsapp" />
        </a>
        <a href="https://www.instagram.com/blancoinsulation" target="_blank" rel="noreferrer">
          <img src="./img/instagram.svg" alt="instagram" />
        </a>
        <a href="mailto:omblanco.contracting@gmail.com">
          <img src="/img/email.png" alt="" />
        </a>
      </div>
    </div>
  )
}

export default Contact
