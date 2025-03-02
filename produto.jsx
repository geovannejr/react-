import styles from './Card.module.css';

const Card = ({ title, description, price, image }) => {
  return (
    <div className={styles.card}>
      <img src={image} alt={title} className={styles.image} />
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>{description}</p>
      <p className={styles.price}>R$ {price}</p>
    </div>
  );
};

export default Card;
