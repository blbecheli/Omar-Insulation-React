import styles from './Home.module.css';

const Home = () => {
  return (
    <section className={styles.section}>
      <div className={styles.painel}>
        <div className={styles.painel__title}>
          <h1>High-Performance Thermal Insulation: The warmth of comfort in your home</h1>
        </div>
        <div className={styles.painel__selector}>
          <h4>Projects</h4>
          <div>
            <span>&larr;Back</span>
            <span>Next &rarr;</span>
          </div>
        </div>
      </div>

      <div className={styles.reputation}>
        <h1>Our Reputation</h1>
        <div className={styles.reputation__chart}>
          <div>
            <img src="/img/phone.svg" alt="" />
            <p>Best service</p>
            <span>Nullam senectus porttitor in eget. Eget rutrum leo interdum.</span>
          </div>
          <div>
            <img src="/img/phone.svg" alt="" />
            <p>Best team</p>
            <span>Nullam senectus porttitor in eget. Eget rutrum leo interdum.</span>
          </div>
          <div>
            <img src="/img/phone.svg" alt="" />
            <p>Best Design</p>
            <span>Nullam senectus porttitor in eget. Eget rutrum leo interdum.</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
