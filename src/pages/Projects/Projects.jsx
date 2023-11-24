import styles from './Projects.module.css'

const Projects = () => {

  const number = [1, 2, 3, 4, 5, 6, 7, 8, 9]

  return (
    <div className={styles.container}>
      <h1>Some Projects</h1>
      <div className={styles.project}>
        {number.map((num) => (
          <div key={num} className={styles.project__img}>
            <img src={`/img/imgback${num}.jpg`} alt="" />
          </div>
        ))}

      </div>
    </div>
  )
}
export default Projects