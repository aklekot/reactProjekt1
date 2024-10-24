import styles from './Column.module.scss';
import Card from './../Card/Card';
import CardForm from './../CardForm/CardForm';

const Column = ({ id, title, icon, cards, addCard }) => {
    const handleAddCard = (newCard) => {
        addCard(newCard, id);
    };
    return <article className={styles.column}>
        <h2 className={styles.title}>
            <span className={styles.icon + ' fa fa-' + icon} />
            {title}
        </h2>
        <ul className={styles.cards}>
                {cards.map(card => (
                    <Card key={card.id} title={card.title} />
                ))}
            </ul>
            <CardForm action={handleAddCard} />
    </article>
}

export default Column;