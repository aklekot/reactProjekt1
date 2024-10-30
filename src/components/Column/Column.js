import { useSelector } from 'react-redux';
import styles from './Column.module.scss';
import Card from './../Card/Card';
import CardForm from './../CardForm/CardForm';

const Column = ({ id, title, icon }) => {
  // Select cards for the current column by filtering from the Redux store
  const cards = useSelector(state => 
    state.cards.filter(card => card.columnId === id)
  );

  return (
    <div className={styles.column}>
      <header className={styles.header}>
        <h2 className={styles.title}>
          {title} <span>{icon}</span>
        </h2>
      </header>
      <section className={styles.cards}>
        {cards.map(card => (
          <Card key={card.id} {...card} />
        ))}
      </section>
      <CardForm columnId={id} />
    </div>
  );
};

export default Column;
