import styles from './Home.module.css';
import { useState, useEffect } from 'react';

const Home = () => {
  const [imgNumber, setImgNumber] = useState(4);

  const handleNext = () => {
    if (imgNumber === 4) {
      setImgNumber(1);
    } else {
      setImgNumber(imgNumber + 1);
    }
  }

  const handleBack = () => {
    if (imgNumber === 1) {
      setImgNumber(4);
    } else {
      setImgNumber(imgNumber - 1);
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      if (imgNumber === 4) {
        setImgNumber(1);
      } else {
        setImgNumber(imgNumber + 1);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [imgNumber]);

  return (
    <section className={styles.section}>
      <div
        className={styles.painel}
        style={{
          background:
            `linear-gradient(90deg, rgba(255, 255, 255, 0.90) 16.58%, rgba(255, 255, 255, 0.00) 72.38%), url("/img/Insulation${imgNumber}.webp") lightgray 50% / cover no-repeat`,
        }}
      >
        <div className={styles.painel__title}>
          <h1>High-Performance Thermal Insulation: The warmth of comfort in your home</h1>
        </div>
        <div className={styles.painel__selector}>
          <h4>Projects</h4>
          <div>
            <span onClick={handleBack}>&larr;Back</span>
            <span onClick={handleNext}>Next &rarr;</span>
          </div>
        </div>
      </div>

      <div className={styles.reputation}>
        <h1>Our Reputation</h1>
        <div className={styles.reputation__chart}>
          <div>
            <img src="img/phone.svg" alt="" />
            <p>Best service</p>
            <span>Excellence in insulating solutions, ensuring superior quality and comfort.</span>
          </div>
          <div>
            <img src="img/phone.svg" alt="" />
            <p>Best team</p>
            <span>Committed experts ensuring the best results for every task.</span>
          </div>
          <div>
            <img src="img/phone.svg" alt="" />
            <p>Best Results</p>
            <span>Achieving the highest-quality results for every endeavor.</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
