
import styles from './Hero.module.scss';
function Hero() {
  return (
    <div className={styles.hero}>
      <h1 className={styles.title}>My first React App</h1>
      <p className={styles.title}>A simple to-do app, with lists, columns and card</p>
    </div>
  );
}

  export default Hero;