import styles from '../pages/Home/Home.module.css';

const Imagens = ({ imagemUrl }) => {
    // Passa a URL da imagem como uma propriedade
  
    return (
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
    );
  };
  
  export default Imagens;